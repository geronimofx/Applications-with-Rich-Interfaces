var input = prompt("Digite um numero");

if(input % 2 == 0) {
    console.log(`O número ${input} é divisível por 2`);
    document.write(`O número ${input} é divisível por 2`);
} else {
    console.log(`O número ${input} não é divisível por 2`);
    document.write(`O número ${input} não é divisível por 2`);
}