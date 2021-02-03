document.getElementById("boton").addEventListener("click",function(){
    const xhr=new XMLHttpRequest();
    xhr.addEventListener("readystatechange",function(){
        switch (xhr.readyState) {           
            case 4:
                if(xhr.status>=200 && xhr.status<300){
                    let documento=xhr.responseXML; //responseText
                    let datos=documento.documentElement;
                    let longitud=datos.getElementsByTagName("empleados").length;
                    console.log(longitud);
                    let cadena="";
                    for (let i = 0; i < longitud; i++) {
                        cadena+=`<p style="color:blue">${datos.getElementsByTagName("nombre")[i].textContent} ${datos.getElementsByTagName("apellidos")[i].textContent}</p>`;
                        cadena+=`<p>${datos.getElementsByTagName("edad")[i].textContent}</p>`;
                        cadena+=`<p>Estado Civil: ${datos.getElementsByTagName("ecivil")[i].textContent}</p>`;
                        cadena+=`<p>Tiene coche: ${datos.getElementsByTagName("tcoche")[i].textContent}</p>`;
                    }
                    document.getElementById("contenedor").innerHTML=cadena;
                }
                break;
        }
    })
    xhr.open("GET",document.getElementById("fichero").value);
    xhr.send();
});