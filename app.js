// const d = document;
// const $map = d.querySelector('.map');
// const $ball = d.querySelector('.ball');
// let posX = 0;
// let posY = 0;
// const FPS = 10;
// let speedX = 5;
// let speedY = 5;
// function moveBall(e) {
// 	if (posX < 560) {
// 		if (e.key === 'ArrowRight') {
// 			posX += speedX;
// 			posY += speedY;
// 		}
// 	}
// 	if (posX >= 10) {
// 		if (e.key === 'ArrowLeft') {
// 			posX -= speedX;
// 			posY -= speedY;
// 		}
// 	}

// 	$ball.style.left = `${posX}px`;
// 	$ball.style.top = `${posX}px`;
// 	console.log($ball.style.left, $ball.style.top, '-------------');
// }
// d.addEventListener('keydown', moveBall);

// function moveBall(e) {
// 	setInterval(() => {
// 		// if (posX + $ball.clientWidth >= $map.clientWidth || posX <= -1) {
// 		// 	xSpeed = -xSpeed;
// 		// }
// 		// if (posY + $ball.clientHeight >= $map.clientHeight || posY <= -1) {
// 		// 	speedY = -speedY;
// 		// }
// 		// if (posY + $ball.clientHeight >= $map.clientHeight || posY <= -1) {
// 		// 	speedY = -speedY;
// 		// }

// 		// if (posX + $ball.clientWidth >= $map.clientWidth || posX <= -1) {
// 		// 	posX = -speedX;
// 		// }
// 		// if (posX >= $map.clientWidth) {
// 		// 	posY = -speedY;

// 		// }
// 		posX += speedX;
// 		posY += speedY;
// 		$ball.style.left = `${posX}px`;
// 		$ball.style.top = `${posX}px`;
// 	}, 1000 / FPS);
// }
// moveBall();

const section = document.querySelector('.map');
const logo = document.querySelector('.ball');
const FPS = 15;

// Logo moving velocity Variables
let xPosition = 0;
let yPosition = 0;
let xSpeed = 4;
let ySpeed = 4;

setInterval(() => {
	if (xPosition + logo.clientWidth >= section.clientWidth || xPosition <= -1) {
		xSpeed = -xSpeed;
	}
	if (
		yPosition + logo.clientHeight >= section.clientHeight ||
		yPosition <= -1
	) {
		ySpeed = -ySpeed;
	}

	xPosition += xSpeed;
	yPosition += ySpeed;
	logo.style.left = xPosition + 'px';
	logo.style.top = yPosition + 'px';
}, 1000 / FPS);
