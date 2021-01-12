const d = document;
const $map = d.querySelector('.map');
const $ball = d.querySelector('.ball');
let posX = 0;
let posY = 0;
let speedX = 25;
let speedY = 25;
function moveBall(e) {
	if (posX < 560) {
		if (e.key === 'ArrowRight') {
			posX += speedX;
			posY += speedY;
		}
	}
	if (posX >= 10) {
		if (e.key === 'ArrowLeft') {
			posX -= speedX;
			posY -= speedY;
		}
	}

	$ball.style.left = `${posX}px`;
	$ball.style.top = `${posX}px`;
	console.log($ball.style.left, $ball.style.top, '-------------');
}
d.addEventListener('keydown', moveBall);
