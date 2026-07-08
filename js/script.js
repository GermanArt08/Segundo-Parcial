//Declaro variables bases
let obras = [];
let cantidadTotal = 0;
let contadorObras = 0;
let resto = document.querySelector("#resto");
let listado = document.querySelector("#listado");
//Defino variables para los botones:
const btnEnviar = document.querySelector("#btnEnviar");
const btnCalcular = document.querySelector("#btnCalcular");
const btnReiniciar = document.querySelector("#btnReset");

//Agrego una función específica a cada botón
btnReset.addEventListener( "click", function(e) {
    e.preventDefault ();
    vaciarFormulario ();
})
btnEnviar.addEventListener("click", function(e) {
    e.preventDefault ();
    ingresarDatos ();
})

//Declaro qué hace la función ingresarDatos

function ingresarDatos() {
    if (cantidadTotal === 0) {
        let cantObrasInput = document.querySelector("#cantObras");
        let cant = cantObrasInput.ariaValueMax;
        if (cant=="" || isNaN(cant) || cant<=0) {
            alert("Ingrese una cantidad de obras válida");
            return;
        }

        cantidadTotal = +cant;

        resto.style.display = "inline-block";
        cantObrasInput.style.display = "none";

        let infoCantidad = document.querySelector("#infoCantidad");
        if (infoCantidad) {
            infoCantidad.textContent = `Cantidad de obras a exponer: ${cantidadTotal}`;
        }
        btnEnviar.textContent = "Agregar obra";
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
    if(horas == "" || isNaN(horas) || horas<=0) {
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
}