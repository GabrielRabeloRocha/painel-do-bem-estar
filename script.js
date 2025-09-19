// Dicionário de mensagens e imagens por humor
const dadosHumor = {
    feliz: {
      mensagens: [
        "Continue espalhando sua luz e alegria! 🌞",
        "A felicidade é contagiante, compartilhe a sua! 😃",
        "Sorria, porque seu sorriso ilumina o dia! 🌟"
      ],
      imagens: [
        "https://th.bing.com/th/id/R.2b0f32be826b9157b9d9698904774bc9?rik=I%2bt4KRPopcbfjg&pid=ImgRaw&r=0",
        "https://i.imgur.com/2DhmtJ4.png",
        "https://i.imgur.com/fHyEMsl.png"
      ]
    },
    triste: {
      mensagens: [
        "Tudo passa, até os dias nublados. 🌦️",
        "Você é mais forte do que imagina. 💪",
        "Permita-se sentir, mas lembre-se: dias melhores virão. 🌈"
      ],
      imagens: [
        "https://th.bing.com/th/id/R.2b0f32be826b9157b9d9698904774bc9?rik=I%2bt4KRPopcbfjg&pid=ImgRaw&r=0",
        "https://i.imgur.com/X3Y7xLZ.png",
        "https://i.imgur.com/mQ8I9G9.png"
      ]
    },
    ansioso: {
      mensagens: [
        "Respire fundo, você está no controle. 🌬️",
        "Passo a passo, tudo vai se resolver. 🧘",
        "Acalme sua mente, um dia de cada vez. ⏳"
      ],
      imagens: [
        "https://i.imgur.com/NFz2OJ6.png",
        "https://i.imgur.com/YY4Z5g9.png",
        "https://i.imgur.com/3QhP7pO.png"
      ]
    }
  };
  
  // Captura elementos
  const form = document.getElementById("form-humor");
  const inputHumor = document.getElementById("humor");
  const resultado = document.getElementById("resultado");
  const btnMensagem = document.getElementById("btn-mensagem");
  const divMensagem = document.getElementById("mensagem");
  const divImagem = document.getElementById("imagem");
  
  let humorAtual = localStorage.getItem("humor") || "";
  
  // Exibir humor salvo no LocalStorage ao carregar
  if (humorAtual) {
    resultado.textContent = `Seu humor registrado anteriormente: ${humorAtual}`;
  }
  
  // Evento de registrar humor
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    humorAtual = inputHumor.value.trim().toLowerCase();
  
    if (humorAtual) {
      localStorage.setItem("humor", humorAtual);
      resultado.textContent = `Você registrou: ${humorAtual}`;
      divMensagem.textContent = "";
      divImagem.innerHTML = "";
    }
  });
  
  // Evento para exibir mensagem motivacional
  btnMensagem.addEventListener("click", () => {
    if (!humorAtual) {
      divMensagem.textContent = "Por favor, registre seu humor primeiro. 🙂";
      return;
    }
  
    if (dadosHumor[humorAtual]) {
      const mensagens = dadosHumor[humorAtual].mensagens;
      const imagens = dadosHumor[humorAtual].imagens;
  
      // Sorteio
      const index = Math.floor(Math.random() * mensagens.length);
  
      divMensagem.textContent = mensagens[index];
      divImagem.innerHTML = `<img src="${imagens[index]}" alt="Imagem relacionada ao humor">`;
    } else {
      divMensagem.textContent = "Humor não reconhecido. Tente palavras como: feliz, triste ou ansioso. 🙂";
      divImagem.innerHTML = "";
    }
  });

  

