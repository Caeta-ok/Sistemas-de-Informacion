from flask import Flask
from flask_restful import Resource, Api
from flask import jsonify

app = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):
    def get(self):
        response = jsonify({'hello world': 'from flask'})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

api.add_resource(HelloWorld, '/')

if __name__ == '__main__':
    app.run()