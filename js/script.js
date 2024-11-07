// Hamburger menu
try {
	const hamburger = document.querySelector('.hamburger');
	const headerMenu = document.querySelector('.nav');
	const navLinks = document.querySelectorAll('.nav-link');

	hamburger.addEventListener('click', () => {
		if (!headerMenu.classList.contains('nav--active')) {
			hamburger.classList.add('hamburger--active');
			headerMenu.classList.add('nav--active');
			document.body.classList.add('no-scroll');
		} else {
			hamburger.classList.remove('hamburger--active');
			headerMenu.classList.remove('nav--active');
			document.body.classList.remove('no-scroll');
		}
	});

	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			hamburger.classList.remove('hamburger--active');
			headerMenu.classList.remove('nav--active');
			document.body.classList.remove('no-scroll');
		});
	});
} catch (e) {}
