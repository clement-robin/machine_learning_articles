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
    predictions = mod.prediction_modele(titre,"aaa","aaa")
    return "Vrai"

@app.route("/recherche", methods = ['POST'])
def recherche():
    if request.method == 'POST':
        data = request.get_json()
        title, subject, text = data['title'], data['subject'], data['text']
        if title=="" or subject=="" or text=="":
            return "ERREUR - Un des arguments est vide"
        predictions = mod.prediction_modele(title , text, subject)
        return jsonify(predictions)
    return "POST NE FONCTIONNENT PAS"

@app.route("/testpost", methods = ['POST'])
def testpost():
    data = request.form
    title, subject, text = data.get('title'), data.get('subject'), data.get('text')
    predictions = mod.prediction_modele(title , text, subject)
    return predictions


if __name__ == '__main__':
    app.run(debug=True)