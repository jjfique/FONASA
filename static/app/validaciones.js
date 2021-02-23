const registrar = document.querySelector('#btn_registrar');
const Nombre = document.querySelector('#txt_Nombre');
const Fecha = document.querySelector('#date_FechaNacimiento');
const Peso = document.querySelector('#list_PesoEstatura');
const Fuma = document.querySelector('#check_Fuma');
const TiempoFumando = document.querySelector('#Txt_TiempoFumando');
const Dieta = document.querySelector('#check_Dieta');
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
     registrar.disabled = false;
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
    let edad = 0
    let Nacimiento = new Date(Fecha.value);
    let hoy = new Date();
    mesNacimiento = Nacimiento.getMonth();
    mesHoy = hoy.getMonth() ;
    hoy = hoy.getFullYear() ;
    Nacimiento = Nacimiento.getFullYear();
    edad = (hoy -Nacimiento)
    
    let  m = mesHoy - mesNacimiento;
    if (m < 0 || (m === 0 && hoy < Nacimiento)) {
     edad--;
     }
    if (edad < 0) {    
     alert("La fecha de nacimiento no puede ser superior a hoy")
     Nacimiento = "";
    }

    alert("se asigno una edad "+edad.toString())
    
}