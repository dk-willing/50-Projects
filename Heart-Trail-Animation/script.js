'use strict';
const bodyEl = document.querySelector('body');

bodyEl.addEventListener('mousemove', e => {
  const xPos = e.offsetX;
  const yPos = e.offsetY;

  const span = document.createElement('span');
  span.style.left = `${xPos}px`;
  span.style.top = `${yPos}px`;

  const size = Math.floor(Math.random() * 100);
  span.style.width = `${size}px`;
  span.style.height = `${size}px`;

  bodyEl.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 3000);
});
