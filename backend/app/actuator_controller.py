from typing import Any


class ActuatorController:
    def __init__(self, pwm) -> None:
        self.pwm = pwm
        self.channels: dict[str, int] = {"A": 0, "B": 1}

        # Fill these with pulse widths calibrated for your flap mechanics.
        self.pulse_us: dict[str, dict[str, str]] = {
            "A": {"open": "", "closed": ""},
            "B": {"open": "", "closed": ""},
        }

    def set_position(self, flap: str, position: str) -> None:
        channel: int = self.channels[flap]
        pulse_width: int = int(self.pulse_us[flap][position])
        period_us: Any = 1_000_000 / self.pwm.frequency
        duty_cycle: Any = round(pulse_width / period_us * 0xFFFF)
        self.pwm.channels[channel].duty_cycle = duty_cycle
