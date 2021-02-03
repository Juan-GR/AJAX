<?php
$nombrePiscina=$_GET["nombre"];
header("Access-Control-Allow-Headers:*");
header("Content-type:text/html");
$datos = file_get_contents("https://opendata.gijon.es/descargar.php?id=740&tipo=JSON");
$datosJSON = json_decode($datos);

for ($i=0; $i< count($datosJSON); $i++) { 
   if($nombrePiscina==$datosJSON[$i]->titulo){
       echo "CODIGO POSTAL: ".$datosJSON[$i]->codigo_postal."<br>";
       echo "DIRECCION: ".$datosJSON[$i]->direccion;
       echo "MUNICIPIO: ".$datosJSON[$i]->municipio;
   }
}



?>