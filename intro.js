document.getElementById("startBtn").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value.trim().toLowerCase();
  const errorMessage = document.getElementById("errorMessage");

  if (name === "rosita") {
    window.location.href = "valentine.html";
  } else {
    errorMessage.textContent = "Oh non 😢... Ce prénom ne fait pas battre mon cœur. Réessaie encore...";
  }
});


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
