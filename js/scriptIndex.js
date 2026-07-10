const datosCuriosos = [
    "Dato 1: Rafael Lozano-Hemmer es un artista mexicano-canadiense especializado en instalaciones interactivas en espacios públicos.",

    "Dato 2: Su obra combina tecnología avanzada como sensores biométricos, robótica y datos en tiempo real.",

    "Dato 3: En su proyecto Vectorial Elevation, ciudadanos controlaban reflectores gigantes a través de internet.",

    "Dato 4: Pulse Room es una instalación que traduce los latidos cardíacos de los visitantes en pulsos de luz.",

    "Dato 5: Su trabajo explora la relación entre el cuerpo humano, la tecnología y la vigilancia.",

    "Dato 6: Ha expuesto sus obras en más de 70 países alrededor del mundo.",

    "Dato 7: Lozano-Hemmer estudió ingeniería antes de dedicarse al arte, lo que influye en su enfoque tecnológico.",

    "Dato 8: Sus instalaciones suelen involucrar la participación activa del público para activar la obra.",

    "Dato 9: Fue ganador del prestigioso premio Ars Electronica por su innovador uso de tecnología en arte.",

    "Dato 10: Utiliza la luz como lenguaje poético para explorar temas de identidad, memoria y presencia."
];

const btnDato = document.querySelector("#btnDato");
btnDato.addEventListener("click", function(e) {
    e.preventDefault ();
    mostrarDatoAleatorio ();
});

function mostrarDatoAleatorio() {
    let azar = Math.floor(Math.random() * datosCuriosos.length);
    document.querySelector("#datoCurioso").innerText =datosCuriosos[azar];
};