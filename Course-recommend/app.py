from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/get_recommendations")
def get_recommendations():
    # Your recommendation logic here
    recommendations = ["Course 1", "Course 2", "Course 3"]
    return jsonify({"recommendations": recommendations})

if __name__ == "__main__":
    app.run(debug=True)
    