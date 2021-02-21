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

}
function inicioApp() {
     // deshabilitar boton registrar
     registrar.disabled = true;
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



     // Validar unicamente el email
     if(this.type === 'email') {
          validarEmail(this);
     }


     if(email.value !== '' && asunto.value !== '' && mensaje.value !== '' ) {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('opacity-50');
        btnEnviar.classList.remove('cursor-not-allowed');
     }
}