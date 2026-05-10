class MetadataService:

    def __init__(self, repository):
        self.repository = repository

    def create(self, metadata):
        return self.repository.save(metadata.dict())

    def get(self):
        return self.repository.find_by_id(id)

    def get_all(self):
        return self.repository.find_all()