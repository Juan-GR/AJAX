<?php
//Esta cabecera solo se añade cuando hay error de CORS
header("Access-Control-Allow-Headers:*");
header("Content-type:text/html");

$datos=file_get_contents("https://opendata.gijon.es/descargar.php?id=740&tipo=JSON");

echo $datos;

?>