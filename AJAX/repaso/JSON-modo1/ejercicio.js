let objeto="";

function mostrar(){
    //PASO 1
    let ajax=new XMLHttpRequest();
    //PASO 2
    ajax.addEventListener("readystatechange",function(){
        switch (ajax.readyState) {
            case 4:
                if(ajax.status>=200 && ajax.status<300){
                    let archivo=JSON.parse(ajax.responseText);
                    objeto=archivo;
                    for (let i = 0; i < archivo.length; i++) {
                        let opcion=document.createElement("OPTION");
                        opcion.setAttribute("value",archivo[i].titulo);
                        opcion.textContent=archivo[i].titulo;
                        document.getElementById("piscinas").appendChild(opcion);
                    }
                }
                break;
        }
    })
    //PASO 3
    ajax.open("GET","ejercicio.php");
    //PASO 4
    ajax.send();
}

function infoPiscina(){
    let cadena="";
    let i=0;
    for (i = 0; i < objeto.length; i++) {
        if(objeto[i].titulo===this.value){
            cadena+=`Codigo Postal ${objeto[i].codigo_postal}<br>`;
            cadena+=`${objeto[i].descripcion}<br>`;
            cadena+=`${objeto[i].municipio}<br>`;
        }
    }
    document.getElementById("contenedor").innerHTML=cadena;
}

document.getElementById("boton").addEventListener("click",mostrar);
document.getElementById("piscinas").addEventListener("change",infoPiscina);