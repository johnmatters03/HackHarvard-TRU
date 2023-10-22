from flask import Flask
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from flask_cors import CORS

# Create the Flask app instance
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# MongoDB configuration
app.config['MONGO_URI'] = "mongodb+srv://tru-user:maggerbots@trucluster.ordijtm.mongodb.net/?retryWrites=true&w=majority"  # Replace with your MongoDB URI
client = MongoClient(app.config['MONGO_URI'], server_api = ServerApi('1'))
mongo_db = client['tru_data']

# Import and register blueprints if you're using them
# from app.some_blueprint import some_blueprint
# app.register_blueprint(some_blueprint)

# Import other necessary modules or extensions

# Set up any additional configuration settings

# Define context processors or global variables

# Import and register routes at the end
from app import routes