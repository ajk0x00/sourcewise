from langchain_google_genai import GoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate


class Qbot:

    def __init__(self, vector_store, llm=None):
        if not llm:
            llm = GoogleGenerativeAI(model="models/gemini-2.5-flash")
        self.vector_store = vector_store
        self.llm = llm

    def ask(self, question):
        context = self.vector_store.query_similar_context(question)
        string_contexts = "\n".join([doc.page_content for doc in context])
        template = """
            You are a helpful assistant. Answer the question strictly
            based on the provided context. If you don't know the answer,
            just say that you don't know, don't try to make up an answer.
            You can answer general greetings and farewells. Make sure your
            Response is in markdown format.
            Use the following pieces of context to answer the question at the end.
            Question: {question}
            Context: {context}
        """
        prompt = ChatPromptTemplate.from_template(template)
        chain = prompt | self.llm
        return chain.stream({"context": string_contexts, "question": question})
