<?php
header("Access-Control-Allow-Headers:*");
header("Content-type:text/html");

//$archivo=file_get_contents("https://opendata.gijon.es/descargar.php?id=740&tipo=JSON");
//return $archivo;
readfile("https://opendata.gijon.es/descargar.php?id=740&tipo=JSON");




?>