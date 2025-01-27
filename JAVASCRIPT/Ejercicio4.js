function mayorDeDosNumeros(num1, num2) {
    return (num1 > num2) ? num1 : num2;
  }
  
  // Ejemplo de uso:
  let numero1 = prompt("Ingresa el primer número:");
  let numero2 = prompt("Ingresa el segundo número:");
  alert("El mayor número es: " + mayorDeDosNumeros(Number(numero1), Number(numero2)));
  