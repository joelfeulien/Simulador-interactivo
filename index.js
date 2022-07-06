
function calculadora (num1, num2, num3){
    return num1 * (1 + num2 * num3 / 100);
} 



let num1 = parseInt(prompt("Ingrese Precio Inicial"));
let num2 = parseInt(prompt("Ingrese cantidad de cuotas"));
let num3 = parseInt(prompt("Ingrese porcentaje mensual (solo número)"));

let resultado = calculadora(num1, num2, num3);
alert(calculadora (num1, num2, num3));

