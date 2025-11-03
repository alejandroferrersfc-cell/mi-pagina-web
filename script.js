const photoCard = document.getElementById('photoCard');
const cardInner = photoCard.querySelector('.card-inner');
const enviarBtn = document.getElementById('enviarBtn');
const respuestas = document.querySelectorAll('input[name="respuesta"]');

// ✅ Ajustar altura real del viewport en móviles
function ajustarAltura() {
  const alturaReal = window.innerHeight;
  document.documentElement.style.setProperty('--altura-viewport', `${alturaReal}px`);
}

window.addEventListener('load', ajustarAltura);
window.addEventListener('resize', ajustarAltura);

// Giro solo al hacer clic en la parte frontal
photoCard.addEventListener('click', (e) => {
  if (photoCard.classList.contains('flipped')) return;
  const clickedFront = e.target.closest('.card-front');
  if (clickedFront) {
    photoCard.classList.add('flipped');
  }
});

// Mostrar botón "Enviar" al seleccionar respuesta
respuestas.forEach(radio => {
  radio.addEventListener('change', () => {
    enviarBtn.classList.remove('d-none');
  });
});

// Acción del botón enviar
enviarBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // No girar tarjeta al enviar
  const seleccion = document.querySelector('input[name="respuesta"]:checked').value;
  alert(`Has respondido: ${seleccion.toUpperCase()}`);
});
