function exportarXML() {
  let provincia = document.getElementById("provincia");
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    switch (xhr.readyState) {
      case 4:
        console.log("holaaa");
        if (xhr.status >= 200 && xhr.status < 300) {
          let respuesta = xhr.responseText;
          document.getElementById("contenedor").innerHTML = respuesta;
        }
        break;
    }
  });

  xhr.open(
    "GET",
    `http://localhost/AJAX/GET/EjercicioBoeProxyPhpJSON/archivo.php?provincia=${provincia.value}`
  );
  xhr.send();
}

document.getElementById("boton").addEventListener("click", exportarXML);
