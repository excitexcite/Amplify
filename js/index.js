const iconMenu = document.querySelector('.burger-icon');
const menu = document.querySelector('.nav');

if (iconMenu) {
	console.log(menu.backgroundColor);
	iconMenu.addEventListener('click', function (event) {
		toggleBurgerInteractionClasses();
		// if (navScrollHidderSet) {
		// 	menu.style.setProperty('--nav-mobile', 'none');
		// 	navScrollHidderSet = false;
		// } else {
		// 	menu.style.setProperty('--nav-mobile', '#131316');
		// 	navScrollHidderSet = true;
		// }
	});
}

function toggleBurgerInteractionClasses() {
	// document.body.classList.toggle('scroll-lock')
	iconMenu.classList.toggle('burger-icon--active');
	menu.classList.toggle('nav--active');
}

$(document).ready(function () {

	var scrollLink = $('.scroll');

	// Smooth scrolling
	scrollLink.click(function (e) {
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top
		}, 1000);

		if (iconMenu.classList.contains('burger__icon--active')) {
			toggleBurgerInteractionClasses();
			// menu.style.setProperty('--nav-mobile', 'none');
		}
	});

	// Active link switching
	$(window).scroll(function () {
		var scrollbarLocation = $(this).scrollTop();

		scrollLink.each(function () {

			var sectionOffset = $(this.hash).offset().top;

			if (sectionOffset <= scrollbarLocation) {
				$(this).parent().addClass('nav__list-item--active');
				$(this).parent().siblings().removeClass('nav__list-item--active');
			}
		});


	});
});

const headerNavBackground = document.querySelector('.header__top');
const headerSection = document.querySelector('.header__content');

const headerSectionOptions = {
	rootMargin: "-850px 0px 0px 0px"
};

const headerSectionObserver =
	new IntersectionObserver(function (entries, headerSectionObserver) {
		entries.forEach(entry => {
			if (!entry.isIntersecting) {
				headerNavBackground.classList.add('sticky');
			} else {
				headerNavBackground.classList.remove('sticky');
			}
		});
	}, headerSectionOptions);

headerSectionObserver.observe(headerSection);

$(document).ready(function () {
	$('.work__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		infinite: true,
		initialSlide: 0,
		arrows: false,
		dots: true,
		zIndex: 10,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToScroll: 3,
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToScroll: 4,
					slidesToShow: 4,
				}
			},
		]
	});
});


$(document).ready(function () {
	$('.services__slider').slick({
		slidesToShow: 1,
		variableWidth: true,
		infinite: true,
		initialSlide: 0,
		arrows: false,
		dots: true,
		zIndex: 10,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 4,
				}
			},
		]
	});
});
