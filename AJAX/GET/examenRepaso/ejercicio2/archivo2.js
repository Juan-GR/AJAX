fetch("consulta.php")
    .then(respuesta => {
        if (respuesta.ok) {
            return respuesta.text()
        } else {
            console.log(respuesta.status);
        }
    })
    .then(texto => {
        //Objeto a parsear
        let textoParsed = new DOMParser();
        let documentoXML = textoParsed.parseFromString(texto, "text/xml");
        console.log(documentoXML);
        for (let i = 0; i < documentoXML.getElementsByTagName("MakeName").length; i++) {
            let opcion = document.createElement("OPTION");
            opcion.setAttribute("value", documentoXML.getElementsByTagName("MakeName")[i].textContent);
            opcion.textContent = documentoXML.getElementsByTagName("MakeName")[i].textContent;
            document.getElementById("vehiculos").appendChild(opcion);
        }
    })


function mostrarDatos() {
    fetch("consulta.php")
        .then(respuesta => {
            if (respuesta.ok) {
                return respuesta.text()
            } else {
                console.log(respuesta.status);
            }
        })
        .then(texto => {
            //Objeto a parsear
            let textoParsed = new DOMParser();
            let documentoXML = textoParsed.parseFromString(texto, "text/xml");
            for (let i = 0; i < documentoXML.getElementsByTagName("MakeName").length; i++) {
                if (this.value == documentoXML.getElementsByTagName("MakeName")[i].textContent) {
                    document.getElementById("datos_coche").textContent = `${this.value} ID:${documentoXML.getElementsByTagName("MakeId")[i].textContent}`
                }
            }

        })
}

function verRegistro() {
    fetch("consulta.php")
        .then(respuesta => {
            if (respuesta.ok) {
                return respuesta.text()
            } else {
                console.log(respuesta.status);
            }
        })
        .then(texto => {
            //Objeto a parsear
            let textoParsed = new DOMParser();
            let documentoXML = textoParsed.parseFromString(texto, "text/xml");
            for (let i = 0; i < documentoXML.getElementsByTagName("MakeName").length; i++) {
                if (document.getElementById("nuevocoche_modelo").value == documentoXML.getElementsByTagName("MakeName")[i].textContent) {
                    document.getElementById("contenedor").textContent = `ID:${documentoXML.getElementsByTagName("MakeId")[i].textContent}`
                }
            }

        })
}

function buscar() {
    fetch("consulta.php")
        .then(respuesta => {
            if (respuesta.ok) {
                return respuesta.text()
            } else {
                console.log(respuesta.status);
            }
        })
        .then(texto => {
            //200 y 500
            //Objeto a parsear
            let textoParsed = new DOMParser();
            let documentoXML = textoParsed.parseFromString(texto, "text/xml");
            for (let i = 0; i < documentoXML.getElementsByTagName("MakeName").length; i++) {
                if (documentoXML.getElementsByTagName("MakeId")[i].textContent >=document.getElementById("vmin").value && documentoXML.getElementsByTagName("MakeId")[i].textContent<=document.getElementById("vmax").value) {
                    document.getElementById("buscados").innerHTML += `COCHE:${documentoXML.getElementsByTagName("MakeName")[i].textContent}<br>`;
                }
            }

        })
}




document.getElementById("vehiculos").addEventListener("change", mostrarDatos);
document.getElementById("registrarvehiculo").addEventListener("click", verRegistro);
document.getElementById("buscarentre").addEventListener("click", buscar)