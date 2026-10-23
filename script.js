/* ==================================================
   PANTALLA DE CARGA (SEGURIDAD ANTITRABAS)
================================================== */

function ocultarCarga() {
    const loading = document.getElementById("loading");
    const app = document.getElementById("app");

    if (loading) {
        loading.classList.add("hide");
    }
    if (app) {
        app.classList.add("show");
    }
}

window.addEventListener("load", function(){
    setTimeout(ocultarCarga, 400);
});

// Respaldo de seguridad: quita la carga a los 1.0 segundo sí o sí
setTimeout(ocultarCarga, 1000);


/* ==================================================
   CAMBIAR DE PANTALLA
================================================== */

function showScreen(id, button){
    document.querySelectorAll(".screen").forEach(function(screen){
        screen.classList.remove("active");
    });

    const selected = document.getElementById(id);
    if(selected){
        selected.classList.add("active");
    }

    document.querySelectorAll(".menu button").forEach(function(btn){
        btn.classList.remove("selected");
    });

    if(button){
        button.classList.add("selected");
    }

    if(!button){
        document.querySelectorAll(".menu button").forEach(function(btn){
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
   ABRIR TUTORIAL CON YOUTUBE
================================================== */

function openTutorial(name){

    /* 
      👉 AQUÍ DEBES REEMPLAZAR "TU_ID_DE_YOUTUBE" por el código de tu video.
      Ejemplo: si tu enlace es https://www.youtube.com/watch?v=dQw4w9WgXcQ, 
      el ID es "dQw4w9WgXcQ".
    */
    const youtubeIds = /* ==================================================
   PANTALLA DE CARGA (SEGURIDAD ANTITRABAS)
================================================== */

function ocultarCarga() {
    const loading = document.getElementById("loading");
    const app = document.getElementById("app");

    if (loading) {
        loading.classList.add("hide");
    }
    if (app) {
        app.classList.add("show");
    }
}

window.addEventListener("load", function(){
    setTimeout(ocultarCarga, 400);
});

// Respaldo de seguridad: quita la carga a los 1.0 segundo sí o sí
setTimeout(ocultarCarga, 1000);


/* ==================================================
   CAMBIAR DE PANTALLA
================================================== */

function showScreen(id, button){
    document.querySelectorAll(".screen").forEach(function(screen){
        screen.classList.remove("active");
    });

    const selected = document.getElementById(id);
    if(selected){
        selected.classList.add("active");
    }

    document.querySelectorAll(".menu button").forEach(function(btn){
        btn.classList.remove("selected");
    });

    if(button){
        button.classList.add("selected");
    }

    if(!button){
        document.querySelectorAll(".menu button").forEach(function(btn){
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
   ABRIR TUTORIAL CON YOUTUBE
================================================== */

function openTutorial(name){

    /* 
      👉 AQUÍ DEBES REEMPLAZAR "TU_ID_DE_YOUTUBE" por el código de tu video.
      Ejemplo: si tu enlace es https://www.youtube.com/watch?v=dQw4w9WgXcQ, 
      el ID es "dQw4w9WgXcQ".
    */
    const youtubeIds = {
        "Avioncito": "gCy1J25Oz1E",
        "Barco": "cShJZcVOWI8",
        "Come galletas": "4H6iBhQ4X0E",
        "Corazón": "WQ84yGbBnw8",
        "Delfín": "xf5PNZBut_k",
        "Dragón": "cExOAICzz9w",
        "Pez de papel": "bH8vKTlf0rE",
        "Caja de papel": "JUmo2JPW7KE",
        "Grulla": "aXNSvcDJzuc",
        "Peonza": "wTS_l_Hw6nA"
    };
    const iframe = document.getElementById("youtubeIframe");
    const message = document.getElementById("videoMessage");

    document.getElementById("videoTitle").textContent = "🎥 " + name;

    const videoId = youtubeIds[name];

    if(!videoId || videoId.includes("TU_ID")){
        iframe.src = "";
        message.textContent = "⚠️ Falta configurar el ID de YouTube para este video.";
        showScreen("video");
        return;
    }

    /* Carga el video de YouTube en el reproductor integrado */
    iframe.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
    message.textContent = "🎬 Tutorial de " + name + ". ¡Disfruta el video!";

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

    const iframe = document.getElementById("youtubeIframe");
    const message = document.getElementById("videoMessage");

    document.getElementById("videoTitle").textContent = "🎥 " + name;

    const videoId = youtubeIds[name];

    if(!videoId || videoId.includes("TU_ID")){
        iframe.src = "";
        message.textContent = "⚠️ Falta configurar el ID de YouTube para este video.";
        showScreen("video");
        return;
    }

    /* Carga el video de YouTube en el reproductor integrado */
    iframe.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
    message.textContent = "🎬 Tutorial de " + name + ". ¡Disfruta el video!";

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