const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('.navegacion a');

document.addEventListener('DOMContentLoaded', () => {
    mostrarMenu();
    cerrarMenu();
});





//FUNCIONES
/**
 * El elemento hamburguesa hace un evento de tipo click
 * Dicho elemento se va a disparar hasta que el usuario haga click
 * Esta funcion es para mostrar el menu de la hamburguesa u ocultarlo segun su situacion actual
 */
function mostrarMenu() {
    hamburguesa.addEventListener('click', () => { //El arrow-function es para que se ejecute hasta que el usuario interactue (haga click, en este caso)
        //navegacion.classList.toggle('ocultar'); //Si navegacion contiene el elemento ocutar que lo saque (se muestran las opciones) y si no lo tiene lo agrega (las oculta)
        if (navegacion.classList.contains('ocultar')) {
            navegacion.classList.remove('ocultar');
        }
        else {
            navegacion.classList.add('ocultar');
        }
    });
}

/**
 * Para cerrar el menu desplegado luego de que el usuario seleccione una de las opciones
 */
function cerrarMenu() {
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            //console.log(e.target.tagName); //Para saber cual es el nombre de lo que se esta clickendo (la consola muestra 'A')
            if (e.target.tagName === 'A') { //Si el usuario hizo click en un enlace, ocultar
                navegacion.classList.add('ocultar');
            }
        });
    });
}