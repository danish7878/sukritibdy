function openEnvelope() {
  const envelope = document.querySelector('.envelope');
  const flap = document.querySelector('.envelope-flap');
  const messageContainer = document.querySelector('.message-container');
  const balloons = document.querySelector('.balloons');

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
    balloons.classList.remove('hidden');
  }, 700);
}
