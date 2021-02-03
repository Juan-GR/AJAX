function Boe() {
    let fecha=document.getElementById("fecha");
    fecha.addEventListener("change", exportarBoe);
}

function exportarBoe() {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    switch (xhr.readyState) {   
        case 4:
            console.log("holaaa");
            if(xhr.status>=200 && xhr.status<300){
                let respuesta=xhr.responseText;
                
                document.getElementById("contenedor").innerHTML=respuesta;
            }
            break;
    }


  });

  xhr.open("GET",`http://localhost/EjercicioBoeProxyenPHP/fichero.php?id=${fecha.value}`);
  xhr.send();
}

window.addEventListener("DOMContentLoaded", Boe);
