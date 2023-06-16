"""
Projet -  

authors :
    Marwane Bahraoui - bahraoui.marwane@gmail.com
"""
from flask import Flask, request, jsonify
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
    return {"resultats": ["res1","res2","res3"]}

@app.route("/recherche_titre/<titre>")
def rechercheAvecTitre(titre):
    #sleep(3)
    predictions = mod.prediction_modele(titre,"aaa")
    return "Vrai"+str(predictions)

@app.route("/recherche", methods = ['POST'])
def recherche():
    if request.method == 'POST':
        data = request.get_json()
        title, text = data['title'], data['text']
        if title=="" or text=="":
            return "ERREUR - Un des arguments est vide"
        predictions = mod.prediction_modele(title , text)
        return jsonify(predictions)
    return "POST NE FONCTIONNENT PAS"

@app.route("/testpost", methods = ['POST'])
def testpost():
    data = request.form
    title, text = data.get('title'), data.get('text')
    predictions = mod.prediction_modele(title , text)
    return predictions


if __name__ == '__main__':
    app.run(debug=True)