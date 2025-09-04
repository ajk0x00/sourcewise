from fastapi import FastAPI
from fastapi import UploadFile, File
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware

from dotenv import load_dotenv
from tempfile import NamedTemporaryFile
from os import getenv
from vector_db import VectorStore

from langchain_community.document_loaders import UnstructuredPDFLoader
from langchain_community.document_loaders import UnstructuredWordDocumentLoader
from langchain_community.document_loaders import UnstructuredFileLoader

load_dotenv()
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[getenv('FRONTEND_ORIGIN','*')],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
vector_store = VectorStore(
    uri=getenv('VDB_URI'),
    token=getenv('VDB_TOKEN')
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
    documents = []
    with NamedTemporaryFile() as temp_file:
        file_content = await file.read()
        temp_file.write(file_content)
        content_type = file.content_type
        if content_type == 'application/pdf':
            loader = UnstructuredPDFLoader(temp_file.name, mode='paged')
        elif content_type == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
            loader = UnstructuredWordDocumentLoader(temp_file.name)
        else:
            loader = UnstructuredFileLoader(temp_file.name)
        documents = loader.load()
        filename = file.filename
        for doc in documents:
            doc.metadata['source'] = filename
            doc.metadata.pop("languages", None)
    return StreamingResponse(
        add_documents_to_vectorstore(documents, filename),
        media_type="text/event-stream"
    )

def add_documents_to_vectorstore(documents, filename):
    for response in vector_store.add_documents(documents, filename):
        yield f"data: {response}"
