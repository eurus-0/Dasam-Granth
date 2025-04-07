from flask import Flask, render_template, jsonify
import json

app = Flask(__name__)

# Load Jaap Sahib data
def load_scripture():
    with open("data/jaap_sahib.json", encoding="utf-8") as f:
        return json.load(f)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/scripture/jaap-sahib")
def scripture():
    data = load_scripture()
    return render_template("scripture.html", scripture=data)

if __name__ == "__main__":
    app.run(debug=True)

