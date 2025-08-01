// Merch gallery images (customize here)
const galleryImages = [
  'src/assets/merch_images/DSCF1735.jpg',
  'src/assets/merch_images/DSCF1631.jpg',
  'src/assets/merch_images/DSCF1515.jpg',
  'src/assets/merch_images/DSCF1460.jpg',
  'src/assets/merch_images/DSCF1651.jpg',
  'src/assets/merch_images/DSCF1439.jpg'
];

// Color-specific images (customize here)
const colorImages = {
  white: 'src/assets/merch_images/DSCF1735.jpg', // Set your white shirt image
  purple: 'src/assets/merch_images/DSCF1631.jpg' // Set your purple shirt image
};

let currentIndex = 0;
let currentColor = 'white';
let autoCycleInterval = null;

function updatePreview() {
  const img = document.getElementById('merch-preview');
  img.src = galleryImages[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  updatePreview();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  updatePreview();
}

function selectColor(color) {
  currentColor = color;
  // Highlight selected color
  document.querySelectorAll('.color-btn').forEach(btn => btn.classList.remove('selected'));
  document.querySelector('.color-btn.' + color).classList.add('selected');
  // Change preview to color-specific image
  document.getElementById('merch-preview').src = colorImages[color];
}

function selectSize(size) {
  document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('selected'));
  Array.from(document.querySelectorAll('.size-btn')).find(btn => btn.textContent === size).classList.add('selected');
}

function startAutoCycle() {
  if (autoCycleInterval) clearInterval(autoCycleInterval);
  autoCycleInterval = setInterval(() => {
    nextImage();
  }, 3000); // Change image every 3 seconds
}

function stopAutoCycle() {
  if (autoCycleInterval) clearInterval(autoCycleInterval);
}

// Set default selections on load
document.addEventListener('DOMContentLoaded', () => {
  selectColor('white');
  selectSize('M');
  updatePreview();
  startAutoCycle();
  // Pause auto cycle on hover
  const gallery = document.querySelector('.merch-gallery');
  if (gallery) {
    gallery.addEventListener('mouseenter', stopAutoCycle);
    gallery.addEventListener('mouseleave', startAutoCycle);
  }
});