let nombres = [];
let apellidos = [];

function cargarDatos(ruta, coleccion) {
    let ajax = new XMLHttpRequest;
    ajax.addEventListener("readystatechange", function () {
        switch (this.readyState) {
            case 4:
                if (this.status >= 200 && this.status < 300) {
                    let texto = this.responseText;
                    let arrayDatos = texto.split(";");
                    console.log(arrayDatos);
                    if (ruta == "nombres.txt") {
                        nombres = arrayDatos;
                    } else {
                        apellidos = arrayDatos;
                    }
                }
                break;
        }
    })
    ajax.open("GET", ruta);
    ajax.send();
}


function cargarNombres() {
    let cadena = "";
    console.log(nombres);
    nombres.forEach(nombre => {
        cadena += `${nombre}<br>`;
    });
    document.getElementById("resultado").innerHTML = cadena;

}


function cargarApellidos() {
    let cadena = "";
    console.log(apellidos);
    apellidos.forEach(apellido => {
        cadena += `${apellido}<br>`;
    });
    document.getElementById("resultado2").innerHTML = cadena;

}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generarAleatorio() {
    for (let i = 0; i < 3; i++) {
        let random1 = getRandomInt(0, nombres.length);
        let random2 = getRandomInt(0, apellidos.length);
        let li = document.createElement("LI");
        li.textContent = `${nombres[random1]} ${apellidos[random2]}`;
        document.getElementById("nombresapellidos").appendChild(li);
    }
}


cargarDatos("nombres.txt");
cargarDatos("apellidos.txt");
document.getElementById("cargarn").addEventListener("click", cargarNombres);
document.getElementById("cargarap").addEventListener("click", cargarApellidos);
document.getElementById("generar").addEventListener("click", generarAleatorio);