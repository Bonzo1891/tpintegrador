//funcion calcular
var calcular = document.getElementById("resumen");

calcular.addEventListener("click", calcularPrecioEntrada);

function calcularPrecioEntrada() {
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var descuento = document.getElementById("descuento").value;
    var precioBase = 200;
    var precioFinal;
  
    if (descuento === "estudiante") {
      precioFinal = precioBase * 0.2; 
    } else if (descuento === "trainee") {
      precioFinal = precioBase * 0.5; 
    } else if (descuento === "junior") {
      precioFinal = precioBase * 0.85; 
    } else {
      alert("Selecciona una opción de descuento válida.");
      return;
    }
  
    var precioTotal = precioFinal * cantidad;
  
    document.getElementById("precioTotal").textContent = "Total a pagar: $" + precioTotal;
  }

  //funcion limpiar
  var limpiar = document.getElementById("borrar")

  limpiar.addEventListener("click", limpiarCampos)

  function limpiarCampos() {
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var correo = document.getElementById('correo');
    var cantidad = document.getElementById('cantidad');
  
    nombre.value = '';
    apellido.value = '';
    correo.value = '';
    cantidad.value = '';
  }
  