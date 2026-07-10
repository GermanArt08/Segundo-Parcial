//Declaro variables bases
let obras = []; //Vacío, el usuario completa la cantidad
let cantidadTotal = 0;
let contadorObras = 0;
let resto = document.querySelector("#resto");
let listado = document.querySelector(".listado");
//Defino variables para los botones:
const btnEnviar = document.querySelector("#btnEnviar");
const btnCalcular = document.querySelector("#btnCalcular");
const btnReiniciar = document.querySelector("#btnReset");

//Agrego una función específica a cada botón
btnEnviar.addEventListener("click", function(e) {
    e.preventDefault ();
    ingresarDatos ();
});

//Declaro qué hace la función ingresarDatos

function ingresarDatos() {
    if (cantidadTotal === 0) {
        let cantObrasInput = document.querySelector("#cantObras");
        let cant = cantObrasInput.value;
        if (cant=="" || isNaN(cant) || cant<=0) {
            alert("Ingrese una cantidad de obras válida");
            return;
        }

        cantidadTotal = +cant;

        resto.style.display = "inline-block";
        resto.disabled = false;
        cantObrasInput.style.display = "none";

        let fieldCant = document.querySelector("#fieldCant");
        if (fieldCant) {
            fieldCant.querySelector ("label").innerText = `Cantidad de obras a exponer: ${cantidadTotal}`;
        }
        btnEnviar.innerText = "Agregar obra";
        vaciarFormulario();
        return;
    }
    //Se toman los resultados del form como variables se validan
    let nombre = document.querySelector("#nombre").value;
    if (nombre == "") {
        alert("El nombre no puede estar vacío");
        return false;
    }
    let cantLuz = document.querySelector("#cantLuz").value;
    if(cantLuz == "" || isNaN(cantLuz) || cantLuz<=0) {
        alert("Ingrese una cantidad de luces válida");
        return false;
    }
    let horas = document.querySelector("#horas").value;
    if(horas == "" || isNaN(horas) || horas<=0 || horas>24) {
        alert("Ingrese una cantidad de horas válida");
        return false;
    }
    let consumo = document.querySelector("#consumo").value;
    if(consumo == "" || isNaN(consumo) || consumo<=0) {
        alert("Ingrese una cantidad de consumo válida");
        return false;
    }
    let costo = document.querySelector("#costo").value; 
    if(costo == "" || isNaN(costo) || costo<=0) {
        alert("Ingrese un costo válido");
        return false;
    }

    const obra = {
        nombre: nombre,
        cantLuz: Number(cantLuz),
        horas: Number(horas),
        consumo: Number(consumo),
        costo: Number(costo),
        }
    obras.push(obra);
    contadorObras++;
    alert (`Obra ${contadorObras} de ${cantidadTotal} ingresada correctamente`);

    vaciarFormulario();
    //Si ya completó todas las obras muestro lo demás
    if (contadorObras>=cantidadTotal) {
        btnEnviar.disabled = true;
        btnCalcular.style.display = "inline-block";
        btnReiniciar.style.display = "inline-block"
        resto.disabled = true;
    }
};
function vaciarFormulario(){
    document.querySelector ("#cantObras").value = "";
    document.querySelector ("#nombre").value = "";
    document.querySelector ("#cantLuz").value = "";
    document.querySelector ("#horas").value = "";
    document.querySelector ("#consumo").value = "";
    document.querySelector ("#costo").value = "";
}
btnCalcular.addEventListener("click", function(e) {
    e.preventDefault();
    calcularResultado();
})
btnReiniciar.addEventListener("click", function(e) {
    e.preventDefault();
    reiniciar ();
    //funcion para volver como al principio, no para vaciar solamente
})    
    function reiniciar() {
    //vaciaría las variables
    obras = []
    cantidadTotal = 0;
    contadorObras = 0;
    
    btnEnviar.disabled = false;
    btnEnviar.innerText = "Enviar";

    btnCalcular.style.display = "none";
    btnReiniciar.style.display = "none";

    let cantObrasInput = document.querySelector("#cantObras");
    cantObrasInput.style.display = "inline-block";
    cantObrasInput.value = "";
    
    let label = document.querySelector("#fieldCant label");
    label.innerHTML = "Cantidad de obras a exponer:";

    resto.style.display = "none";
    
    document.querySelector(".listado").innerHTML = "";

    vaciarFormulario();
}
function calcularResultado(){

    let consumoTotalDiario = 0;
    let obraMasHoras = obras[0];
    let obrasMas20Luces = 0;

    for(let i = 0; i <obras.length; i++) {
        let obra = obras[i];

        let consumoDiarioObra = obra.cantLuz * obra.consumo * obra.horas;

        consumoTotalDiario += consumoDiarioObra;

        if (obra.horas > obraMasHoras.horas) {
            obraMasHoras = obra;
        }
        if (obra.cantLuz > 20) {
            obrasMas20Luces++;
        }
   
    }
    const promedioConsumo = consumoTotalDiario / obras.length;
    const porcentajeMas20 = Math.round((obrasMas20Luces / obras.length)*100);

    const costoDiarioMasHoras = obraMasHoras.cantLuz * obraMasHoras.consumo * obraMasHoras.horas * obraMasHoras.costo;

    listado.innerHTML = `
    <h2>Resultados de las obras</h2>
    <p><strong>Consumo diario total:</strong> ${consumoTotalDiario} kWh</p>
    <p><strong>Consumo diario promedio por obra:</strong> ${promedioConsumo} kWh</p>
        
    <h3>Obra con mayor tiempo de funcionamiento:</h3>
    <p><strong>${obraMasHoras.nombre}</strong></p>
    <p>Horas diarias: ${obraMasHoras.horas} hs</p>
    <p>Costo diario: $${costoDiarioMasHoras}</p>
        
    <p><strong>Porcentaje de obras que usan más de 20 luces:</strong> ${porcentajeMas20}%</p>`
}