//1
const nome = "Davi";
const idade = 20;

const frontend = true;

console.log("Olá, meu nome é " + nome + ", tenho " + idade + " e estudo front-end: " + frontend);

//2
function somar(x, y){
    return x + y;
}

console.log(somar(10, 5));

//3
const nota = 5;

if(nota > 9){
    console.log("Excelente");
}else if(nota >= 7){
    console.log("Aprovado");
}else{
    console.log("Reprovado");
}

//4
const stacks = ["HTML", "CSS", "JavaScript", "Figma", "Framer"];

console.log(stacks[0]);
console.log(stacks[4]);

function mostrarStacks(){
    for(const stack of stacks){
        console.log(stack);
    }
}

mostrarStacks();

//5

const numero = 10;

if (numero % 2 === 0){
    console.log("O número é par");
}else{
    console.log("O número é ímpar");
}

//6
const num1 = 15;
const num2 = 20;
const num3 = 5;

const maior = Math.max(num1, num2, num3);

console.log(`O maior número é: ${maior}`);

//7

for(let i = 1; i <= 20; i++){

    console.log(i);

    if(i % 2 === 0){
        console.log(`Par: ${i}`);
    }
}

//8
const notas = [3, 5, 10 , 8]

const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

console.log(`A média é: ${media}`);

if (media >= 7){
    console.log("Aprovado");
}else{
    console.log("Reprovado");
}