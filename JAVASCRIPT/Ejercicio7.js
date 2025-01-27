function procesarValores() {
    let negativos = 0, positivos = 0, multiplos15 = 0, sumaPares = 0;
  
    for (let i = 0; i < 10; i++) {
      let valor = prompt("Ingresa un valor entero:");
  
      if (valor < 0) negativos++;
      if (valor > 0) positivos++;
      if (valor % 15 === 0) multiplos15++;
      if (valor % 2 === 0) sumaPares += valor;
    }
  
    alert("Valores negativos: " + negativos);
    alert("Valores positivos: " + positivos);
    alert("Múltiplos de 15: " + multiplos15);
    alert("Suma de valores pares: " + sumaPares);
  }
  