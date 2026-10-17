from typing import Any
import threading
import time
import uuid

try:
    from rpi_hardware_pwm import HardwarePWM
except ImportError:  # lets the API run on a dev machine without a Pi
    HardwarePWM = None

PWM_HZ = 50
PERIOD_US = 1_000_000 / PWM_HZ

# Calibrate these to your flap's mechanical limits; don't drive into a hard stop.
OPEN_US = 2000
CLOSE_US = 1000
MOVE_TIME_S = 0.3

class ActuatorController:
    def __init__(self) -> None:
        self.flaps = {
            "A": Servo("Flap A", channel=0),
            "B": Servo("Flap B", channel=1),
        }
        self._stop_event = threading.Event()
        self._state_lock = threading.Lock()
        self._command_lock = threading.Lock()
        self._worker: threading.Thread | None = None
        self._run_id: str | None = None

    def set_position(self, flap: str, position: str) -> None:
        with self._command_lock:
            with self._state_lock:
                if self._worker and self._worker.is_alive():
                    raise RuntimeError("Stop the test before commanding an individual flap")

            self.flaps[flap].set_state(position)

    def apply_flap_states(self, flap_a: str, flap_b: str) -> None:
        with self._command_lock:
            self.flaps["A"].set_state(flap_a)
            self.flaps["B"].set_state(flap_b)

    def start_test(self, flap_a: str, flap_b: str) -> str:
        with self._state_lock:
            if self._worker and self._worker.is_alive():
                raise RuntimeError("A test is already running")

            self._stop_event.clear()
            self._run_id = str(uuid.uuid4())
            self._worker = threading.Thread(
                target=self._run_test,
                args=(flap_a, flap_b),
                daemon=True,
            )
            self._worker.start()
            return self._run_id

    def _run_test(self, flap_a: str, flap_b: str) -> None:
        positions = {"A": flap_a, "B": flap_b}

        try:
            while not self._stop_event.is_set():
                self.apply_flap_states(positions["A"], positions["B"])

                if self._stop_event.wait(MOVE_TIME_S):
                    break

                positions = {
                    flap: "closed" if position == "open" else "open"
                    for flap, position in positions.items()
                }
        finally:
            with self._state_lock:
                self._worker = None
                self._run_id = None

    def stop_test(self) -> str:
        self._stop_event.set()

        with self._state_lock:
            return "stopping" if self._worker and self._worker.is_alive() else "idle"

    def shutdown(self) -> None:
        self._stop_event.set()

        with self._state_lock:
            worker = self._worker

        if worker:
            worker.join(timeout=MOVE_TIME_S + 1)

        for servo in self.flaps.values():
            servo.stop_pwm()

class Servo:
    def __init__(self, name: str, channel: int):
        self.name = name
        self.pwm = HardwarePWM(pwm_channel=channel, hz=PWM_HZ, chip=0) if HardwarePWM else None
        self.started = False

    def set_pulse(self, pulse_us: int) -> None:
        duty = pulse_us / PERIOD_US * 100
        if self.pwm is None:
            print(f"[mock] {self.name} -> {pulse_us}us ({duty:.2f}%)")
            return
        if not self.started:
            self.pwm.start(duty)
            self.started = True
        else:
            self.pwm.change_duty_cycle(duty)

    def set_state(self, position: str) -> None:
        if position not in ("open", "closed"):
            raise ValueError("Position must be 'open' or 'closed'")

        pulse_us = OPEN_US if position == "open" else CLOSE_US
        duty = pulse_us / PERIOD_US * 100

        if self.pwm is None:
            print(f"[mock] {self.name} -> {position} ({pulse_us}us)")
        elif not self.started:
            self.pwm.start(duty)
            self.started = True
        else:
            self.pwm.change_duty_cycle(duty)

    def stop_pwm(self) -> None:
        if self.pwm and self.started:
            self.pwm.stop()
            self.started = False


flaps = {
    "A": Servo("Flap A", channel=0),  # GPIO18
    "B": Servo("Flap B", channel=1),  # GPIO19
}


def apply_flap_states(flap_a: str, flap_b: str) -> None:
    flaps["A"].set_state(flap_a)
    flaps["B"].set_state(flap_b)
    time.sleep(MOVE_TIME_S)


def stop_all() -> None:
    for servo in flaps.values():
        servo.stop_pwm()

