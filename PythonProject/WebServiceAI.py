import base64
import numpy as np
from ai_service.CoinPredict import load_rnnmodel,y_predict
import os
import tensorflow as tf
import flask
import matplotlib


from flask import Flask, render_template, request, json ,jsonify
from ai_service.CoinService import input_request

app = Flask(__name__)

COIN_NAMES = ["BTC","ETH","XRP"]
#HAN 한글명, 추후 추가시 NAMES,HAN 동기화 + DB연동 필요s
COIN_HAN = ["비트코인","이더리움","리플"]
AI_SERVICE = "ai_service/"
# / => main -> intro_index.html - return 을 해당 주소로


def crpyto_coin_anal(coinname, timegap):
     return input_request(coinname, timegap)

@app.route('/')
def root():
    return render_template("intro_index.html")

# /crypto_coin
@app.route('/page/<page_name>')
def page_name(page_name):  #   page_name 변수로 페이지 이름 받기  - 매변 박았어야지 파이썬 이새기들은 은근 잘 지원안해줌
    return render_template(f"{page_name}.html")

@app.route('/coin_name')
def load_name():
    coin_name_dict = {"eng_name":COIN_NAMES,"kor_name":COIN_HAN}
    return jsonify(coin_name_dict)
#     crypto_coin_anal()

# 연결 응답 모두 필요
@app.route('/user_data', methods=['POST'])
def user_data():
    user_datas = request.get_json()
    print(user_datas)
    coinname = user_datas['coinname']
    timegap = int(user_datas['timegaps'])
    report = crpyto_coin_anal(coinname, timegap)
    print(report)
    return report



app.run("127.0.0.1", 5000, debug=True)