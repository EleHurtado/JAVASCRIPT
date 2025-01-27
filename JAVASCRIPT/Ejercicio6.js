function calcularDescuentoViaje() {
    var origen = document.getElementById("origen").value.toLowerCase();
    var destino = document.getElementById("destino").value.toLowerCase();
    var descuento = 0;

    if (origen === "Palma" && destino === "La Costa del Sol") {
      descuento = 5;
    } else if (destino === "Panchimalco") {
      descuento = 10;
    } else if (destino === "Puerto El Triunfo") {
      descuento = 15;
    } else {
      alert("Destino no válido.");
      return;
    }

    document.getElementById("descuento").innerHTML = 
      "Descuento aplicado: " + descuento + "%";
  }