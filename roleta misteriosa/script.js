   const actions = [
      "Beijo ardente",
      "Toque misterioso",
      "Sussurre algo sujo",
      "Confissão íntima",
      "Massagem sensual por 1 min",
      "Lamba o lóbulo da orelha",
      "Beije e provoque com as mãos do outro amarradas",
      "Tire uma peça de roupa lentamente",
      "Interprete um papel sexy por 1 minuto",
      "Sentar no colo e provocar",
      "Beije até arrepiar",
      "Olhar dominante e diga “agora é minha vez e faça o que quiser por 15 segundos”",
      "Tire uma peça de roupa do parceiro e passe a língua onde quiser",
      "Beije vendado",
      "Beijo o pescoço",
      "Arranhe as costas",
      
    ];

    const wheel = document.getElementById('wheel');
    const actionDiv = document.getElementById('action');

    let shuffledActions = [];
    let currentIndex = 0;
    let isSpinning = false;
    let currentRotation = 0;

    function shuffle(array) {
      const copied = [...array];
      for (let i = copied.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copied[i], copied[j]] = [copied[j], copied[i]];
      }
      return copied;
    }

    function spinWheel() {
      if (isSpinning) return;
      isSpinning = true;

      currentRotation += 360; // rotação com variação
      wheel.style.transform = `rotate(${currentRotation}deg)`;

      setTimeout(() => {
        // Embaralha se for a primeira vez ou já mostrou todas
        if (shuffledActions.length === 0 || currentIndex >= shuffledActions.length) {
          shuffledActions = shuffle(actions);
          currentIndex = 0;
        }

        const result = shuffledActions[currentIndex];
        actionDiv.textContent = result;
        currentIndex++;
        isSpinning = false;
      }, 1600);
    }

    wheel.addEventListener('click', spinWheel);
