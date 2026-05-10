from pydantic import BaseModel, Field
from typing import List, Dict, Any

class Metadata(BaseModel):
    id: str
    name: str
    layout: Dict[str, Any]
    fields: List[Dict[str, Any]]
    actions: List[Dict[str, Any]]