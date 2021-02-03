<?php

header("Content-type:text/xml");
readfile("https://opendata.gijon.es/descargar.php?id=740&tipo=XML");

?>