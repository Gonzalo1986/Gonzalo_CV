//Al cargar la página, se obtiene y se muestra la edad actualizada dentro de la sección "InformacionPersonal" y se pone a la escucha el check box para el cambio de tema a oscuro.
window.onload = Inicio;

//Función Inicio
//Objetvo:
//  a) Mostrar y obtener la edad actualizada.
//  b) Poner a la escucha el check box para hacer el cambio de tema a Oscuro
function Inicio() {
    //
    //Fecha Actual
    let fechaActual = new Date();
    //Se divide la fecha en día, mes y año.
    let diaActual = fechaActual.getDate();
    let mesActual = fechaActual.getMonth() + 1;
    let anioActual = fechaActual.getFullYear();

    // Fecha de mi cumpleaños
    let diaCumple = 30;
    let mesCumple = 5;
    let anioCumple = 1986;

    //Calculo de la Edad actualizada.
    //Se tiene en cuenta si  se cumplió o no los años para la fecha actual.
    let Edad = anioActual - anioCumple;
    if (mesCumple > mesActual) {
        Edad -= 1;
    } else if ((mesCumple = mesActual)) {
        if (diaCumple > diaActual) {
            Edad -= 1;
        }
    }

    //Se muestra la Edad en el HTML - Sección "InformacionPersonal"
    const textoEdad = document.getElementById("Edad");
    textoEdad.innerHTML = "Edad: " + Edad + " años";

    //Se pone a la escucha el elemento check box para realizar el cambio de tema a oscuro.
    document
        .getElementById("TemaOscuroCheck")
        .addEventListener("change", CambiarModo);
} // fin funcion inicio

function CambiarModo(e) {
    let etiqueta_p = document.querySelector("p");
    let etiqueta_li = document.querySelector("li");
    const coleccion_ul = document.getElementsByClassName("oscuro");

    if (e.target.checked) {
        document.body.style.background = "#2E2E2E";
        etiqueta_p.style.color = "white";

        for (let i = 0; i < coleccion_ul.length; i++) {
            coleccion_ul[i].style.color = "white";
        }
    } else {
        document.body.style.background = "";
        etiqueta_p.style.color = "black";

        for (let i = 0; i < coleccion_ul.length; i++) {
            coleccion_ul[i].style.color = "black";
        }
    }
} // fin cambiarModo - ultimo
