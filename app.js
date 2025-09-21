// Cambia esta fecha por la del evento:
const fechaEvento = new Date("Nov 08, 2025 16:00:00").getTime();

const x = setInterval(function() {
  const ahora = new Date().getTime();
  const diferencia = fechaEvento - ahora;

  if (diferencia < 0) {
    clearInterval(x);
    document.querySelector(".contador").innerHTML = "<h3>¡El gran día ha llegado!</h3>";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
}, 1000);
