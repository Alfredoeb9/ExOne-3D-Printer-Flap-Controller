import uuid

from enum import Enum
from typing import Literal

from fastapi import APIRouter, HTTPException, Request, status
from pydantic import BaseModel

class ManualTestResponse(BaseModel):
    runId: str
    status: Literal["running"]

from .actuator_controller import apply_flap_states, stop_all

router = APIRouter(prefix="/api")

FlapState = Literal["open", "closed"]

class FlapName(str, Enum):
    A = "A"
    B = "B"

class ManualTestRequest(BaseModel):
    flap_a: FlapState
    flap_b: FlapState


class PositionRequest(BaseModel):
    position: FlapState


class PositionResponse(BaseModel):
    flap: FlapName
    commandedPosition: FlapState
    status: Literal["commanded"]

@router.post("/manual-test/run")
def run_manual_test(body: ManualTestRequest, request: Request):
    controller = request.app.state.actuator

    try:
        run_id = controller.start_test(body.flap_a, body.flap_b)
    except RuntimeError as error:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=str(error),
        ) from error
    except OSError as error:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Servo controller is unavailable",
        ) from error

    return ManualTestResponse(runId=run_id, status="running")


@router.post("/manual-test/stop")
def stop_manual_test(request: Request) -> dict[str, str]:
    status_value = request.app.state.actuator.stop_test()
    return {"status": status_value}

@router.post("/manual-test/shutdown")
def shutdown_manual_test(request: Request) -> dict[str, str]:
    status_value = request.app.state.actuator.shutdown()
    return {"status": status_value}

@router.put(
    "/flaps/{flap}/position",
    response_model=PositionResponse,
    status_code=status.HTTP_202_ACCEPTED,
)
def set_flap_position(
    flap: FlapName, body: PositionRequest, request: Request
) -> PositionResponse:
    controller = request.app.state.actuator

    try:
        controller.set_position(flap.value, body.position)
    except RuntimeError as error:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=str(error),
        ) from error
    except OSError as error:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Servo controller is unavailable",
        ) from error

    return PositionResponse(
        flap=flap,
        commandedPosition=body.position,
        status="commanded",
    )
