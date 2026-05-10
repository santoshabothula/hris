class MetadataRepository:

    def __init__(self, db):
        self.collection = db["metadata"]

    def save(self, metadata: dict):
        return self.collection.insert_one(metadata)

    def find_by_id(self):
        return self.collection.find_one({"id": id})

    def find_all(self):
        return list(self.collection.find())
