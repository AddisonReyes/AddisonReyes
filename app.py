import json

from flask import Flask, render_template

app = Flask(__name__)


def load_projects():
    with open("data/projects.json", "r") as file:
        projects = json.load(file)
    return projects


@app.route("/")
def index():
    projects_list = load_projects()
    return render_template("index.html", projects=projects_list)


@app.route("/projects")
def projects():
    return render_template("projects.html")


@app.route("/experience")
def experience():
    return render_template("experience.html")


if __name__ == "__main__":
    app.run(debug=True)
