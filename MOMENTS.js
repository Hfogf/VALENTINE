const fullText = "We've shared so many special memories together, and I can't wait to create more 💗Chaque moment passé à tes côtés est une étoile de plus dans mon ciel. Ces souvenirs me rappellent que l’amour se construit dans les gestes simples, les regards sincères, et les instants partagés. Et je sais que les plus beaux chapitres restent à écrire 💗";
const parchmentText = document.getElementById("parchmentText");
let index = 0;

function typeWriter() {
  if (index < fullText.length) {
    parchmentText.textContent += fullText.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  }
}

window.onload = typeWriter;


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
