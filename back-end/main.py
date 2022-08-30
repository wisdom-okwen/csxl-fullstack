from fastapi import FastAPI

app = FastAPI()

@app.get("/api/health")
def read_root():
    return "Hello World!"
