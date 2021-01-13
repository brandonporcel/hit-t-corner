const d = document;
const $map = d.querySelector('.map');
const $ball = d.querySelector('.ball');
const FPS = 15;
let posX = 0;
let posY = 0;
let speedX = 5;
let speedY = 5;

setInterval(() => {
	if (posX + $ball.clientWidth >= $map.clientWidth || posX <= -1) {
		speedX = -speedX;
	}

	if (posY + $ball.clientHeight >= $map.clientHeight || posY <= -1) {
		speedY = -speedY;
	}

	posX += speedX;
	posY += speedY;
	$ball.style.left = `${posX}px`;
	$ball.style.top = `${posY}px`;
}, 1000 / FPS);
