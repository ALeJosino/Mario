const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const reload_ = document.querySelector('.reload');
let points = document.querySelector('.points');

const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
}

const loop = setInterval(() => {

  // console.log('loop');

  const pipePosition = pipe.offsetLeft;
  const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');
  // console.log(marioPosition);
  // console.log(pipePosition);

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './img/game-over.png'
    mario.style.width = '75px';
    mario.style.left = '42px';

    clearInterval(loop);
    reload_.style.display = 'block';
  }
}, 20)

function reload() {
  window.location.reload(true);
}

let pontuacao = 0;
// Atualize a pontuação ao pressionar a tecla espaço
const updatePoints = (event) => {
  if (event.key === " ") {
    pontuacao++;
    points.textContent = pontuacao;
  }
};
document.addEventListener('keydown', jump);
document.addEventListener('keydown', updatePoints);
document.addEventListener('touchend', jump);