<?php
$provincia=$_GET["provincia"];
header("Access-Control-Allow-Headers:*");
header("content-type:text/html");
$datos=file_get_contents("http://opendata.jcyl.es/ficheros/cct/wtur/monumentos.json");
$datosJSON=json_decode($datos);
$array_monumentos=array();
$i=0;
foreach($datosJSON->monumentos as $monument){
    if($monument->poblacion->provincia==$provincia){
        $array_monumentos[$i]=$monument;
        $i++;
    }
}
echo json_encode($array_monumentos);
?>