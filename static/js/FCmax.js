
function calcularFC(){
  var nombre = prompt("Ingresa tu nombre: ");
  var Edad = prompt("Ingresa tu edad: ");
  var FC_Max = 220 - Edad;
  alert(nombre+" tu FC Maximaa Teorica = "+ parseInt(FC_Max)+" latidos por minuto.");
  var FC_Max;
  var FC_Max_Ae = FC_Max * 0.8;
  var FC_Max_Ana = FC_Max * 0.6;
  alert("Tu rango de trabajo debe ser entre: "+ parseInt(FC_Max_Ana)+ " y "+ parseInt(FC_Max_Ae)+" latidos por minuto.")

}