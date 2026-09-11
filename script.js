/* =========================================
   MENÚ PARA CELULAR
========================================= */

const botonMenu = document.getElementById("botonMenu");
const menu = document.querySelector(".menu");

botonMenu.addEventListener("click", function () {

    menu.classList.toggle("activo");

});


/* =========================================
   CERRAR EL MENÚ AL SELECCIONAR UNA OPCIÓN
========================================= */

const enlacesMenu = document.querySelectorAll(".menu a");

enlacesMenu.forEach(function (enlace) {

    enlace.addEventListener("click", function () {

        menu.classList.remove("activo");

    });

});


/* =========================================
   REPRODUCTOR DE RADIO
========================================= */

const reproductor = document.getElementById("reproductorRadio");
const ondas = document.getElementById("ondas");
const mensajeRadio = document.getElementById("mensajeRadio");


/*
    Cuando la radio comienza a reproducirse
*/

reproductor.addEventListener("play", function () {

    ondas.classList.add("reproduciendo");

    mensajeRadio.textContent =
        "🔴 Estás escuchando nuestra transmisión en vivo.";

});


/*
    Cuando se pausa la radio
*/

reproductor.addEventListener("pause", function () {

    ondas.classList.remove("reproduciendo");

    mensajeRadio.textContent =
        "Presiona reproducir para escuchar la radio.";

});


/*
    Si ocurre algún error con el streaming
*/

reproductor.addEventListener("error", function () {

    mensajeRadio.textContent =
        "La transmisión no está disponible en este momento.";

});


/* =========================================
   BOTÓN VOLVER ARRIBA
========================================= */

const volverArriba = document.getElementById("volverArriba");


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        volverArriba.classList.add("mostrar");

    } else {

        volverArriba.classList.remove("mostrar");

    }

});


volverArriba.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   FORMULARIO DE CONTACTO
========================================= */

const formulario = document.querySelector(".formulario");


formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    alert(
        "Gracias por comunicarte con nosotros. " +
        "El formulario está preparado para conectarse posteriormente."
    );

    formulario.reset();

});


/* =========================================
   MENSAJE INICIAL
========================================= */

console.log(
    "Radio Web cargada correctamente."
);