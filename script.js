const focusText = document.querySelector('.focus-text');
const bgImage = document.querySelector('.bg-image');

// Ativa o efeito APENAS ao entrar na palavra
focusText.addEventListener('mouseenter', () => {
  focusText.classList.add('active');
  bgImage.classList.add('active');
});

// Volta ao normal IMEDIATAMENTE ao sair da palavra
focusText.addEventListener('mouseleave', () => {
  focusText.classList.remove('active');
  bgImage.classList.remove('active');
});