<?php
$fecha=$_GET["id"];
$xmlDoc=new DOMDocument();
$xmlDoc->load("https://www.boe.es/diario_boe/xml.php?id=BOE-S-".$fecha);
$secciones=$xmlDoc->getElementsByTagName("seccion");
for ($i=0; $i <count($secciones); $i++) { 
    echo "<ul>".$secciones[$i]->getAttribute("nombre");
    $departamentos=$secciones[$i]->getElementsByTagName("departamento");
    for ($j=0; $j <count($departamentos); $j++) { 
        echo "<li>".$departamentos[$j]->getAttribute("nombre")."</li>";
    }
    echo "</ul>";
}

?>