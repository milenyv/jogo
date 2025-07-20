const actions = [
  "💋 Beijo ardente",
  "🔥 Toque misterioso",
  "👄 Sussurre algo sujo",
  "💌 Confissão íntima",
  "🧼 Massagem sensual por 1 min",
  "🎲 Desafio Quente: Lamba o lóbulo da orelha",
  "🌶️ Desafio Picante: Simule um beijo de língua sem tocar",
  "🔥🔥 Desafio Extremo: Tire uma peça lentamente",
  "🎭 Interprete um papel sexy por 1 minuto",
  "🍑 Sentar no colo e provocar",
  "🫦 Beije até arrepiar",
  "👀 Olhar dominante e diga “agora é minha vez”"
];

const wheel = document.getElementById('wheel');
const actionDiv = document.getElementById('action');

let isSpinning = false;
let currentRotation = 0;

function spinWheel() {
  if (isSpinning) return;
  isSpinning = true;

  // Adiciona +360° a cada giro (mantendo a animação visível)
  currentRotation += 360;
  wheel.style.transform = `rotate(${currentRotation}deg)`;

  setTimeout(() => {
    const index = Math.floor(Math.random() * actions.length);
    actionDiv.textContent = actions[index];
    isSpinning = false;
  }, 1600);
}

wheel.addEventListener("click", spinWheel);
