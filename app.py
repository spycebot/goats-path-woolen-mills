#!/usr/bin/env python3

# app.py
# Heroku Minima
# implemented by by Terzo Technical
# (c) 2024 Shannon Douglas Ware 


from flask import Flask, render_template

app = Flask(__name__)

### Web Pages ###
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")
    
@app.errorhandler(404)
def not_found(e):
  return render_template('error_404.html'), 404

    
# a simple page that says hello
@app.route('/hello')
def hello():
    return 'Hello, World! Brought to you by Terzo Technical'


@app.get('/terms')
def terms():
    return render_template('terms.html')


@app.get('/privacy')
def privacy():
    return render_template('privacy.html')


@app.get('/contact')
def contact():
    return render_template('contact.html')


@app.get('/design')
def design():
    return render_template('design.html')



@app.route('/cv-builder', methods=["POST", "GET"])
def cvBuilder():
    return render_template("cv-builder.html")



@app.get('/cv-support-engineer')
def cv_support_engineer():
    return render_template('cv-support-engineer.html')

@app.get('/cv-dispatcher')
def cv_dispatcher():
    return render_template('cv-dispatcher.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
