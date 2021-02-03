let objeto = "";

function mostrar() {
  //PASO 1
  let ajax = new XMLHttpRequest();
  //PASO 2
  ajax.addEventListener("readystatechange", function () {
    switch (ajax.readyState) {
      case 4:
        if (ajax.status >= 200 && ajax.status < 300) {
          let archivo = ajax.responseXML;
          let xml = archivo.documentElement;
          objeto = xml;
          for (let i = 0; i < xml.getElementsByTagName("piscina").length; i++) {
            let opcion = document.createElement("OPTION");
            opcion.setAttribute(
              "value",
              xml.getElementsByTagName("titulo")[i].textContent
            );
            opcion.textContent = xml.getElementsByTagName("titulo")[
              i
            ].textContent;
            document.getElementById("piscinas").appendChild(opcion);
          }
        }
        break;
    }
  });
  //PASO 3
  ajax.open("GET", "ejercicio.php");
  //PASO 4
  ajax.send();
}

function infoPiscina() {
  let cadena = "";
  let i = 0;
  for (let i = 0; i < objeto.getElementsByTagName("piscina").length; i++) {
    if (this.value === objeto.getElementsByTagName("titulo")[i].textContent) {
      cadena += `${objeto.getElementsByTagName("codigo_postal")[i].textContent}`;
      cadena += `${objeto.getElementsByTagName("descripcion")[i].textContent}`;
      cadena += `${objeto.getElementsByTagName("municipio")[i].textContent}`;
    }
  }

  document.getElementById("contenedor").innerHTML = cadena;
}

document.getElementById("boton").addEventListener("click", mostrar);
document.getElementById("piscinas").addEventListener("change", infoPiscina);
