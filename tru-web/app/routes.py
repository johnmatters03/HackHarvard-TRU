from flask import request, jsonify, render_template
from bson import json_util
import json
from app import app, mongo_db  # Import the Flask app instance and the MongoDB database instance
import openai
from io import BytesIO
import tempfile
from pydub import AudioSegment
import datetime
import inspect

api_key ='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'
openai.api_key = api_key
GLOBAL_ID = 1

def get_bio(transcript):
    return "No bio yet!"

@app.route('/update_item', methods=['POST'])
def update_item():
    file = request.files['audio']
    data = file.read()
    audio = AudioSegment.from_file(BytesIO(data))
    with tempfile.NamedTemporaryFile(delete=False, suffix='.mp3') as temp_file:
        audio.export(temp_file, format='mp3')
        audioTranscript = openai.Audio.transcribe("whisper-1", temp_file)
    

    new_subject = request.form.get("subject")
    new_authorName = request.form.get("authorName")
    new_relationship = request.form.get("relationship")
    new_pronouns = request.form.get("pronouns")
    new_briefSummary = request.form.get("briefSummary")
    new_birthYear = request.form.get("birthYear")
    new_audioTranscript = audioTranscript["text"]
    # new_bioId = request.form.get("bioId")
    new_bioId = '65347d191ebfd94f92903b80'

    items_collection = mongo_db.biographies
    past_items = items_collection.find({'_id': new_bioId}).sort({'date': -1})
    newest_item = list(past_items)[0]

    print(newest_item)




    # old_subject = request.form.get("subject")
    # old_authorName = request.form.get("authorName")
    # old_relationship = request.form.get("relationship")
    # old_pronouns = request.form.get("pronouns")
    # old_briefSummary = request.form.get("briefSummary")
    # old_birthYear = request.form.get("birthYear")
    # old_audioTranscript = audioTranscript["text"]
    # old_bioId = request.form.get("GLOBAL_ID")


    # items_collection = mongo_db.biographies

    # result = items_collection.insert_one({ 'subject': subject,
    #                                       'authorName': authorName,
    #                                       'relationship': relationship,
    #                                       'pronouns': pronouns,
    #                                       'briefSummary': briefSummary,
    #                                       'birthYear': birthYear,
    #                                       'audioData': data,
    #                                       'audioTranscript': })
    
    return index()


# Adding Data to MongoDB
@app.route('/add_item', methods=['POST'])
def add_item():
    global GLOBAL_ID

    file = request.files['audio']
    data = file.read()
    audio = AudioSegment.from_file(BytesIO(data))
    with tempfile.NamedTemporaryFile(delete=False, suffix='.mp3') as temp_file:
        audio.export(temp_file, format='mp3')
        audioTranscript = openai.Audio.transcribe("whisper-1", temp_file)

    subject = request.form.get("subject")
    authorName = request.form.get("authorName")
    relationship = request.form.get("relationship")
    pronouns = request.form.get("pronouns")
    briefSummary = request.form.get("briefSummary")
    birthYear = request.form.get("birthYear")
    audioTranscript = audioTranscript["text"]

    items_collection = mongo_db.biographies  # "items" is the name of the collection in MongoDB


    result = items_collection.insert_one({'subject': subject,
                                          'authorName': authorName,
                                          'relationship': relationship,
                                          'pronouns': pronouns,
                                          'briefSummary': briefSummary,
                                          'birthYear': birthYear,
                                          'audioData': data,
                                          'audioTranscript': audioTranscript,
                                          'biography': get_bio(audioTranscript),
                                          'date': datetime.datetime.now(), 
                                          'bioId': GLOBAL_ID})
    

    GLOBAL_ID += 1

    data_point = items_collection.find({'_id': result.inserted_id})
    inserted = (list(data_point)[0])
    # print(inserted)
    print(inserted['_id'])
    return json.loads(json_util.dumps(inserted))
    
    # if result.acknowledged:
    #     return jsonify({"message": "Item added successfully", "item_id": str(result.inserted_id)})
    # else:
    #     return jsonify({"error": "Failed to add item"}, 500)

    # file_2 = request.files['audio']
    # print(file)
    # try:
    #     data = file.read()
    #     print(data)
    #     # audioTranscript = openai.Audio.transcribe("whisper-1", file)
    #     # print(audioTranscript)
    # except Exception as e:
    #     print("Cannot be read!")
    #     print(e)


    # try:
    #     audio = AudioSegment.from_file(BytesIO(data))

    #     with tempfile.NamedTemporaryFile(delete=False, suffix='.mp3') as temp_file:
    #         audio.export(temp_file, format="mp3")
    #         print(temp_file)
    #         audioTranscript = openai.Audio.transcribe("whisper-1", temp_file)
    #     print(audioTranscript)
    # except Exception as e:
    #     print("Cannot be transcribed!")
    #     print(e)

    # data = request.get_json()
    # subject = data['subject']
    # birthYear = data['birthYear']
    # relationship = data['relationship']
    # authorName = data['authorName']
    # briefSummary = data['briefSummary']
    # audioBlob = data['audio']
    # print("BLOB")
    # print(audioBlob)
    # print("\n\n")
    # print("TYPE")
    # print(type(audioBlob))
    # print("\n\n")
    # audioTranscript = openai.Audio.transcribe("whisper-1", audioBlob)
    # print("TRANSCRIPT")
    # print(audioTranscript)
    # print("\n\n")
    # audioData = audioBlob.read()
    # print("DATA")
    # print(audioData)
    # print("\n\n")

    #return index()
    
    # items_collection = mongo_db.biographies  # "items" is the name of the collection in MongoDB


    # result = items_collection.insert_one(new_item)
    
    # if result.acknowledged:
    #     return jsonify({"message": "Item added successfully", "item_id": str(result.inserted_id)})
    # else:
    #     return jsonify({"error": "Failed to add item"}, 500)

# Querying Data from MongoDB
@app.route('/get_all_items', methods=["GET"])
def get_all_items():
    items_collection = mongo_db.biographies


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
    return render_template('index.html')  # Reuse the get_items function to return all items when accessing the root endpoint

