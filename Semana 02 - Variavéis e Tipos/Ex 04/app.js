function calcular() {
    var number = document.getElementById("numero").value;
    document.getElementById("exibirNumero").innerHTML = Math.floor(number/3);

    console.log(number / 3);
}