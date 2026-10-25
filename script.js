/* ==================================================
   PANTALLA DE CARGA RÁPIDA
================================================== */

function ocultarCarga() {
    const loading = document.getElementById("loading");
    const app = document.getElementById("app");

    if (loading && !loading.classList.contains("hide")) {
        loading.classList.add("hide");
    }
    if (app && !app.classList.contains("show")) {
        app.classList.add("show");
    }
}

// Ocultar al cargar la ventana
window.addEventListener("load", function(){
    setTimeout(ocultarCarga, 800);
});

// Respaldo de seguridad por si el evento load se demora: se oculta a los 1.5 segundos pase lo que pase
setTimeout(ocultarCarga, 1500);


/* ==================================================
   CAMBIAR DE PANTALLA
================================================== */

function showScreen(id, button){

    /* Ocultamos absolutamente todas las pantallas. */
    document
        .querySelectorAll(".screen")
        .forEach(function(screen){
            screen.classList.remove("active");
        });

    /* Mostramos solamente la pantalla seleccionada. */
    const selected = document.getElementById(id);

    if(selected){
        selected.classList.add("active");
    }

    /* Quitamos el seleccionado del menú. */
    document
        .querySelectorAll(".menu button")
        .forEach(function(btn){
            btn.classList.remove("selected");
        });

    /* Marcamos el botón pulsado. */
    if(button){
        button.classList.add("selected");
    }

    /* Si se entra desde otro botón, marcamos el botón correspondiente. */
    if(!button){
        document
            .querySelectorAll(".menu button")
            .forEach(function(btn){
                const texto = btn.textContent.toLowerCase();

                if(
                    (id === "home" && texto.includes("inicio")) ||
                    (id === "presentation" && texto.includes("presentación")) ||
                    (id === "levels" && texto.includes("niveles")) ||
                    (id === "project" && texto.includes("proyecto")) ||
                    (id === "tutorials" && texto.includes("tutoriales"))
                ){
                    btn.classList.add("selected");
                }
            });
    }

    window.scrollTo(0,0);
}


/* ==================================================
   ABRIR TUTORIAL
================================================== */

function openTutorial(name){

    /* Rutas apuntando a la carpeta "videos/" */
    const videoFiles = {
        "Avioncito": "paso del avion.mp4",
        "Barco": "paso del barco.mp4",
        "Come galletas": "paso del come galletas.mp4",
        "Corazón": "paso del corazon.mp4",
        "Delfín": "paso del delfin.mp4",
        "Dragón": "dragon de papel.mp4",
        "Pez de papel": "paso del pez.mp4",
        "Caja de papel": "paso de la caja de papel.mp4",
        "Grulla": "paso de la grulla.mp4",
        "Peonza": "el paso de la peonza.mp4"
    };

    const video = document.getElementById("tutorialVideo");
    const message = document.getElementById("videoMessage");

    document.getElementById("videoTitle").textContent = "🎥 " + name;

    const file = videoFiles[name];

    if(!file){
        video.removeAttribute("src");
        video.load();

        message.textContent = "⚠️ No se encontró el video de este tutorial.";
        showScreen("video");
        return;
    }

    video.pause();
    video.src = file;
    video.load();

    message.textContent = "🎬 Tutorial de " + name + ". Presiona ▶️ para comenzar.";

    video.onerror = function(){
        message.textContent = "⚠️ No se pudo cargar el video. Revisa que el archivo exista dentro de la carpeta 'videos' y que tenga exactamente el nombre: " + file;
    };

    showScreen("video");
}


/* ==================================================
   MODO OSCURO
================================================== */

function toggleTheme(){
    document.body.classList.toggle("dark");
    const button = document.getElementById("themeButton");

    if(document.body.classList.contains("dark")){
        button.textContent = "☀️";
    }else{
        button.textContent = "🌙";
    }
}
