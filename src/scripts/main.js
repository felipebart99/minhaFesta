AOS.init();

function updateCountdown() {
  const today = new Date(); // Data e hora atuais
  const birthday = new Date(2024, 11, 30, 0, 0, 0); // 30/12/2024 à meia-noite

  // Calcula a diferença em milissegundos
  const differenceInMs = birthday - today;

  if (differenceInMs < 0) {
    document.getElementById("countdown").textContent = "O evento já passou";
    return;
  }

  // Converte milissegundos para dias, horas, minutos e segundos
  const days = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (differenceInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((differenceInMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((differenceInMs % (1000 * 60)) / 1000);

  // Atualiza o conteúdo da página
  document.getElementById(
    "countdown"
  ).textContent = `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

// Atualiza o contador a cada segundo
setInterval(updateCountdown, 1000);

// Chamada inicial para exibir imediatamente
updateCountdown();
