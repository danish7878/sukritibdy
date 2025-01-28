/* General Styles */
body, html {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  overflow: hidden;
}

.container {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #ffecd2, #fcb69f);
}

/* Background Animation */
.background {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('path_to_background_image.jpg') no-repeat center center/cover;
  animation: backgroundAnimation 10s infinite alternate;
  z-index: -1;
}

@keyframes backgroundAnimation {
  0% { filter: brightness(1); }
  100% { filter: brightness(0.8); }
}

/* Envelope Styles */
.envelope-container {
  position: relative;
  cursor: pointer;
}

.envelope {
  width: 200px;
  height: 150px;
  background: #fff;
  border: 2px solid #ff69b4;
  border-radius: 10px;
  position: relative;
  transition: transform 0.5s;
}

.envelope-flap {
  width: 100%;
  height: 50%;
  background: #ff69b4;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: top;
  transition: transform 0.5s;
}

.envelope-body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.envelope-body p {
  font-size: 1.2em;
  color: #ff69b4;
  font-weight: bold;
}

/* Message Card Styles */
.message-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 500px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.5s;
}

.message-card h1 {
  font-size: 2em;
  color: #ff69b4;
}

.message-card img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 20px 0;
}

.message-card p {
  font-size: 1.2em;
  color: #333;
}

/* Balloon Animation */
.balloons {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  animation: riseUp 5s infinite;
}

@keyframes riseUp {
  0% { transform: translateY(100%); }
  100% { transform: translateY(-100%); }
}

.balloon {
  width: 50px;
  height: 70px;
  background: #ff6f61;
  border-radius: 50%;
  position: relative;
}

.balloon::after {
  content: '';
  width: 2px;
  height: 20px;
  background: #333;
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
}

/* Utility Classes */
.hidden {
  display: none;
}
