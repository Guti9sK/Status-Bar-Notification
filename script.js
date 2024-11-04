let caja = document.getElementById("caja");
let mensajeCorrecto =
  "<i class='fa-solid fa-circle-check'></i> Exitosamente enviado";
let mensajeError = "<i class='fa-solid fa-circle-xmark'></i>Error al enviar";
let mensajeInvalido =
  "<i class='fa-solid fa-circle-exclamation'></i>no válido, intentalo de nuevo";

function mostrarCaja(mensaje) {
  let cajaX = document.createElement("div");
  cajaX.classList.add("cajaDiv");
  cajaX.innerHTML = mensaje;
  caja.appendChild(cajaX);

  if (mensaje.includes("Error")) {
    cajaX.classList.add("Error");
  } else if (mensaje.includes("no válido")) {
    cajaX.classList.add("Invalido");
  }

  setTimeout(() => {
    cajaX.remove();
  }, 6000);
}
