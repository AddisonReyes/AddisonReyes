import json

from flask import Flask, render_template

app = Flask(__name__)


def load_projects() -> list:
    with open("data/projects.json", "r") as file:
        projects = json.load(file)
    return projects


@app.route("/")
def index():
    projects_list: list = load_projects()
    if len(projects_list) > 3:
        projects_list = projects_list[:3]
    return render_template("index.html", projects=projects_list)


@app.route("/projects")
def projects():
    projects_list: list = load_projects()
    return render_template("projects.html", projects=projects_list)


if __name__ == "__main__":
    app.run(debug=True)
