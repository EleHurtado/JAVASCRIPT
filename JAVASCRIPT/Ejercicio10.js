// Función para calcular el promedio
function calcularPromedio(edades) {
    const suma = edades.reduce((acc, edad) => acc + edad, 0);
    return suma / edades.length;
  }
  
  // Función para calcular y mostrar los resultados
  function calcularPromedios() {
    // Obtener las edades de los inputs y validarlas
    const edadesManana = document.getElementById("manana").value.split(',').map(edad => Number(edad.trim()));
    const edadesTarde = document.getElementById("tarde").value.split(',').map(edad => Number(edad.trim()));
    const edadesNoche = document.getElementById("noche").value.split(',').map(edad => Number(edad.trim()));
  
    // Validar que los datos ingresados son correctos
    if (edadesManana.length !== 5 || edadesTarde.length !== 6 || edadesNoche.length !== 11) {
      document.getElementById("resultados").innerHTML = "Por favor, ingresa las cantidades correctas de edades para cada turno. (5 para mañana, 6 para tarde y 11 para noche)";
      return;
    }
  
    if (edadesManana.some(isNaN) || edadesTarde.some(isNaN) || edadesNoche.some(isNaN)) {
      document.getElementById("resultados").innerHTML = "Por favor, ingresa solo números válidos.";
      return;
    }
  
    // Calcular los promedios de cada turno
    const promedioManana = calcularPromedio(edadesManana);
    const promedioTarde = calcularPromedio(edadesTarde);
    const promedioNoche = calcularPromedio(edadesNoche);
  
    // Mostrar los promedios
    let resultadosHTML = `
      Promedio de edades del turno mañana: ${promedioManana.toFixed(2)}<br>
      Promedio de edades del turno tarde: ${promedioTarde.toFixed(2)}<br>
      Promedio de edades del turno noche: ${promedioNoche.toFixed(2)}<br>
    `;
  
    // Determinar el turno con el mayor promedio
    let turnoConMayorPromedio = '';
    if (promedioManana > promedioTarde && promedioManana > promedioNoche) {
      turnoConMayorPromedio = "El turno con el mayor promedio es el de mañana.";
    } else if (promedioTarde > promedioManana && promedioTarde > promedioNoche) {
      turnoConMayorPromedio = "El turno con el mayor promedio es el de tarde.";
    } else {
      turnoConMayorPromedio = "El turno con el mayor promedio es el de noche.";
    }
  
    // Mostrar el turno con mayor promedio
    resultadosHTML += turnoConMayorPromedio;
  
    // Insertar los resultados en el div
    document.getElementById("resultados").innerHTML = resultadosHTML;
  }
  