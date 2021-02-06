const menuSlide = () => {
	const hamburger = document.querySelector('.hamburger');
	const nav = document.querySelector('.menu');

	hamburger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');

		hamburger.classList.toggle('nav-close'); 
	});
}

menuSlide(); 