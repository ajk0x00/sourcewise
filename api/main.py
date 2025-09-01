from fastapi import FastAPI
from fastapi import UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from tempfile import NamedTemporaryFile
from os import getenv

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[getenv('FRONTEND_ORIGIN','*')],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post('/upload')
async def upload_file(file: UploadFile = File(...)):
    """
    Endpoint to upload a file.

    Args:
        file (bytes): The content of the uploaded file.

    Returns:
        dict: A confirmation message.
    """
    with NamedTemporaryFile() as temp_file:
        file_content = await file.read()
        temp_file.write(file_content)
    
    return {'message': 'File uploaded successfully.', 'name': file.filename}
