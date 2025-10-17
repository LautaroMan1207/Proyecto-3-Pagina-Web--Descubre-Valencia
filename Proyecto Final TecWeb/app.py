from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def inicio():
    return render_template("descubre valencia.html")

@app.route("/GASTRONOMÍA")
def gastronomia():
    return render_template("GASTRONOMÍA.html")

@app.route("/Turismo")
def turismo():
    return render_template("Turismo.html")

@app.route("/Ocio")
def ocio():
    return render_template("Ocio.html")

@app.route("/formulario")
def formulario():
    return render_template("formulario.html")

if __name__ == '__main__':
   app.run(host='localhost', port=8080, debug=True)