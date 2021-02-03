function mostrar(){

fetch("archivo.php?fecha="+20210118)
.then(respuesta=>respuesta.text())
.then(archivo=>{
    let archivoParseado=new DOMParser();
    let xml=archivoParseado.parseFromString(archivo,"text/xml");
    let fragmento=new DocumentFragment();
    for (let i = 0; i < xml.getElementsByTagName("departamento").length; i++) {
        let opcion=document.createElement("OPTION");
        opcion.setAttribute("value",xml.getElementsByTagName("departamento")[i].getAttribute("nombre"))
        opcion.textContent=xml.getElementsByTagName("departamento")[i].getAttribute("nombre");
        fragmento.appendChild(opcion);
    }
    document.getElementById("piscinas").appendChild(fragmento);
})

}


document.getElementById("boton").addEventListener("click",mostrar)