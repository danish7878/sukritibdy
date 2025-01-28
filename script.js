document.getElementById('tap-button').addEventListener('click', function() {
  const envelope = document.querySelector('.envelope');
  const flap = document.querySelector('.envelope-flap');
  const messageContainer = document.querySelector('.message-container');
  const balloonsContainer = document.querySelector('.balloons');

  // Animate envelope opening
  flap.style.transform = 'rotateX(-180deg)';
  envelope.style.transform = 'translateY(-20px)';

  // Show message after envelope opens
  setTimeout(() => {
    messageContainer.style.opacity = '1';
    messageContainer.classList.remove('hidden');
  }, 500);

  // Release balloons
  setTimeout(() => {
    balloonsContainer.classList.remove('hidden');
    releaseBalloons();
  }, 700);
});

function releaseBalloons() {
  const balloonsContainer = document.querySelector('.balloons');
  const colors = ['#ff6f61', '#6b5b95', '#88b04b', '#f7cac9', '#92a13
