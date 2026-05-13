// Teste de funções em JavaScript
function soma(valor1, valor2){
    return valor1 + valor2;
}
function realParaDolar(real, cotacao){
    return real * cotacao;
}

let cotacaoDolar = realParaDolar(100, 5.25);

//alert("Cotação do dólar: " + cotacaoDolar);

document.getElementById("resultado").innerHTML = soma(10, 20);

function trocar(){
    document.body.classList.toggle("escuro");

}   

const modal = document.getElementById('meuModal');

function abrir() {
  modal.style.display = 'flex';
}

function fechar() {
  modal.style.display = 'none';
}

