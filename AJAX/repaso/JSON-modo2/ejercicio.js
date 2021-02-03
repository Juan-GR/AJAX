function mostrar() {
  //PASO 1
  let ajax = new XMLHttpRequest();
  //PASO 2
  ajax.addEventListener("readystatechange", function () {
    switch (ajax.readyState) {
      case 4:
        if (ajax.status >= 200 && ajax.status < 300) {
          let archivo = JSON.parse(ajax.responseText);
          for (let i = 0; i < archivo.length; i++) {
            let opcion=document.createElement("OPTION");
            opcion.setAttribute("value",archivo[i]);
            opcion.textContent=archivo[i];
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
  //PASO 1
  let ajax = new XMLHttpRequest();
  //PASO 2
  ajax.addEventListener("readystatechange", function () {
    switch (ajax.readyState) {
      case 4:
        if (ajax.status >= 200 && ajax.status < 300) {
          let archivo = ajax.responseText;
          console.log(archivo);
          
        }
        break;
    }
  });
  //PASO 3
  ajax.open("GET", `consulta2.php?nombre=${this.value}`);
  //PASO 4
  ajax.send();
}

document.getElementById("boton").addEventListener("click", mostrar);
document.getElementById("piscinas").addEventListener("change", infoPiscina);