/* eslint-disable no-undef */
/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

jQuery(document).ready(function ($) {
	/*----------------------------------------------------*/
	/* FitText Settings
------------------------------------------------------ */

	setTimeout(function () {
		$('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
	}, 100);

	/*----------------------------------------------------*/
	/* Smooth Scrolling
------------------------------------------------------ */
	const id_Change = new CustomEvent('id_change', {
		detail: { id: () => window.current_id },
	});
	let active_id = null;
	let last_id = null;

	$('.smoothscroll').on('click', function (e) {
		e.preventDefault();

		let target = this.hash,
			$target = $(target),
			_offset = 100;

		const _id = $target.attr('id');
		if (_id === undefined) return;

		switch (_id.toString().toLowerCase()) {
			case 'home':
			case 'about':
			case 'bottom':
				_offset = 0;

				break;
			default:
				_offset = 100;
		}

		if (active_id !== 'gallery') last_id = active_id;
		window.current_id = _id;
		window.dispatchEvent(id_Change);

		$('html, body')
			.stop()
			.animate(
				{
					scrollTop: $target.offset().top - _offset,
				},
				800,
				'swing',
				function () {
					const element = document.getElementById(_id);
					const active_link = document.getElementById(`nav-${_id}`);
					if (element !== undefined && active_link !== undefined && active_link !== null && element.id !== active_id) {
						active_id = element.id;
						navigation_links.parent().removeClass('current');
						active_link.classList.add('current');
					}
				},
			);
	});

	/*----------------------------------------------------*/
	/* Highlight the current section in the navigation bar
------------------------------------------------------*/
	const navigation_links = $('nav a');

	/*----------------------------------------------------*/
	/*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

	$('header').css({ height: $(window).height() });
	$(window).on('resize', function () {
		$('header').css({ height: $(window).height() });
		$('body').css({ width: $(window).width() });
	});

	/*----------------------------------------------------*/
	/*	Fade In/Out Primary Navigation
------------------------------------------------------*/

	$(window).on('scroll', function () {
		const h = $('header').height();
		const y = $(window).scrollTop();
		const nav = $('nav');

		if (y > h * 0.2 && y + 40 < h && $(window).outerWidth() > 768) {
			nav.fadeOut('fast');
		} else {
			if (y < h * 0.2) {
				nav.removeClass('opaque').fadeIn('fast');
			} else {
				nav.addClass('opaque').fadeIn('fast');
			}
		}
	});

	window.addEventListener('nav-reset', () => {
		if (active_id === 'gallery') {
			const active_link = document.getElementById(`nav-${last_id}`);
			if (active_link !== undefined && active_link !== null) {
				active_id = active_link.id;
				navigation_links.parent().removeClass('current');
				active_link.classList.add('current');
			}
		}
	});

	/*----------------------------------------------------*/
	/*	Modal Popup
------------------------------------------------------*/
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
	});

	/*----------------------------------------------------*/
	/*	Flexslider
/*----------------------------------------------------*/
	$('.flexslider').flexslider({
		namespace: 'flex-',
		controlsContainer: '.flex-container',
		animation: 'slide',
		controlNav: true,
		directionNav: false,
		smoothHeight: true,
		slideshowSpeed: 7000,
		animationSpeed: 600,
		randomize: false,
	});
});
