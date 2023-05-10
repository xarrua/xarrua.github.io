calcularScoreDeTal()
function scoreDeTal(){
  var h = prompt("Ingresa tu altura en metros: ");
  var m = prompt("Ingresa tu peso en Kg: ");
  var calcularIMC = m/h**2;
  alert("Tu IMC = "+ parseInt(calcularIMC));
  var calcularIMC
  if (calcularIMC <18.5){
      alert("Estas bajo peso");
  } else if (calcularIMC >= 18.5 && calcularIMC <25){
      alert("Peso Normal");
  } else if (calcularIMC >= 25 && calcularIMC <30){
      alert("Tienes sobre peso");
  } else if (calcularIMC >=30 && calcularIMC <35){
      alert("Tienes obesidad leve");
  } else if (calcularIMC >=35 && calcularIMC <40){
      alert("Tienes obesidad moderada");
  } else {
      alert("tienes obesidad morbida");
  }
}