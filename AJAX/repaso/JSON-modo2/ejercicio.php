<?php
header("Access-Control-Allow-Headers:*");
header("Content-type:text/html");
$datos = file_get_contents("https://opendata.gijon.es/descargar.php?id=740&tipo=JSON");
$datosJSON = json_decode($datos);
$piscinas = array();

for ($i=0; $i< count($datosJSON); $i++) { 
   $piscina=$datosJSON[$i]->titulo;
    array_push($piscinas,$piscina);
}

echo json_encode($piscinas);

?>