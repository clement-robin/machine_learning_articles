# machine_learning_articles

## Pré-traitement donnees

Notre dataset a été pré-traité afin de pouvoir garantir la qualité des données d'entrée, améliorer les performances des modèles et faciliter l'apprentissage automatique.
Ce pré-traitement est bien indiqué dans le [fichier "Data Processing.py"](https://github.com/clement-robin/machine_learning_articles/blob/main/Data%20Processing.ipynb).

## Modeles

Nos modèles sont déjà entrainés comme indiquées dans le [fichier modele_final.ipynb](https://github.com/clement-robin/machine_learning_articles/blob/main/Mod%C3%A8le_final.ipynb).
Ils ont été enregistrées dans un fichier grâce à la libraire joblib dans le [dossier "modeles"](https://github.com/clement-robin/machine_learning_articles/tree/main/WEB/flask_server/modeles) dans "WEB/flask_server/".

*Note : "tfidif.joblib" n'est pas un modèle entrainé.*

## IHM

Veuillez trouver ci-dessous les commandes nécessaires pour le bon fonctionnement de notre IHM basé principalement sur Flask et ReactJS.

*Note: Ces commandes sont des commandes shell sur un environnement ubuntu mais il est tout de même possible de lancer les serveurs sur windows ou autre OS en adaptant ces commandes.*

### Back-end

Installer le serveur back-end :

```
cd WEB/flask-server/
sudo apt install python3-venv
python3 -m venv venv
source venv/bin/activate
pip3 install -r requirements.txt
python3 server.py
```

Lancer le serveur back-end :

```
cd WEB/flask-server/
source venv/bin/activate
python3 server.py
```

### Front-end

Lancer le serveur front-end :

```
cd WEB
rm -rf node_modules/
npm install
npm run dev
```

