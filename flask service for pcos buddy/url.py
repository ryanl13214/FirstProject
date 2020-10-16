from flask import Flask, redirect, url_for, request, jsonify
import json
import base64
import test
import detectskin
from time import sleep
app = Flask(__name__)
 
@app.route('/acne', methods=['GET', 'POST'])
def acne():
    content = request.json


    
    a = str(content['text'][23:])
    bytes_base64 = a.encode()############???was i high?
    data = base64.b64decode(bytes_base64)##########???
    open( "aaa"+'.jpeg', 'wb').write(data)

    res = test.runacnedetector(  "aaa")
    print(res)
    return res

  


@app.route('/hir', methods=['GET', 'POST'])
def hir():
    content = request.json


    
    a = str(content['text'][23:])
    bytes_base64 = a.encode()############???was i high?
    data = base64.b64decode(bytes_base64)##########???
    open( "aaaa.jpg", 'wb').write(data)

    res = detectskin.hirchecker("aaaa")
    print(res)
    return res

  








if __name__ == '__main__':
   app.run(host='0.0.0.0', port=80)
