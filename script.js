document.getElementById('tap-button').addEventListener('click', function () {
  const flap = document.querySelector('.flap');
  const message = document.querySelector('.message');
  const balloons = document.querySelector('.balloons');

  // Animate envelope opening
  flap.style.transform = 'rotateX(-180deg)';

  // Show the message card
  setTimeout(() => {
    message.classList.remove('hidden');
  }, 500);

  // Add balloons
  balloons.classList.remove('hidden');
  generateBalloons();
});

function generateBalloons() {
  const balloonsContainer = document.querySelector('.balloons');
  const colors = ['#ff6f61', '#6b5b95', '#88b04b', '#f7cac9', '#92a8d1'];

  for (let i = 0; i < 20; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.animationDelay = `${Math.random() * 2}s`;
    balloon.style.left = `${Math.random() * 100}%`;
    balloonsContainer.appendChild(balloon);
  }
}
