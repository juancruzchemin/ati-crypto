import json
import requests

print('Loading Function...')

def lambda_handler(event, context):
    
    cripto = event['queryStringParameters']['cripto']
    key = 'F828AD7F-2381-496F-90F4-786CF6F61C27' 
    curr = 'USD'

    url = 'https://rest.coinapi.io/v1/exchangerate/'+ cripto +'/' + curr + '?apikey=' + key
    response = requests.get(url)
    res2 = response.json()['rate']
    res = '1' + cripto +  '= ' + str(res2) + ' ' + curr
    
    print('cripto' + cripto)

    criptoResponse = {}
    criptoResponse['cripto'] = cripto
    criptoResponse['rate'] = res
    criptoResponse['message'] = 'Hello world'
    
    responseObject = {}
    responseObject['statusCode'] = 200
    responseObject['headers'] = {}
    responseObject['headers']['Content-Type'] = 'application/json'
    responseObject['body'] = json.dumps(criptoResponse)

    return responseObject