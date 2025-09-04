import json
from langchain_milvus import Milvus
from langchain_google_genai import GoogleGenerativeAIEmbeddings


class VectorStore:

    def __init__(self, uri: str, token: str):
        gemini_embedding = GoogleGenerativeAIEmbeddings(
            model='models/gemini-embedding-001'
        )
        self.vectorstore = Milvus(
            collection_name="source_wise",
            embedding_function=gemini_embedding,
            connection_args={
                'uri': uri,
                'token': token,
                'secure': True
            },
            auto_id=True
        )
        self.batch_size = 50

    def add_documents(self, documents, filename):
        for i in range(0, len(documents), self.batch_size):
            batch = documents[i: i + self.batch_size]
            self.vectorstore.add_documents(batch)
            response = json.dumps({
                'file': filename,
                'progress': f'{(i + self.batch_size) / len(documents) * 100:.2f}%',
            })
            yield response

if __name__ == '__main__':
    from dotenv import load_dotenv
    from os import getenv
    from langchain_core.documents import Document
    load_dotenv()

    uri = getenv('VDB_URI')
    token = getenv('VDB_TOKEN')

    # Example usage
    milvus_instance = VectorStore(uri, token)
    print('add doc call')
    for data in milvus_instance.add_documents([
        Document(
            page_content='This is a test document.',
            metadata={'source': 'test_source'}
        )
    ], 'test_source.pdf'):
        print(data)
