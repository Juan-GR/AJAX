document.getElementById("boton").addEventListener("click",function(){
    const xhr=new XMLHttpRequest();
    xhr.addEventListener("readystatechange",function(){
        switch (xhr.readyState) {
            case 4:
                if(xhr.status>=200 && xhr.status<300){
                    let documento=JSON.parse(xhr.responseText);
                    document.getElementById("contenedor").textContent=documento.datos.empleados[0].nombre;

                }
                break;
        }
    })
    xhr.open("GET",document.getElementById("fichero").value);
    xhr.send();
});