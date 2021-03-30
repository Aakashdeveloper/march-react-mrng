from flask import Flask, jsonify, render_template, request

app = Flask(__name__, static_url_path='/static')

@app.route('/')
def home_page():
    return render_template('index.html')
    
app.run(port=3300)