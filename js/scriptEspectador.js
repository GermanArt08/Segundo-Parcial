//Array cuyas posiciones son distintos objetos, siendo cada uno de ellos una obra con sus respectivas propiedades.
let obras = [
    {
        titulo:'Pulse Room',
        año:2006,
        img:'img/lozano-hemmer-3.jpg',
    },
    {
        titulo:'Vicious Circular Breathing',
        año:2013,
        img:'img/lozano-hemmer-1.jpg',
    },
    {
        titulo:'Sphere Packing: Bach',
        año:2018,
        img:'img/lozano-hemmer-2.jpg',
    },
    {
        titulo:'Airbone Newcasts',
        año:2019,
        img:'img/Airbone Newcasts, 2019.jpg',
    },
    {
        titulo:'Last Breath',
        año:2012,
        img:'img/Last Breath, 2012.jpg',
    },
]
//Capturo el elemento galería
let galeria = document.querySelector('#galeria');
//Recorre el array obras creando una tarjeta HTML por cada elemento y la agrega a la galería.
for (let i = 0; i < obras.length; i++) {
	let tarjeta = `
        <div>
            <p>
                ${obras[i].titulo}, ${obras[i].año}<br>
                <img src="${obras[i].img}" alt="${obras[i].titulo}" width="350"><br>
            </p>
        </div>
        `;
	galeria.innerHTML += tarjeta;
}
//Selecciono el botón #btnEstilos y le asigno un evento click que evita que se recargue la página y ejecuta la función cambiarEstilos
let btnEstilos = document.querySelector("#btnEstilos");
btnEstilos.addEventListener("click", function(e) {
    e.preventDefault ();
    cambiarEstilos ();
});
//Función que cambia
function cambiarEstilos () {
    //Cambia fondo general, fija la imagen y ajusta color base + fondo de #main3
    document.body.style.backgroundImage = "url('img/fondo-alter1.png')";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.color = "#000000";
    document.querySelector("#main3").style.backgroundColor = "black";

    //Declaración de uso de IA: se utilizó chatGPT para hacer el siguiente cambio de color:
    let titulos = document.querySelectorAll("h1, h2");
    for (let i = 0; i < titulos.length; i++) {
        titulos[i].style.color = "#ffffff";
    }

    let subtitulos = document.querySelectorAll("h3, h4");
    for (let i = 0; i < subtitulos.length; i++) {
        subtitulos[i].style.backgroundColor = "#1a1a1a";
        subtitulos[i].style.color = "#ffd966";
        subtitulos[i].style.borderColor = "#ffb300";
    }

    let parrafos = document.querySelectorAll("p");
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.color = "#e0e0e0";
    }

    let spans = document.querySelectorAll("span");
    for (let i = 0; i < spans.length; i++) {
        spans[i].style.color = "#ffcc66";
    }

    let asides = document.querySelectorAll("aside");
    for (let i = 0; i < asides.length; i++) {
        asides[i].style.backgroundColor = "#141414";
        asides[i].style.color = "#dddddd";
    }

    let links = document.querySelectorAll("a");
    for (let i = 0; i < links.length; i++) {
        links[i].style.color = "#ffcc66";
    }

    let header = document.querySelector("header");
    let footer = document.querySelector("footer");

    header.style.backgroundColor = "#000000";
    header.style.color = "#ffffff";

    footer.style.backgroundColor = "#000000";
    footer.style.color = "#ffffff";
}
