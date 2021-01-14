const d = document;
const $map = d.querySelector('.map');
const $ball = d.querySelector('.object');
// este si podes cambiar
const FPS = 70;
// no cambiar
let posX = 0;
let posY = 0;
let speedX = 5;
let speedY = 5;

const addShadow = (side) => {
	$ball.classList.remove('left');
	$ball.classList.remove('right');
	$ball.classList.remove('top');
	$ball.classList.remove('bottom');
	$ball.classList.add(side);
};
const styles = [
	{
		background: 'pink',
		object: 'violet',
	},
	{
		background: 'ghostwhite',
		object: 'white',
	},
	{
		background: 'yellow',
		object: 'pink',
	},
	{
		background: 'violet',
		object: 'yellow',
	},
];
let randomNumber;
const getStyle = () => {
	randomNumber = Math.floor(Math.random() * styles.length);
};
const changeStyles = () => {
	getStyle();
	$map.style.backgroundColor = styles[randomNumber].background;
	$ball.style.backgroundColor = styles[randomNumber].object;
};
setInterval(() => {
	// se va 1px,por eso el >=
	if (posX + $ball.clientWidth >= $map.clientWidth) {
		speedX = -speedX;
		addShadow('right');
		changeStyles();
	}
	// cuando toca el borde izquierda
	// son 570(el mapa mide 600,el coso 30px) derecha, -5(no entiendo por qué) izquierda
	else if (posX <= -1) {
		speedX = -speedX;
		addShadow('left');
		changeStyles();
	}
	if (posY + $ball.clientHeight === $map.clientHeight) {
		speedY = -speedY;
		addShadow('bottom');
		changeStyles();
	}
	// cuando toca el borde de arriba
	// son 270 abajo, -5(no entiendo por qué) arriba
	else if (posY <= -1) {
		speedY = -speedY;
		addShadow('top');
		changeStyles();
	}

	posX += speedX;
	posY += speedY;
	$ball.style.left = `${posX}px`;
	$ball.style.top = `${posY}px`;
}, 1000 / FPS);
