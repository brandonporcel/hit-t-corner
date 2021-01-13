const d = document;
const $map = d.querySelector('.map');
const $ball = d.querySelector('.object');
const FPS = 50;
let posX = 0;
let posY = 0;
let speedX = 5;
let speedY = 5;

setInterval(() => {
	// 270 "yyy"
	// -5 "yyy"
	// 570 "xxxx"
	// 270 "yyy"
	// -5 "yyy"
	// -5 "xxxx"
	// 270 "yyy"
	// -5 "yyy"
	// 570 "xxxx"

	// se va 1px,por eso el >=
	if (posX + $ball.clientWidth >= $map.clientWidth) {
		speedX = -speedX;
	}
	// cuando toca el borde izquierda
	// son 570(el mapa mide 600,el coso 30px) derecha, -5(no entiendo por qué) izquierda
	if (posX <= -1) {
		speedX = -speedX;
	}

	if (posY + $ball.clientHeight === $map.clientHeight) {
		speedY = -speedY;
	}
	// cuando toca el borde de arriba
	// son 270 abajo, -5(no entiendo por qué) arriba
	if (posY <= -1) {
		speedY = -speedY;
	}

	posX += speedX;
	posY += speedY;
	$ball.style.left = `${posX}px`;
	$ball.style.top = `${posY}px`;
}, 1000 / FPS);
