let documento="";

function mostrar(){

fetch("archivoJson.php")
.then(respuesta=>respuesta.json())
.then(archivoJson=>{
    documento=archivoJson;
    for (let i = 0; i < archivoJson.length; i++) {
        let opcion=document.createElement("OPTION");
        opcion.setAttribute("value",archivoJson[i].titulo);
        opcion.textContent=archivoJson[i].titulo;
        document.getElementById("piscinas").appendChild(opcion);
        
    }
})
}

function info(){
    let cadena="";
    for (let i = 0; i < documento.length; i++) {
        if(documento[i].titulo===this.value){
            cadena+=`Codigo Postal: ${documento[i].codigo_postal}<br>`;
            cadena+=`Direccion: ${documento[i].direccion}<br>`;
            cadena+=`Municipio: ${documento[i].municipio}<br>`;
        }
    }
    document.getElementById("contenedor").innerHTML=cadena;
}




document.getElementById("boton").addEventListener("click",mostrar);
document.getElementById("piscinas").addEventListener("change",info)