from fastapi import APIRouter, Depends
from models.metadata import Metadata
from core.container import Container
from repository.metadata_repository import MetadataRepository
from service.metadata_service import MetadataService

router = APIRouter()

def get_service(container: Container = Depends()):
    db = container.database()
    repo = MetadataRepository(db)
    return MetadataService(repo)

@router.post("/metadata")
def create(payload: Metadata, service=Depends(get_service)):
    return service.create(payload)

@router.get("/metadata/{screen_id}")
def get(screen_id: str, service=Depends(get_service)):
    return service.get(screen_id)

@router.get("/metadata")
def get_all(service=Depends(get_service)):
    return service.get_all()