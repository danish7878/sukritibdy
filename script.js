// script.js
document.addEventListener('DOMContentLoaded', () => {
    const balloonContainer = document.querySelector('.balloons');
    const colors = ['#FF69B4', '#FF4500', '#FFD700', '#ADFF2F', '#1E90FF', '#DA70D6'];

    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.animationDelay = `${Math.random() * 5}s`;
        balloonContainer.appendChild(balloon);
    }
});
