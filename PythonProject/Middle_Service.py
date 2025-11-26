import base64

from flask import Flask, render_template, request, json,jsonify

app = Flask(__name__)

@app.route('/')
def root_connect():
    return render_template('index.html')
# root만들어서 연결(index) - 연결(하위) 이런식인가..

@app.route('/myinfo', methods=['POST'])
def myinformation():
    myname =(request.form['myname'])
    age = (request.form['age'])
    return render_template('join.html', myname=myname, age=age)

@app.route('/test3')
def get_query():
    myname= request.args.get("myname")
    age= request.args.get("age")
    return f"{myname},{age}"


#주소로 데이터 직접 수신
@app.route('/bbb/<name>' , methods=['get','post'])
def param_test(name):
    print("bbb",name)
    return name
# 주소를 쿼리스트링으로 수신받기


@app.route('/getimg/<imgname>', methods=['GET'])
def getimg(imgname="gi2.jpg"):
    with open(f"/static/{imgname}","rb") as fp:
        img_byte = fp.read()
        encoded = base64.b64encode(img_byte).decode("utf-8")
        print(encoded)
    return f"data:imge/jpg;base64,{encoded}"


@app.route('/testjson')
def jsondata1():
    return render_template('testjson.html')

@app.route('/testjson/jdata' , methods=['post'])
def jsondata_test():
    jdict = (request.get.json())
    print(jdict["myname"])
    print(jdict["age"])
    return jsonify(jdict)











app.run("127.0.0.1", 5000, debug=True)



