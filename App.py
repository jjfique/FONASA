from flask import Flask, render_template, request, redirect, url_for, flash
from flask_mysql_connector import MySQL

# initializations
app = Flask(__name__)

# Mysql Connection
app.config['MYSQL_HOST'] = 'localhost' 
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DATABASE'] = 'fonasa'
mysql = MySQL(app)

# settings
app.secret_key = "mysecretkey"

# routes
@app.route('/')
def Index():
    return render_template('index.html')
@app.route('/RegistroPaciente')
def RegistroPaciente():
    return render_template('RegistroPaciente.html')

@app.route('/Registro_Paciente', methods=['GET','POST'])
def Registro_Paciente():
    if request.method == 'POST':
        Nombre = request.form['txt_Nombre']
        PesoEstatura = request.form.values['list_PesoEstatura']
     #   Fuma = request.form['check_Fuma']
        FechaNacimiento = request.form['date_FechaNacimiento']
        TiempoFumando = request.form['Txt_TiempoFumando']
      #  Dieta = request.form['check_Dieta']
        print(Nombre)
        print(PesoEstatura)
        print(FechaNacimiento)
        print(TiempoFumando)
    return  "LISTO"
    



# starting the app
if __name__ == "__main__":
    app.run(port=3000, debug=True)
