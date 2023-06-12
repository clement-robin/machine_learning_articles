
from flask import Flask
from flask_cors import CORS
from time import sleep

app = Flask(__name__)
CORS(app)

@app.route("/resultats")
def resultats():
    sleep(3)
    return {"resultats": ["res1","res2","res3"]}


if __name__ == '__main__':
    app.run(debug=True)