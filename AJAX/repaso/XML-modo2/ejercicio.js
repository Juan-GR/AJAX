let objeto = "";

function mostrar() {
  //PASO 1
  let ajax = new XMLHttpRequest();
  //PASO 2
  ajax.addEventListener("readystatechange", function () {
    switch (ajax.readyState) {
      case 4:
        if (ajax.status >= 200 && ajax.status < 300) {
          let archivo = ajax.responseText;
          let piscinas=archivo.split("//");
          piscinas.pop();
          
          for (let i = 0; i < array.length; i++) {
            
            
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
