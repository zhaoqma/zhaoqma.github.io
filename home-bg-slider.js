document.addEventListener('DOMContentLoaded', function() {
  const images = [
    '/media/coders.jpg',
    '/media/contact.jpg',
    '/media/welcome.jpg'
  ];
  const container = document.createElement('div');
  container.className = 'home-bg-slider';
  images.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    if (i === 0) img.classList.add('active');
    container.appendChild(img);
  });
  document.body.appendChild(container);

  let idx = 0;
  setInterval(() => {
    const imgs = container.querySelectorAll('img');
    imgs.forEach((img, i) => img.classList.toggle('active', i === idx));
    idx = (idx + 1) % images.length;
  }, 5000);
}); 