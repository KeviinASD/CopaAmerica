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


// Multi Idiomas

const botonIdioma = document.getElementById('botonIdioma');
let isEnglish = false;

botonIdioma.addEventListener('click', () => {
        isEnglish = !isEnglish;

        if (isEnglish) {
            updateContent();
        } else {
            location.reload();
        }
})


const updateContent = () =>{
        //Nav
        document.getElementById("home").textContent = englishJson.nav.home;
        document.getElementById("player").textContent = englishJson.nav.player;
        document.getElementById("estadios").textContent = englishJson.nav.estadios;
        document.getElementById("noticias").textContent = englishJson.nav.noticias;
        //Home
        document.getElementById("subH").textContent = englishJson.home.subH;
        document.getElementById("titleH").textContent = englishJson.home.titleH;
        document.getElementById("descriptionH").textContent = englishJson.home.descriptionH;
        document.getElementById("boton1H").textContent = englishJson.home.boton1H;
        document.getElementById("boton2H").textContent = englishJson.home.boton2H;
        //ESTADIOS
        document.getElementById("titleE").textContent = englishJson.estadios.titleE;
        document.getElementById("subtitleE").textContent = englishJson.estadios.subtitleE;
        document.getElementById("descriptionE").textContent = englishJson.estadios.descriptionE;
        document.getElementById("botonE").textContent = englishJson.estadios.botonE;
        //PLAYER
        document.getElementById("titleBP").textContent = englishJson.player.titleBP;
        document.getElementById("sub1BP").textContent = englishJson.player.sub1BP;
        document.getElementById("sub2BP").textContent = englishJson.player.sub2BP;
        document.getElementById("sub3BP").textContent = englishJson.player.sub3BP;
        document.getElementById("botonBP").textContent = englishJson.player.botonBP;
        //CONTACTANOS
        document.getElementById("titleC").textContent = englishJson.contactanos.titleC;
        document.getElementById("botonC").textContent = englishJson.contactanos.botonC;
        
}