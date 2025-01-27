function convertirTemperatura() {
    let celsius = prompt("Ingresa la temperatura en Celsius:");
    let fahrenheit = (celsius * 9/5) + 32;
  
    if (fahrenheit >= 14 && fahrenheit <= 32) {
      alert("Temperatura baja");
    } else if (fahrenheit > 32 && fahrenheit <= 68) {
      alert("Temperatura adecuada");
    } else if (fahrenheit > 68 && fahrenheit <= 96) {
      alert("Temperatura alta");
    } else {
      alert("Temperatura desconocida");
    }
  }
  