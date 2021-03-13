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
	let isScrolling = false;

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
				_offset = 0;

				break;
			default:
				_offset = 100;
		}

		isScrolling = true;
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
					const active_link = $('nav a[href="#' + _id + '"]');
					navigation_links.parent().removeClass('current');
					active_link.parent().addClass('current');
					isScrolling = false;
				},
			);
	});

	/*----------------------------------------------------*/
	/* Highlight the current section in the navigation bar
------------------------------------------------------*/

	const sections = $('section');
	const navigation_links = $('nav a');

	sections.waypoint({
		handler: function (direction) {
			if (isScrolling) return;

			let active_section = $(this);
			if (direction === 'up') active_section = active_section.prev();

			if (active_section.attr('id') !== undefined) {
				const active_link = $('nav a[href="#' + active_section.attr('id') + '"]');
				navigation_links.parent().removeClass('current');
				active_link.parent().addClass('current');
			}
		},
		offset: '35%',
	});

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

		if (y > h * 0.2 && y < h && $(window).outerWidth() > 768) {
			nav.fadeOut('fast');
		} else {
			if (y < h * 0.2) {
				nav.removeClass('opaque').fadeIn('fast');
			} else {
				nav.addClass('opaque').fadeIn('fast');
			}
		}
	});

	/*----------------------------------------------------*/
	/*	Modal Popup
------------------------------------------------------*/

	$('.item-wrap a').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		removalDelay: 200,
		showCloseBtn: false,
		mainClass: 'mfp-fade',
	});

	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
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
