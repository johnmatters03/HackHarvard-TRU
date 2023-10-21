# import pymongo
# import pymongo.mongo_client as mc
# import pymongo.server_api as sa
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://tru-user:maggerbots@trucluster.ordijtm.mongodb.net/?retryWrites=true&w=majority"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# Send a ping to confirm a successful connection
# try:
#     client.admin.command('ping')
#     print("Pinged your deployment. You successfully connected to MongoDB!")
# except Exception as e:
#     print(e)

db = client['sample_mflix']

collection = db['comments']

cursor = collection.find({'name': {'$regex': '^R'}}).sort("name", 1)
for doc in cursor:
    print(doc)