from flask import Flask, render_template, request, redirect, url_for, flash
from flask_mysql_connector import MySQL
from wtforms import SelectField
from flask_wtf import FlaskForm

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

class Form(FlaskForm):
    country = SelectField('country', choices=[])
    state = SelectField('state', choices=[])
    city = SelectField('city', choices=[])

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
        PesoEstatura = request.form['list_PesoEstatura']
        Fuma = request.form.get('check_Fuma')
        FechaNacimiento = request.form['date_FechaNacimiento']
        TiempoFumando = request.form['Txt_TiempoFumando']
        Dieta = request.form.get('check_Dieta')
        if Dieta == 'on':
            Dieta = 1
        else:
            Dieta = 0
        if Fuma == 'on':
            Fuma = 1
        else:
            Fuma = 0
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO paciente (Nombre,FechaNacimiento,PesoEstaura,Fuma,Tiempo_fumando,Dieta) VALUES (%s,%s,%s,%s,%s,%s)",(Nombre,FechaNacimiento,PesoEstatura,Fuma,TiempoFumando,Dieta))
        mysql.connection.commit()
        #flash('Contact Added successfully')
    return  render_template('RegistroPaciente.html')
    



# starting the app
if __name__ == "__main__":
    app.run(port=3000, debug=True)
