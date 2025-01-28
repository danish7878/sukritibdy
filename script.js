// script.js
function openMessage() {
  const popup = document.querySelector('.popup');
  const balloons = document.querySelector('.floating-balloons');

  popup.classList.remove('hidden'); // Show popup
  balloons.classList.remove('hidden'); // Start balloons animation

  // Automatically hide balloons after 5 seconds
  setTimeout(() => {
    balloons.classList.add('hidden');
  }, 5000);
}