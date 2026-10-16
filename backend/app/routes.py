from enum import Enum
from typing import Literal

from fastapi import APIRouter, HTTPException, Request, status
from pydantic import BaseModel

router = APIRouter(prefix="/api")


class FlapName(str, Enum):
    A = "A"
    B = "B"


class PositionRequest(BaseModel):
    position: Literal["open", "closed"]


class PositionResponse(BaseModel):
    flap: FlapName
    commandedPosition: Literal["open", "closed"]
    status: Literal["commanded"]


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
