document.addEventListener('DOMContentLoaded', () => {
  // RGB Mixer
  const sliders = document.querySelectorAll('.slider');
  const preview = document.querySelector('.color-preview');
  const values = document.querySelectorAll('.value');

  function updateColor() {
    const [r, g, b] = Array.from(sliders).map(slider => slider.value);
    preview.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    values.forEach((value, index) => {
      value.textContent = sliders[index].value;
    });
  }

  sliders.forEach(slider => {
    slider.addEventListener('input', updateColor);
  });

  // CMYK Demo
  const svg = document.querySelector('.cmyk-circles');
  
  // Criar círculos CMYK com sobreposição
  const circles = [
    { color: '#00FFFF', opacity: 0.5 }, // Cyan
    { color: '#FF00FF', opacity: 0.5 }, // Magenta
    { color: '#FFFF00', opacity: 0.5 }, // Yellow
    { color: '#000000', opacity: 0.5 }  // Key (Black)
  ];

  const centerX = 150;
  const centerY = 150;
  const radius = 60;
  const angles = [45, 135, 225, 315];

  circles.forEach((circle, index) => {
    const x = centerX + Math.cos(angles[index] * Math.PI / 180) * radius;
    const y = centerY + Math.sin(angles[index] * Math.PI / 180) * radius;
    
    const circleElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circleElement.setAttribute('cx', x);
    circleElement.setAttribute('cy', y);
    circleElement.setAttribute('r', radius);
    circleElement.setAttribute('fill', circle.color);
    circleElement.setAttribute('opacity', circle.opacity);
    circleElement.style.transition = 'all 0.3s ease';
    
    svg.appendChild(circleElement);
  });

  // Animação suave ao scroll
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      const offset = 80; // Ajuste para o navbar fixo
      
      window.scrollTo({
        top: targetSection.offsetTop - offset,
        behavior: 'smooth'
      });
    });
  });

  // Inicializar o preview de cor
  updateColor();
});