const actions = ["Beijar", "Lamber", "Chupar", "Sussurrar", "Morder", "Massagear", "Estimular", "Usar brinquedo", "Você decide"];
    const parts = ["Boca", "Pescoço", "Seios", "Coxas", "Vagina", "Pênis", "Clitóris", "Orelha", "Bumbum", "Você escolhe"];

    function spin(type) {
      const el = type === 'action' ? document.getElementById('actionWheel') : document.getElementById('bodyWheel');
      const list = type === 'action' ? actions : parts;
      const item = list[Math.floor(Math.random() * list.length)];
      el.textContent = item;
    }