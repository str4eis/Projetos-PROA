

function calcular() {

  const quantA = parseFloat(document.getElementById("quantA").value);
  const quantD = parseFloat(document.getElementById("quantD").value);
  const valor = (quantA + quantD) * 10;
  const taxa = (quantD * 10) * 0.10;
  const resultado = valor + taxa;
  document.getElementById("resultado").innerHTML = "Resultado: " + resultado.toFixed(2);

}
