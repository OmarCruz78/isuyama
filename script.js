const whatsappButton = document.getElementById("whatsappButton");

if (whatsappButton) {

    whatsappButton.addEventListener("click", () => {

        window.open(
            "https://wa.me/51931589482?text=Hola%20Isuyama,%20estoy%20interesado%20en%20sus%20tours.",
            "_blank"
        );

    });
}

const translations={
es:{
heroTitle:"Flora y Fauna en el Río Tambopata",

heroDescription:
"Explora la Amazonía de Madre de Dios con experiencias únicas observando aves, capibaras y caimanes.",

reserveButton:"Reservar por WhatsApp",

servicesTitle:"Nuestros Tours",

card1Title:"🚤 Paseo en bote",

card1Description:"Avistamiento de aves y tortugas.",

card2Title:"🌅 Mirador natural",

card2Description:"Disfruta de una espectacular puesta de sol.",

card3Title:"🌳 Caminata en el bosque",

card3Description:"Árboles gigantes y plantas medicinales.",

card4Title:"🐊 Búsqueda de fauna",

card4Description:"Capibaras y caimanes en su hábitat natural."

},


en:{

heroTitle:"Wildlife Tours on the Tambopata River",

heroDescription:
"Explore the Amazon rainforest and enjoy unforgettable encounters with birds, capybaras and caimans.",

reserveButton:"Book on WhatsApp",

servicesTitle:"Our Tours",

card1Title:"🚤 Boat Trip",

card1Description:"Bird and turtle watching.",

card2Title:"🌅 Natural Viewpoint",

card2Description:"Enjoy an amazing sunset.",

card3Title:"🌳 Forest Walk",

card3Description:"Discover giant trees and medicinal plants.",

card4Title:"🐊 Wildlife Search",

card4Description:"Observe capybaras and caimans in their natural habitat."

}

};



function changeLanguage(lang){

document.getElementById("hero-title").innerText=
translations[lang].heroTitle;

document.getElementById("hero-description").innerText=
translations[lang].heroDescription;

document.getElementById("reserveButton").innerText=
translations[lang].reserveButton;

document.getElementById("services-title").innerText=
translations[lang].servicesTitle;

document.getElementById("card1-title").innerText=
translations[lang].card1Title;

document.getElementById("card1-description").innerText=
translations[lang].card1Description;

document.getElementById("card2-title").innerText=
translations[lang].card2Title;

document.getElementById("card2-description").innerText=
translations[lang].card2Description;

document.getElementById("card3-title").innerText=
translations[lang].card3Title;

document.getElementById("card3-description").innerText=
translations[lang].card3Description;

document.getElementById("card4-title").innerText=
translations[lang].card4Title;

document.getElementById("card4-description").innerText=
translations[lang].card4Description;

}
const boton = document.getElementById("botonReserva");

if (boton) {

    boton.addEventListener("click", () => {

        window.open(
            "https://wa.me/51931589482?text=Hola%20Isuyama,%20estoy%20interesado%20en%20sus%20tours%20en%20el%20río%20Tambopata.",
            "_blank"
        );
    });
};


const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function changeSlide(){

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");

}

setInterval(changeSlide, 5000);

