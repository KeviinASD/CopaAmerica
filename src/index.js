// Modo noche

const noche = document.getElementById('noche');
const botonNoche = document.getElementById('botonNoche');
let isNoche = false;

botonNoche.addEventListener('click', (e) => {
        noche.classList.toggle('dark')
        isNoche = !isNoche;

        if (isNoche) botonNoche.innerHTML = `<i class="uil uil-brightness text-3xl hover:text-primary-500 transition"></i>`
        else botonNoche.innerHTML = `<i class="uil uil-moon text-3xl hover:text-primary-500 transition"></i>`
})
// content English
const englishJson = {
        "nav": {
            "home": "Home",
            "player": "Best Player",
            "estadios": "Stadiums",
            "noticias": "News"
        },
        "home": {
            "subH": "#1 No 1 FIFA American cup 2022",
            "titleH": "COUNTDOWN TO COPA AMERICA 2024",
            "descriptionH": "The CONMEBOL Copa América 2024 will be played in the United States and includes 10 CONMEBOL teams and 6 guest teams from Concacaf. In this edition, this traditional tournament will be organized by both confederations.",
            "boton1H": "Buy Ticket",
            "boton2H": "Read More"
        },
        "estadios": {
            "titleE": "American Cup host Stadiums",
            "subtitleE": "THE ULTIMATE WORLD CUP PACKAGE",
            "descriptionE": "Book your hospitaly ticket and experience USA 2024 in style",
            "botonE": "Find out more"
        },
        "player": {
            "titleBP": "BEST CURRENT PLAYER OF THE CUP",
            "sub1BP": "Avg. Rating",
            "sub2BP": "Goals",
            "sub3BP": "Assist",
            "botonBP": "Full Assessment"
        },
        "contactanos": {
                "titleC": "DO YOU HAVE ANY NEWS FOR THE AMERICAN CUP PLEASE SEND A MESSAGE HERE",
                "botonC": "SEND NOW"
        }
}

const españolJson = {
    "nav": {
        "home": "Casa",
        "player": "Mejor jugador",
        "estadios": "Estadios",
        "noticias": "Noticias"
    },
    "home": {
        "subH": "#1 No. 1 Copa América de la FIFA 2022",
        "titleH": "CUENTA PARA LA COPA AMÉRICA 2024",
        "descriptionH": "La CONMEBOL Copa América 2024 se jugará en Estados Unidos e incluye 10 equipos de la CONMEBOL y 6 equipos invitados de Concacaf. En esta edición, este tradicional torneo será organizado por ambas confederaciones.",
        "boton1H": "Comprar boleto",
        "boton2H": "Leer más"
    },
    "estadios": {
        "titleE": "Estadios sede de la Copa América",
        "subtitleE": "EL ÚLTIMO PAQUETE PARA LA COPA MUNDIAL",
        "descriptionE": "Reserva tu entrada de hospitalidad y vive Estados Unidos 2024 con estilo",
        "botonE": "Saber más"
    },
    "player": {
        "titleBP": "MEJOR JUGADORA ACTUAL DE LA COPA",
        "sub1BP": "Avg. Clasificación",
        "sub2BP": "Gols",
        "sub3BP": "Asistir",
        "botonBP": "Evaluación completa"
    },
    "contactanos": {
            "titleC": "¿TIENES ALGUNA DUDA SOBRE LA COPA AMERICANA POR FAVOR ENVÍA UN MENSAJE AQUÍ?",
            "botonC": "ENVIAR AHORA"
    }
}


// Multi Idiomas

const botonIdioma = document.getElementById('botonIdioma');
let isEnglish = false;

botonIdioma.addEventListener('click', () => {
        isEnglish = !isEnglish;

        if (isEnglish) {
            updateContent(englishJson);
        } else {
            updateContent(españolJson);
        }
})


const updateContent = (idioma) =>{
        //Nav
        document.getElementById("home").textContent = idioma.nav.home;
        document.getElementById("player").textContent = idioma.nav.player;
        document.getElementById("estadios").textContent = idioma.nav.estadios;
        document.getElementById("noticias").textContent = idioma.nav.noticias;
        //Home
        document.getElementById("subH").textContent = idioma.home.subH;
        document.getElementById("titleH").textContent = idioma.home.titleH;
        document.getElementById("descriptionH").textContent = idioma.home.descriptionH;
        document.getElementById("boton1H").textContent = idioma.home.boton1H;
        document.getElementById("boton2H").textContent = idioma.home.boton2H;
        //ESTADIOS
        document.getElementById("titleE").textContent = idioma.estadios.titleE;
        document.getElementById("subtitleE").textContent = idioma.estadios.subtitleE;
        document.getElementById("descriptionE").textContent = idioma.estadios.descriptionE;
        document.getElementById("botonE").textContent = idioma.estadios.botonE;
        //PLAYER
        document.getElementById("titleBP").textContent = idioma.player.titleBP;
        document.getElementById("sub1BP").textContent = idioma.player.sub1BP;
        document.getElementById("sub2BP").textContent = idioma.player.sub2BP;
        document.getElementById("sub3BP").textContent = idioma.player.sub3BP;
        document.getElementById("botonBP").textContent = idioma.player.botonBP;
        //CONTACTANOS
        document.getElementById("titleC").textContent = idioma.contactanos.titleC;
        document.getElementById("botonC").textContent = idioma.contactanos.botonC;
        
}