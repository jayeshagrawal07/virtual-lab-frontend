from ast import Pass
import email
from unicodedata import name
from urllib import response
from werkzeug.security import generate_password_hash
from flask import Flask,render_template, session,request, redirect,jsonify
from datetime import datetime
from flask_cors import CORS
from flask_pymongo import PyMongo ,ObjectId
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from flask_bcrypt import Bcrypt

app=Flask(__name__)
app.config['MONGO_DBNAME'] = 'reactloginreg'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/reactloginreg'
app.config['JWT_SECRET_KEY'] = 'secret'

mongo = PyMongo(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)
cors =CORS(app)




#views 
@app.route('/')
def home():
    return {
        1:"api/register",
        2:"api/login",
        3:"api/logout",
        4:"api/feedback"
    }

@app.route('/api/register',methods=["POST"]) 
def register():
    users = mongo.db.users 
    name = request.get_json()['name']
    email = request.get_json()['email']
    password = bcrypt.generate_password_hash(request.get_json()['password']).decode('utf-8')
    created = datetime.utcnow()  
    response = users.find_one({ 'email': email , 'name':name })
    if response is None:
     id = users.insert_one({
        'name': name,
        'email': email,
        'password': password,
        'created': created 
     })   


    return  jsonify({'id':str(id),'msg':'user added successfully',name:"name",email:"email"})


@app.route('/users/login/',methods=["POST"])
def login():
    users = mongo.db.users 
    email = request.get_json()['email']
    password = request.get_json()['password']
    name = request.get_json()['name']
    response = users.find_one({ 'email': email , 'password':password , 'name':name })

    if response:
        if bcrypt.check_password_hash(response):
            access_token = create_access_token(identity = {
                'email': response['email'],
                'name':response['name'] 
            })
            result = jsonify({'token':access_token})
        else:
            result = jsonify({"error":"Invalid email and password"})
    else:
        result = jsonify({"result":"user successfully logged in" , "email":email ,"name":name})
    return result 
  





if __name__ == '__main__':
    app.run(debug=True)
