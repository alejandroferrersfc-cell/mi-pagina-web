const photoCard = document.getElementById('photoCard');
const cardInner = photoCard.querySelector('.card-inner');
const enviarBtn = document.getElementById('enviarBtn');
const respuestas = document.querySelectorAll('input[name="respuesta"]');

// ✅ Ajustar altura real del contenedor en móviles
function ajustarAlturaReal() {
  const contenedor = document.querySelector('.fullscreen-center');
  contenedor.style.height = `${window.innerHeight}px`;
}

window.addEventListener('load', ajustarAlturaReal);
window.addEventListener('resize', ajustarAlturaReal);

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

