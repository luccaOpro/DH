let suma = (n1, n2) => n1 + n2;
let resta = (n1, n2) => n1 - n2;
let multiplicacion = (n1, n2) => n1 * n2;
let division = (n1, n2) => n1 / n2;

function calculadora(n1, n2, operacion){
    return operacion(n1, n2);
}
console.log(calculadora(2,4,multiplicacion))