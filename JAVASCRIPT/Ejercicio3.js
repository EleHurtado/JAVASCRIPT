function calcularAumento(salario, categoria) {
    let aumento = 0;
  
    switch (categoria.toUpperCase()) {
      case "A":
        aumento = salario * 0.15; // 15%
        break;
      case "B":
        aumento = salario * 0.30; // 30%
        break;
      case "C":
        aumento = salario * 0.10; // 10%
        break;
      case "D":
        aumento = salario * 0.20; // 20%
        break;
      default:
        return "Categoría no válida.";
    }
  
    return salario + aumento;
  }
  
  // Ejemplo de uso:
  let salario = prompt("Ingresa el salario del empleado:");
  let categoria = prompt("Ingresa la categoría (A, B, C, D):");
  
  let salarioFinal = calcularAumento(Number(salario), categoria);
  
  alert("El salario final con el aumento es: " + salarioFinal.toFixed(2));
  