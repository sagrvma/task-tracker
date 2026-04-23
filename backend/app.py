from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

tasks = [
    {"id": 1, "title": "Basic initial setup", "done": True},
    {"id": 2, "title": "Build Task Tracker", "done": False},
    {"id": 3, "title": "Connect with React", "done": False}
]

@app.route("/api/tasks")
def get_tasks():
    return jsonify(tasks)

@app.route("/api/tasks", methods=["POST"])
def add_task():
    data = request.get_json()
    new_task = {
        "id": len(tasks)+1,
        "title": data["title"],
        "done": False
    }
    tasks.append(new_task)
    return jsonify(tasks), 201


if __name__ == "__main__":
    app.run(debug=True)