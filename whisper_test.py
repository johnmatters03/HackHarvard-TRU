import openai
import os

openai.api_key ='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'
audio_file= open("sample_2.mp3", "rb")
transcript = openai.Audio.transcribe("whisper-1", audio_file)
print(transcript)