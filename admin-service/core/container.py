from dependency_injector import containers, providers
from pymongo import MongoClient
from core.config import settings

class Container(containers.DeclarativeContainer):

    config = providers.Configuration()

    mongo_client = providers.Singleton(
        MongoClient,
        settings.MONGO_URI
    )

    database = providers.Factory(
        lambda client: client[settings.DB_NAME],
        mongo_client
    )