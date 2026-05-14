// 🌟 STARS
const stars = document.getElementById("stars");

for (let i = 0; i < 180; i++) {
  const star = document.createElement("div");
  star.classList.add("star");

  const size = Math.random() * 3;

  star.style.width = size + "px";
  star.style.height = size + "px";

  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";

  star.style.animationDuration = (Math.random() * 4 + 1) + "s";

  stars.appendChild(star);
}

// 🩸 BLOOD DROPS
const blood = document.getElementById("blood");

for (let i = 0; i < 40; i++) {
  const drop = document.createElement("div");
  drop.classList.add("drop");

  drop.style.left = Math.random() * 100 + "vw";
  drop.style.animationDuration = (Math.random() * 3 + 2) + "s";

  blood.appendChild(drop);
}

// 🔊 SOUND
function playSound(){
  document.getElementById("rockAudio").play();
}

// ☠ MESSAGE
function showMessage(){

  const phrases = [
    "Algo está olhando para você no espaço vazio...",
    "Nunca confie no silêncio do universo.",
    "O medo vive entre as estrelas.",
    "O vazio respira devagar...",
    "Você não está sozinho aqui."
  ];

  const random = phrases[Math.floor(Math.random() * phrases.length)];

  document.getElementById("message").innerText = random;
}