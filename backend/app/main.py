from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .actuator_controller import ActuatorController
from .routes import router


@asynccontextmanager
async def lifespan(app: FastAPI):
    app.state.actuator = ActuatorController()
    try:
        yield
    finally:
        app.state.actuator.shutdown()


app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        # Add the UI's deployed origin, for example:
        # "http://192.168.1.50:5173",
    ],
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type"],
)

app.include_router(router)