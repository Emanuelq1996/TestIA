<?php

#creacion de objeto
$frutas = (object)["fruta1"=> "pera", "fruta2" => "manzana", "cantidad"=>58];
echo "la fruta $frutas->fruta1";

#para fijarme los datos de una var
var_dump($frutas);

#funciones
fuction saludo(){
	echo "Hola";
}

saludo();


function despedida($var){
	echo "$var";
	#return $var; tambien se puede hacer return igual a java
}

despedida("adios");

#condiciones

$a = 5;
$b = 10;

if ($a > $b){
	echo "a mayor que b";
}
else if ($a < $b) {
	echo "a menor que b";
}
else{
	echo "a igual que b";
}

switch ($dia) {
	case 'sabado':
		echo "es sabadulin";
		break;

	case 'viernes':
		echo "es viernes y mi cuerpo lo sabe";
		break;
	
	default:
		echo "oh no";
		break;
}


#ciclos

while ($n<= 10) {
	echo $n;
	n++;
}

do{
	echo "$n";
	n++;
}
while($n <9);


for ($i=0; $i < $n; $i++) { 
	echo "holoo";
}


#clase

class Automovil{

	private $marca;
	private $modelo;


	public function mostrar(){
		echo "<p> soy $this->marca, $this->modelo </p>";
	}
}


$auto = new Automovil();
$auto -> mostrar();



?>


