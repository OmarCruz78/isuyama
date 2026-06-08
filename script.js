const whatsappButton = document.getElementById("whatsappButton");

if (whatsappButton) {

    whatsappButton.addEventListener("click", () => {

        window.open(
            "https://wa.me/51931589482?text=Hola%20Isuyama,%20estoy%20interesado%20en%20sus%20tours.",
            "_blank"
        );

    });
}

const translations = {

es: {

heroTitle: "Flora y Fauna en el Río Tambopata",

heroDescription:
"Explora la Amazonía de Madre de Dios con experiencias únicas observando aves, capibaras y caimanes.",

reserveButton: "Reservar por WhatsApp",

servicesTitle: "Nuestros Servicios",

card1Title: "🏡 Hospedaje Familiar",

card1Description:
"Disfruta de una experiencia auténtica en un ambiente acogedor junto a una familia local en la ribera del río Tambopata.",

card3Title:
"🌿 Excursión por el Río Tambopata",

card3Description:
"Descubre la flora y fauna amazónica con caminatas y recorridos guiados en un entorno natural único.",

card4Title:
"🐊 Excursión al Lago Yacumama",

card4Description:
"Recorre el lago en bote y observa capibaras, caimanes, aves y la increíble biodiversidad de Madre de Dios.",

infoTitle:
"Información General",

locationTitle:
"📍 Ubicación",

locationText:
"Costa del Río Tambopata<br>Madre de Dios - Perú",

scheduleTitle:
"🕒 Horario",

scheduleText:
"2:30 PM - 7:30 PM",

capacityTitle:
"👥 Cupos",

capacityText:
"10 personas por día",

contactTitle:
"Reserva tu aventura",

contactButton:
"Hablar con Isuyama",

footerText:
"Flora y Fauna en el Río Tambopata"

},

en: {

heroTitle:
"Wildlife Tours on the Tambopata River",

heroDescription:
"Explore the Amazon rainforest and enjoy unforgettable encounters with birds, capybaras and caimans.",

reserveButton:
"Book on WhatsApp",

servicesTitle:
"Our Services",

card1Title:
"🏡 Family Accommodation",

card1Description:
"Enjoy an authentic experience with a local family on the banks of the Tambopata River.",

card3Title:
"🌿 Tambopata River Excursion",

card3Description:
"Discover Amazonian flora and fauna through guided walks and unique nature experiences.",

card4Title:
"🐊 Yacumama Lake Excursion",

card4Description:
"Explore the lake by boat and observe capybaras, caimans and birds in their natural habitat.",

infoTitle:
"General Information",

locationTitle:
"📍 Location",

locationText:
"Tambopata River Bank<br>Madre de Dios - Peru",

scheduleTitle:
"🕒 Schedule",

scheduleText:
"2:30 PM - 7:30 PM",

capacityTitle:
"👥 Capacity",

capacityText:
"10 people per day",

contactTitle:
"Book Your Adventure",

contactButton:
"Contact Isuyama",

footerText:
"Wildlife Tours on the Tambopata River"

}

};

function changeLanguage(lang){

document.getElementById("hero-title").innerHTML = translations[lang].heroTitle;
document.getElementById("hero-description").innerHTML = translations[lang].heroDescription;
document.getElementById("reserveButton").innerHTML = translations[lang].reserveButton;

document.getElementById("services-title").innerHTML = translations[lang].servicesTitle;

document.getElementById("card1-title").innerHTML = translations[lang].card1Title;
document.getElementById("card1-description").innerHTML = translations[lang].card1Description;

document.getElementById("card3-title").innerHTML = translations[lang].card3Title;
document.getElementById("card3-description").innerHTML = translations[lang].card3Description;

document.getElementById("card4-title").innerHTML = translations[lang].card4Title;
document.getElementById("card4-description").innerHTML = translations[lang].card4Description;

document.getElementById("info-title").innerHTML = translations[lang].infoTitle;

document.getElementById("location-title").innerHTML = translations[lang].locationTitle;
document.getElementById("location-text").innerHTML = translations[lang].locationText;

document.getElementById("schedule-title").innerHTML = translations[lang].scheduleTitle;
document.getElementById("schedule-text").innerHTML = translations[lang].scheduleText;

document.getElementById("capacity-title").innerHTML = translations[lang].capacityTitle;
document.getElementById("capacity-text").innerHTML = translations[lang].capacityText;

document.getElementById("contact-title").innerHTML = translations[lang].contactTitle;

document.getElementById("whatsappButton").innerHTML = translations[lang].contactButton;

document.getElementById("footer-text").innerHTML = translations[lang].footerText;

}

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

setInterval(changeSlide, 7000);

