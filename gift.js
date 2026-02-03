// Générer des étoiles scintillantes
function createSparkles() {
  for (let i = 0; i < 60; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.animationDelay = `${Math.random() * 2}s`;
    sparkle.style.animationDuration = `${2 + Math.random() * 2}s`;
    document.body.appendChild(sparkle);
  }
}

// Générer des cœurs flottants
function createHearts() {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.top = `${Math.random() * 100}%`;
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${15 + Math.random() * 20}px`;
    heart.style.animationDelay = `${Math.random() * 5}s`;
    heart.style.animationDuration = `${8 + Math.random() * 4}s`;
    heart.style.opacity = Math.random() * 0.6 + 0.3;
    document.body.appendChild(heart);
  }
}

// Initialiser les animations
createSparkles();
createHearts();

// Recréer les particules périodiquement pour un effet continu
setInterval(() => {
  createSparkles();
}, 10000);

// Navigation
document.querySelector('.nav-button.left').addEventListener('click', () => {
  window.history.back();
});

document.querySelector('.nav-button.right').addEventListener('click', () => {
  goToNextScene();
});

// Transition vers la prochaine scène
function goToNextScene() {
  document.body.style.transition = 'opacity 1s ease';
  document.body.style.opacity = '0';
  setTimeout(() => {
    window.location.href = 'letter.html'; // Changez vers votre prochaine page
  }, 1000);
}