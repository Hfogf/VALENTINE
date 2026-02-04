
  const text = `Il y a en toi une énigme que je n’essaie plus de résoudre. 
Je m’y perds volontairement, comme on se perd dans la nuit en sachant qu’au bout, il y a la chaleur d’un corps aimé. 
Ton absence même me parle, et ta présence… me renverse. 
Je t’aime dans le silence, dans les regards qui durent une seconde de trop, dans ces instants suspendus où le monde n’existe plus que pour nous. 
Tu es ce frisson lent qui traverse ma peau, cette douceur dangereuse qui fait battre mon cœur sans demander la permission. 
Je ne sais pas quand l’amour a pris ton visage, je sais seulement qu’il s’est installé sans bruit, qu’il m’a appris la patience, le désir qui brûle sans se montrer, et la tendresse qui serre fort sans faire mal. 
Avec toi, je n’ai pas besoin de promesses. 
J’ai besoin de nuits à demi dites, de mots chuchotés trop près des lèvres, de cette tension délicieuse entre ce que je ressens et ce que je n’ose pas encore avouer. 
Si aimer est un mystère, alors laisse-moi m’y perdre encore, me consumer lentement dans ton regard, et t’offrir ce feu doux qui ne s’éteint pas au matin. 
En cette Saint-Valentin, je ne t’écris pas pour être compris, je t’écris pour être ressenti. 🌹✨

Chaque moment passé à tes côtés est une étoile de plus dans mon ciel. 
Ces souvenirs me rappellent que l’amour se construit dans les gestes simples, les regards sincères, et les instants partagés. 
Et je sais que les plus beaux chapitres restent à écrire 💗
on sait tout les deux que le talent principal de l'amour est de faire durer le mystère. mais aussi que celui de ton abruti de gars c'est de deconner et te foutre les nerfs honey!
Alors, continuons à écrire notre histoire, une page à la fois, avec la promesse silencieuse que chaque jour à venir sera une nouvelle aventure à deux. 
Je t'aime plus que les mots ne sauraient le dire , et encore plus que ce coeur ne peux contenir , car tu me fais me sentir moimême d'une manière que personne d'autre ne peut. 
Avec tout mon amour,
je t'aime`; ;

  const target = document.getElementById("parchmentText");
  let i = 0;
  const speed = 20;

  function typeWriter() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  document.addEventListener("DOMContentLoaded", typeWriter);


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
createSparkles();
createHearts();

setInterval(() => {
  createSparkles();
}, 10000);
