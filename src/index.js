let cards = document.querySelectorAll('.card');

function rotateCards() {
	let angle = 0;

	cards.forEach((card, index) => {
		if (card.classList.contains('away')) {
            //fly the card off screen and rotate
            card.style.transform = `translateY(-120vh) rotate(-48deg)`;
		} else {
            //initial card position
			card.style.transform = `rotate(${angle}deg)`;
			angle = angle - 10;

			card.style.zIndex = cards.length - index;
		}
	});
}

let stackArea = document.querySelector('.stack-area');

window.addEventListener("scroll", () => {
	// set number to (50vh) - card animation starts when the section is halfway up the screen instead of when it's just barely visible.
	let distance = window.innerHeight / 2;

    //gets the vertical distance between the top of .stack-area and the top of the viewport (visible part of screen right now).
	let topVal = stackArea.getBoundingClientRect().top;

	// make index numbers positive by multiplying with -1 so we can loop over, and add + 1 so the scroll effect doesn't trigger once the section appears
	let index = Math.floor(-1 * (topVal / distance + 1));

	for (let i = 0; i < cards.length; i++) {
		if (i <= index) {
			cards[i].classList.add('away');
		} else {
			cards[i].classList.remove('away');
		}
	}

    rotateCards()
});
