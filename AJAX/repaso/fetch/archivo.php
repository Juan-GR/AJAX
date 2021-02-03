<?php
//no necesaria
header("Content-Type:text/xml");
$fecha=$_GET["fecha"];

readfile("https://www.boe.es/diario_boe/xml.php?id=BOE-S-".$fecha);
?>