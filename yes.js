const cards = document.querySelectorAll('.card-option');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.08)';
    card.style.boxShadow = '0 0 25px rgba(255, 105, 180, 0.4)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 0 10px rgba(255, 105, 180, 0.2)';
  });

  card.addEventListener('click', (e) => {
    e.preventDefault();
    card.style.transform = 'scale(0.95)';
    card.style.transition = 'transform 0.2s ease';
    setTimeout(() => {
      window.location.href = card.getAttribute('href');
    }, 300);
  });
});
