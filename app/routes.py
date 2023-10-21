from flask import request, jsonify, render_template
from bson import json_util
import json
from app import app, mongo_db  # Import the Flask app instance and the MongoDB database instance

# Adding Data to MongoDB
@app.route('/add_item', methods=['POST'])
def add_item():
    data = request.get_json()
    name = data['name']
    description = data['description']
    
    items_collection = mongo_db.comments  # "items" is the name of the collection in MongoDB
    
    new_item = {
        "name": name,
        "description": description
    }
    
    result = items_collection.insert_one(new_item)
    
    if result.acknowledged:
        return jsonify({"message": "Item added successfully", "item_id": str(result.inserted_id)})
    else:
        return jsonify({"error": "Failed to add item"}, 500)

# Querying Data from MongoDB
@app.route('/get_items', methods=['GET'])
def get_items():
    # return ("HI")
    items_collection = mongo_db.comments  # "items" is the name of the collection in MongoDB
    
    query = request.args.get('query')  # Get the 'query' parameter from the URL
    
    if query:
        # If a 'query' parameter is provided, perform a filtered query
        items = list(items_collection.find({"name": {"$regex": query}}, {"_id": 0}).limit(10))
    else:
        # If no 'query' parameter is provided, return all items
        items = list(items_collection.find({}, {"_id": 0}).limit(10))

    items = (json.loads(json_util.dumps(items)))

    return items


# Define other routes and view functions as needed
# Index Route to List All Items
@app.route('/', methods=['GET'])
def index():
    return get_items()  # Reuse the get_items function to return all items when accessing the root endpoint

