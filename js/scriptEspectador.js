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
let galeria = document.querySelector('#galeria');

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
let btnEstilos = document.querySelector("#btnEstilos");
btnEstilos.addEventListener("click", function(e) {
    e.preventDefault ();
    cambiarEstilos ();
});
function cambiarEstilos () {
    document.body.style.backgroundImage = "url('img/fondo-alter1.png')";
    document.body.style.backgroundAttachment = "fixed";
} 