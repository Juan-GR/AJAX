<?php
$login=$_POST["login"];
$test=false;

$usuarios=["juan","pepe","jorge"];

foreach ($usuarios as $nombre) {
   if($login==$nombre){
       echo "El usuario ".$nombre." existe";
       $test=true;
       break;
   }
}

if(!$test){
    echo "El usuario ".$login." no existe";
}
?>