This project contains:

flask-api/ → A Flask API that performs sentiment analysis.

express-server/ → An Express.js API that forwards requests to the Flask API.

First, install the dependencies in the package JSON file.

Run the Flask API using the command: python cd/folderpath/flask-api.py

Run the Express.js API using the command: node .\express-server.js

Test Flask API (Port 5000) using only flask: curl -X POST "http://127.0.0.1:5000/predict" -H "Content-Type: json" -d "{ "text": "write your text here" }"

Test Express API (Port 3000): curl -X POST "http://127.0.0.1:3000/analyze-sentiment" -H "Content-Type: json" -d "{ "text": "write your text here" }"