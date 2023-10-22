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
    new_audioTranscript = None
    new_audioData = None
    if file != None:
        data = file.read()
        audio = AudioSegment.from_file(BytesIO(data))
        with tempfile.NamedTemporaryFile(delete=False, suffix='.mp3') as temp_file:
            audio.export(temp_file, format='mp3')
            audioTranscript = openai.Audio.transcribe("whisper-1", temp_file)
        new_audioTranscript = audioTranscript["text"]
        new_audioData = data
    

    new_subject = request.form.get("subject")
    new_authorName = request.form.get("authorName")
    new_relationship = request.form.get("relationship")
    new_pronouns = request.form.get("pronouns")
    new_briefSummary = request.form.get("briefSummary")
    new_birthYear = request.form.get("birthYear")
    new_biography = request.form.get("biography")

    new_bioId = request.form.get("bioId")
    # new_bioId = 1 # <-- FAKE

    items_collection = mongo_db.biographies
    past_items = items_collection.find({'_id': new_bioId}).sort({'date': -1})
    newest_item = list(past_items)[0]

    print(newest_item)

    old_subject = newest_item["subject"]
    old_authorName = newest_item["authorName"]
    old_relationship = newest_item["relationship"]
    old_pronouns = newest_item["pronouns"]
    old_briefSummary = newest_item["briefSummary"]
    old_birthYear = newest_item["birthYear"]
    old_audioTranscript = newest_item["audioTranscript"]
    old_audioData = newest_item["audioData"]
    old_biography = newest_item["biography"]



    if new_subject == None:
        new_subject = old_subject
    if new_authorName == None:
        new_authorName = old_authorName
    if new_relationship == None:
        new_relationship = old_relationship
    if new_pronouns == None:
        new_pronouns = old_pronouns
    if new_briefSummary == None:
        new_briefSummary = old_briefSummary
    if new_birthYear == None:
        new_birthYear = old_birthYear
    if new_audioTranscript == None:
        new_audioTranscript = old_audioTranscript
    if new_audioData == None:
        new_audioData = old_audioData
    


    # items_collection = mongo_db.biographies

    result = items_collection.insert_one({ 'subject': new_subject,
                                          'authorName': new_authorName,
                                          'relationship': new_relationship,
                                          'pronouns': new_pronouns,
                                          'briefSummary': new_briefSummary,
                                          'birthYear': new_birthYear,
                                          'audioData': new_audioData,
                                          'audioTranscript': new_audioTranscript,
                                          'biography': new_biography,
                                          'date': datetime.datetime.now(),
                                          'bioId': new_bioId})
    
    data_point = items_collection.find({'_id': result.inserted_id})
    inserted = (list(data_point)[0])
    # print(inserted)
    print(inserted['_id'])
    return json.loads(json_util.dumps(inserted))

@app.route('/add_meta', methods=['POST'])
def add_meta():
    global GLOBAL_ID

    r_json = request.get_json()
    subject = r_json['subject']
    # print("Subject", subject)
    authorName = r_json['authorName']
    relationship = r_json['relationship']
    pronouns = r_json['pronouns']
    briefSummary = r_json['briefSummary']
    birthYear = r_json['birthYear']

    items_collection = mongo_db.biographies  # "items" is the name of the collection in MongoDB


    result = items_collection.insert_one({'subject': subject,
                                          'authorName': authorName,
                                          'relationship': relationship,
                                          'pronouns': pronouns,
                                          'briefSummary': briefSummary,
                                          'birthYear': birthYear,
                                          'bioId': GLOBAL_ID})

    GLOBAL_ID += 1

    print(result.inserted_id)
    return str(result.inserted_id)

@app.route('/add_audio', methods=['POST'])
def add_audio():

    file = request.files['audio']
    inserted_id = request.form.get('inserted_id')

    data = file.read()
    audio = AudioSegment.from_file(BytesIO(data))
    with tempfile.NamedTemporaryFile(delete=False, suffix='.mp3') as temp_file:
        audio.export(temp_file, format='mp3')
        audioTranscript = openai.Audio.transcribe("whisper-1", temp_file)


    items_collection = mongo_db.biographies  # "items" is the name of the collection in MongoDB

    my_item = list(items_collection.find({'_id': inserted_id}).sort({'date': -1}))[0]
    meta = { 'subject': my_item['subject'],
            'authorName': my_item['authorName'],
            'relationship': my_item['relationship'],
            'briefSummary': my_item['briefSummary'],
            'birthYear': my_item['birthYear'],
            'pronouns': my_item['pronouns'] }
    

    my_biography = get_bio(audioTranscript, meta)

    result = items_collection.update_one({'_id': inserted_id}, {'$set': {'audioData': data, 
                                                                         'audioTranscript': audioTranscript,
                                                                         'biography': my_biography,
                                                                         'date': datetime.datetime.now()}})

    data_point = items_collection.find({'_id': result.inserted_id})
    inserted = (list(data_point)[0])
    # print(inserted)
    print(inserted['_id'])
    return json.loads(json_util.dumps(inserted))


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

