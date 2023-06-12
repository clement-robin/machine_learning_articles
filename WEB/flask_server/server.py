
from flask import Flask
from flask_cors import CORS
from time import sleep
import sys
# setting path
sys.path.append('../../../machine_learning_articles')
import modele as mod

app = Flask(__name__)
CORS(app)

@app.route("/statut")
def statut():
    return "UP !"

@app.route("/resultats")
def resultats():
    sleep(2)
    if mod.prediction_modele("aaa"):
        return {"resultats": ["res1","res2","res3"]}
    else:
        return {"resultats": ["res4","res5","res6"]}

@app.route("/recherche/<titre>")
def rechercheAvecTitre(titre):
    #sleep(3)
    if mod.prediction_modele(titre):
        return "Vrai"
    else:
        return "Faux"


if __name__ == '__main__':
    app.run(debug=True)