/* styles.css */
body, html {
  margin: 0;
  padding: 0;
  font-family: 'Courier New', cursive;
  height: 100%;
  overflow: hidden;
}

.container {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #f8c0ff, #ff69b4);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://wallpaperaccess.com/full/3895455.jpg') no-repeat center/cover;
  z-index: -1;
  opacity: 0.6;
}

/* Balloons */
.balloons {
  position: relative;
  height: 30%;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.balloon {
  width: 80px;
  height: 100px;
  background: #ff6f61;
  border-radius: 50%;
  animation: float 5s ease-in-out infinite;
  position: relative;
}

.balloon::before {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  width: 2px;
  height: 80px;
  background: #000;
  transform: translateX(-50%);
}

@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}

/* Bottom Section */
.bottom {
  position: relative;
  width: 100%;
  text-align: center;
  margin-top: 50px;
}

.cake {
  width: 200px;
  height: auto;
}

.name {
  font-size: 2em;
  color: #fff;
  text-shadow: 2px 2px 4px #000;
  margin-top: 10px;
}

.envelope {
  width: 150px;
  height: 100px;
  background: #f2f2f2;
  border: 2px solid #ff69b4;
  margin: 20px auto;
  cursor: pointer;
  border-radius: 10px;
  position: relative;
}

.envelope p {
  font-size: 1.2em;
  color: #ff69b4;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Message Section */
.message {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: center;
  display: none;
}

.message img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 10px 0;
}

.message h1 {
  font-size: 2.5em;
  color: #ff69b4;
  margin-bottom: 10px;
}

.message p {
  font-size: 1.2em;
  color: #555;
}