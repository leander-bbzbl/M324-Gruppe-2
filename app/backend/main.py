from fastapi import FastAPI

app = FastAPI(title="Larpometer API")


@app.get("/")
def root():
    return {"message": "Larpometer API"}
