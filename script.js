function Calcular() {
  var valorPrimeiraNota = document.getElementById("primeiraNota");
  var valorNota1 = valorPrimeiraNota.value;
  var valorNumericoNota1 = parseFloat(valorNota1);

  var valorSegundaNota = document.getElementById("segundaNota");
  var valorNota2 = valorSegundaNota.value;
  var valorNumericoNota2 = parseFloat(valorNota2);
  
  var valorTerceiraNota = document.getElementById("terceiraNota");
  var valorNota3 = valorTerceiraNota.value;
  var valorNumericoNota3 = parseFloat(valorNota3);
   
  var valorQuartaNota = document.getElementById("quartaNota");
  var valorNota4 = valorQuartaNota.value;
  var valorNumericoNota4 = parseFloat(valorNota4);
   
  var notaFinal = (valorNumericoNota1 + valorNumericoNota2 + valorNumericoNota3 + valorNumericoNota4) /4;
  var notaFixada = notaFinal.toFixed(1)
  console.log("Sua média é " + notaFixada);
   
   var valorDaMedia = document.getElementById("media");
    if (notaFixada > 7) {
       var valorFinal = "Parabéns, você foi aprovado com uma nota boa, sua média é " + notaFixada;
    } else if (notaFixada > 4.9 & notaFixada <= 7) {
       var valorFinal = "Você foi aprovado, mas por pouco, sua média é " + notaFixada + " estude mais um pouco da próxima";
     }else {
        var valorFinal = "Que pena, você foi reprovado, mas não desista dos estudos, sua média é " + notaFixada;
     }  
   valorDaMedia.innerHTML = valorFinal;
 }