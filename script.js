
// ======== FONDO DE COLLAGE ======== //
const imageUrls = [
  'Ale1.jpeg', 'Ale2.jpeg', 'Ale3.jpeg',
  'Ale4.jpeg', 'Ale5.jpeg', 'Ale6.jpeg',
  'Ale7.jpeg', 'Ale8.jpeg', 'Ale9.jpeg'
];

const backgroundGrid = document.querySelector('.background-grid');

// Generar imágenes de fondo
for (let i = 0; i < 60; i++) { // más imágenes pequeñas
  const img = document.createElement('img');
  img.src = imageUrls[Math.floor(Math.random() * imageUrls.length)];
  img.style.animationDelay = `${Math.random() * 5}s`;
  backgroundGrid.appendChild(img);
}

// Cambiar aleatoriamente las imágenes del fondo cada 8 segundos
setInterval(() => {
  const imgs = document.querySelectorAll('.background-grid img');
  imgs.forEach(img => {
    img.src = imageUrls[Math.floor(Math.random() * imageUrls.length)];
  });
}, 8000);

// ======== TARJETA INTERACTIVA ======== //
const photoCard = document.getElementById('photoCard');
const enviarBtn = document.getElementById('enviarBtn');
const respuestas = document.querySelectorAll('input[name="respuesta"]');

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

// Acción del botón enviar con música si responde "Sí"
enviarBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // No girar tarjeta al enviar
  const seleccion = document.querySelector('input[name="respuesta"]:checked').value;
  if (seleccion === 'si') {
    document.getElementById('musicaContainer').style.display = 'block'; // 🎶 activa música
  } else {
    alert('¡Qué pena! 😢');
  }
});

