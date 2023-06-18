from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
# setting path
sys.path.append('../../../machine_learning_articles')
import modele as mod

app = Flask(__name__)
CORS(app)

@app.route("/statut")
def statut():
    return "UP !"

@app.route("/recherche", methods = ['POST'])
def recherche():
    if request.method == 'POST':
        data = request.get_json()
        title, text = data['title'], data['text']
        if title=="" or text=="":
            return jsonify("ERREUR - Un des arguments est vide")
        predictions = mod.prediction_modele(title , text)
        return jsonify(predictions)
    return jsonify("POST NE FONCTIONNENT PAS")

if __name__ == '__main__':
    app.run(debug=True)