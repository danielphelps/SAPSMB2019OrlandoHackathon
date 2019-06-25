from flask import Flask
from facesap import dothing 

app = Flask(__name__)

@app.route("/")
def hello():
    return "hello world."

@app.route("/dothing", methods = ['POST'])
def dospecialtrick():
    print(request.body)
    return dothing(request.body)

if __name__ == '__main__':
    app.run()
