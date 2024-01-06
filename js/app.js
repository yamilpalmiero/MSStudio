const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const links = document.querySelectorAll('.navigation a');

document.addEventListener('DOMContentLoaded', () => {
    showMenu();
    closeMenu();
});





//FUNCIONES
/**
 * El elemento hamburger hace un evento de tipo click
 * Dicho elemento se va a disparar hasta que el usuario haga click
 * Esta funcion es para mostrar el menu de la hamburger o hide lo segun su situacion actual
 */
function showMenu() {
    hamburger.addEventListener('click', () => { //El arrow-function es para que se ejecute hasta que el usuario interactue (haga click, en este caso)
        //navigation.classList.toggle('hide'); //Si navigation contiene el elemento ocutar que lo saque (se muestran las opciones) y si no lo tiene lo agrega (las oculta)
        if (navigation.classList.contains('hide')) {
            navigation.classList.remove('hide');
        }
        else {
            navigation.classList.add('hide')
        }
    });
}

/**
 * Para cerrar el menu desplegado luego de que el usuario seleccione una de las opciones
 */
function closeMenu() {
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            //console.log(e.target.tagName); //Para saber cual es el nombre de lo que se esta clickendo (la consola muestra 'A')
            if (e.target.tagName === 'A') { //Si el usuario hizo click en un enlace, lo oculto
                navigation.classList.add('hide');
            }
        });
    });
}