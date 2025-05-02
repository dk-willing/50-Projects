'use strict';

const smallImages = document.querySelectorAll('.small-img-box img');
const largeImage = document.querySelector('.big-img-box img');

smallImages.forEach(img => {
  img.addEventListener('click', () => (largeImage.src = img.src));
});
