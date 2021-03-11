const registrar = document.querySelector('#btn_registrar');
const Nombre = document.querySelector('#txt_Nombre');
const Fecha = document.querySelector('#date_FechaNacimiento');
const pesoLabel = document.querySelector('#lb_peso-estatura');
const Peso = document.querySelector('#list_PesoEstatura');
const DivFuma = document.querySelector('#Div_Fuma');
const Fuma = document.querySelector('#check_Fuma');
const TiempoFumando = document.querySelector('#Txt_TiempoFumando');
const DivDieta = document.querySelector('#Div_Dieta');
const Dieta = document.querySelector('#check_Dieta');
let edad = 0;
let ClasificacionEdad ='';
// Listeners
cargarEventListeners();

function cargarEventListeners() {
     document.addEventListener('DOMContentLoaded', inicioApp);
     // Dispara cuando se presiona "Agregar Carrito"
     registrar.addEventListener('click', mensaje);
     Nombre.addEventListener('blur',validarFormulario);
     Fecha.addEventListener('blur',validarFormulario);
     TiempoFumando.addEventListener('blur',validarFormulario);
     Fecha.addEventListener('blur',asignarEdad);

}
function inicioApp() {
     // deshabilitar boton registrar
     registrar.disabled = true;
     pesoLabel.hidden=true
     Peso.hidden=true
     DivFuma.hidden=true
     TiempoFumando.hidden=true
     Div_Dieta.hidden=true

     
}
function mensaje(e) {
    e.preventDefault();
   alert("hoal mundo ")
}

function validarFormulario(e) {
    
     if(e.target.value.length === 0 ) {
         // campo.style.borderBottomColor = 'green';
         // campo.classList.remove('error');
         alert("Campo obligatorio ")
     } else {
         // e.target.classList.add('border', 'border-red-500');
     }

    /*  if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''&& email.value !== '' && asunto.value !== '' && mensaje.value !== '' ) {
        btnEnviar.disabled = false;
     } */
}

function asignarEdad(e) {
    let Nacimiento = new Date(Fecha.valueAsDate);
    let hoy = new Date();
    mesNacimiento = Nacimiento.getMonth();
    mesHoy = hoy.getMonth() ;
    anio = hoy.getFullYear() ;
    dia = hoy.getDate();
    diaSeleccionado=Nacimiento.getDate();
    Nacimiento = Nacimiento.getFullYear();
    edad = (anio -Nacimiento)
    
    let  m = mesHoy - mesNacimiento;
    if (m < 0 || (m === 0 && hoy < Nacimiento)) {
     edad--;
     }
    if (edad < 0 || dia < diaSeleccionado && anio <= Nacimiento) {    
     alert("La fecha de nacimiento no puede ser mayor a hoy")
    }
    
    ClasificacionEdad = ClasificarEdadPaciente(edad);
}

function ClasificarEdadPaciente(edad) {
     
     if (edad<=15) {
          ClasificacionEdad = 'Niño';
       }
     if (edad>15 && edad<=40) {
          ClasificacionEdad = 'Joven';
       }
     if (edad>40) {
          ClasificacionEdad = 'Anciano';
       }

       console.log(ClasificacionEdad)

 }