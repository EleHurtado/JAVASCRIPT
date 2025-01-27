function calcularDescuento() {
    var coche = document.getElementById("coche").value;
    var descuento = 0;

    switch (coche.toUpperCase()) {
      case "FORD FIESTA":
        descuento = 5;
        break;
      case "FORD FOCUS":
        descuento = 10;
        break;
      case "FORD ESCAPE":
        descuento = 20;
        break;
      default:
        alert("Coche no disponible");
        return;
    }

    document.getElementById("resultado").innerHTML = 
      "Coche seleccionado: " + coche + "<br>" + 
      "Descuento aplicado: " + descuento + "%";
  }