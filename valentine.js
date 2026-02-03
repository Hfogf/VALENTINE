let yesClicks = 0;
let noClicks = 0;
let noDisappeared = false;

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const message = document.getElementById("message");

const yesMessages = [
  "Pourquoi t'es aussi pressé ?",
  "Ralentis mon amour...",
  "Tu me fais rougir 😳",
  "Tu veux vraiment de moi hein ?",
  "Je savais que tu m'aimais trop ❤️"
];

const noMessages = [
  "T'es sûr ?",
  "Tu veux vraiment pas de moi ?",
  "Ohww! Vraiment ?",
  "Tu me brises le cœur 💔",
  "Bon... je disparais 😢"
];

function moveNoButton() {
  const x = Math.floor(Math.random() * 200 - 100);
  const y = Math.floor(Math.random() * 200 - 100);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

yesBtn.addEventListener("click", () => {
  if (noDisappeared) {
    message.textContent = "Je savais que tu m'aimais trop ❤️";
    yesBtn.classList.add("grow");
    setTimeout(() => {
      window.location.href = "yes.html";
    }, 1500);
    return;
  }

  if (yesClicks < yesMessages.length - 1) {
    message.textContent = yesMessages[yesClicks];
    yesClicks++;
  } else {
    message.textContent = yesMessages[yesClicks];
    yesBtn.classList.add("grow");
    setTimeout(() => {
      window.location.href = "yes.html";
    }, 1500);
  }
});

noBtn.addEventListener("click", () => {
  if (noClicks < noMessages.length - 1) {
    message.textContent = noMessages[noClicks];
    moveNoButton();
    noClicks++;
  } else {
    message.textContent = noMessages[noClicks];
    noBtn.classList.add("fade-out");
    yesBtn.classList.add("grow");
    noDisappeared = true;
    setTimeout(() => {
      message.textContent = "Tu peux maintenant me dire oui 😘";
    }, 1500);
  }
});