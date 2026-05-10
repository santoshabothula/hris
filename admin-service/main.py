from fastapi import FastAPI
from api.metadata_api import router as metadata_router
from core.config import settings

app = FastAPI(title=settings.APP_NAME)

app.include_router(
    metadata_router,
    prefix=settings.CONTEXT_PATH
)