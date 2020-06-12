export default function Slider() {
	let dots = document.querySelectorAll('.dots'),
		slides = document.querySelectorAll('.featured-dishes__cards__item'),
		index = 0,
		currentDot = 0,
		interval;

	let startInterval = () => {
		interval = setInterval(() => {
			dots[currentDot].click();
			if (currentDot === dots.length - 1) {
				currentDot = 0;
			} else {
				currentDot++;
			}
		}, 2500);
	};

	startInterval();

	dots.forEach((item, dotIndex) => {
		item.addEventListener('click', () => {
			clearInterval(interval);
			if (dotIndex !== index) {
				dots[index].classList.remove('active');
				dots[dotIndex].classList.add('active');
				index = dotIndex;
				currentDot = index;

				slides.forEach((item, slideIndex) => {
					const transformDistantion = 1160 * dotIndex;
					item.style.transform = `translateX(-${transformDistantion}px)`;
				});
			}
			startInterval();
		});
	});
}
