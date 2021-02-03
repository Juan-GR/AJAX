//Funcion que se ejecuta al hacer click
function cargarDoc() {
    let xhr = new XMLHttpRequest();
    let nombre=document.getElementById("nombreLogin").value;
    let name = document.getElementById("nombreLogin").getAttribute("name");
    //Añadimos el evento del objeto XHR
    xhr.addEventListener("readystatechange", function () {
        switch (xhr.readyState) {
            case 4:
                if (xhr.status >= 200 && xhr.status < 300) {
                    document.getElementById("contenedor").innerHTML = xhr.responseText;
                }
                break;
        }
    });

    xhr.open("POST","http://localhost/AJAX/InteraccionServidor/metodoPOST/comprobar.php");
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(`${name}=${nombre}`);
}

//Obtenemos el boton  y le asignamos el evento
document.getElementById("boton").addEventListener("click", cargarDoc);