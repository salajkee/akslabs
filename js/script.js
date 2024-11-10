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

try {
	const phoneInput = document.querySelector('#phone');
	const phoneMask = new IMask(phoneInput, {
		mask: '00 000-00-00',
	});
} catch (e) {}
