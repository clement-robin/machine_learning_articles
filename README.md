# machine_learning_articles

## IHM

### Back-end

Installation du serveur back-end :

```
cd WEB/flask-server/
sudo apt install python3-venv
python3 -m venv venv
source venv/bin/activate
pip3 install flask flask_cors
python3 server.py
```

Lancement du serveur back-end :

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
npm run dev
```

