var resumen = document.getElementById("resumen");

// Agregar evento de clic al botón
resumen.addEventListener("click", calcularPrecioEntrada);

function calcularPrecioEntrada() {
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var descuento = document.getElementById("descuento").value;
    var precioBase = 200;
    var precioFinal;
  
    if (descuento === "estudiante") {
      precioFinal = precioBase * 0.2; // Descuento del 80% (20% del precio base)
    } else if (descuento === "trainee") {
      precioFinal = precioBase * 0.5; // Descuento del 50%
    } else if (descuento === "junior") {
      precioFinal = precioBase * 0.85; // Descuento del 15%
    } else {
      // Si no se selecciona una opción válida, muestra un mensaje de error
      alert("Selecciona una opción de descuento válida.");
      return;
    }
  
    var precioTotal = precioFinal * cantidad;
  
    // Mostrar el precio total en un elemento de HTML con el id "precioTotal"
    document.getElementById("precioTotal").textContent = "$" + precioTotal;
  }

  