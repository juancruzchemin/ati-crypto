
from flask import Flask, request
import requests
from flask_restful import Resource, Api, abort, reqparse

app = Flask(__name__)
api = Api(app)


class Coins(Resource):
    def get(self, cripto):
        key = 'F828AD7F-2381-496F-90F4-786CF6F61C27' 
        curr = 'USD'

        url = 'https://rest.coinapi.io/v1/exchangerate/'+ cripto + '/' + curr + '?apikey=' + key
        response = requests.get(url)
        res2 = response.json()['rate']
        res = '1 ' + cripto + ' = ' + str(res2) + ' ' + curr
        return {"valor":res}

api.add_resource(Coins, "/api/<string:cripto>")



if __name__ == "__main__":
    app.run(debug=True)