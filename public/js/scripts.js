function inserir(num) {
    var numero = document.getElementById('resultCalc').innerHTML;
    document.getElementById('resultCalc').innerHTML = numero + num;
}
function limpar() {
    document.getElementById('resultCalc').innerHTML = "";
}
function voltar() {
    var resultado = document.getElementById('resultCalc').innerHTML;
    document.getElementById('resultCalc').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular() {
    var resultado = document.getElementById('resultCalc').innerHTML;
    if(resultado) {
        document.getElementById('resultCalc').innerHTML = eval(resultado);
    }
    else {
        document.getElementById('resultCalc').innerHTML = "Nada..."
    }
}