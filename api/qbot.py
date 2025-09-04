from vector_db import VectorStore
from qbot import Qbot

from langchain_google_genai import GoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate

class Qbot:

    def __init__(self, vector_store = None, llm = GoogleGenerativeAI(model="models/gemini-pro")):
        if not vector_store:
            vector_store = VectorStore(
                uri=getenv('VDB_URI'),
                token=getenv('VDB_TOKEN')
            )
        self.vector_store = vector_store
        self.llm = llm

    def ask(self, question):
        context = self.vector_store.query_similar_context(question)
        template = """
        Answer the question based only on the following context:
        {context}

        Question: {question}
        """
        prompt = ChatPromptTemplate.from_template(template)

        chain = prompt | llm

        return chain.stream({"context": context, "question": question})