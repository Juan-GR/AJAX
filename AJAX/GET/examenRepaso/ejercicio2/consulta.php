<?php
header("Content-Type:text/html");
readfile("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=xml");

?>