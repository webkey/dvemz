/**
 * !js scroll page lock
 * */
var docElem = window.document.documentElement,
	didScroll,
	scrollPosition;

function noScrollFn() {
	window.scrollTo( scrollPosition ? scrollPosition.x : 0, scrollPosition ? scrollPosition.y : 0 );
}

function noScroll() {
	if($('.main-sections-js').length) {
		$.fn.fullpage.setAllowScrolling(false); // if has fullpage js
	}
	window.removeEventListener( 'scroll', scrollHandler );
	window.addEventListener( 'scroll', noScrollFn );
}

function scrollFn() {
	window.addEventListener( 'scroll', scrollHandler );
}

function canScroll() {
	if($('.main-sections-js').length) {
		$.fn.fullpage.setAllowScrolling(true); // if has fullpage js
	}
	window.removeEventListener( 'scroll', noScrollFn );
	scrollFn();
}

function scrollHandler() {
	if( !didScroll ) {
		didScroll = true;
		setTimeout( function() { scrollPage(); }, 60 );
	}
}

function scrollPage() {
	scrollPosition = { x : window.pageXOffset || docElem.scrollLeft, y : window.pageYOffset || docElem.scrollTop };
	didScroll = false;
}

scrollFn();
/*js scroll page lock end*/

/**
 * !cookie
 * */
function setCookie(name, value, options) {
	// https://learn.javascript.ru/cookie
	options = options || {};

	var expires = options.expires;

	if (typeof expires === "number" && expires) {
		var d = new Date();
		d.setTime(d.getTime() + expires * 1000);
		expires = options.expires = d;
	}
	if (expires && expires.toUTCString) {
		options.expires = expires.toUTCString();
	}

	value = encodeURIComponent(value);

	var updatedCookie = name + "=" + value;

	for (var propName in options) {
		updatedCookie += "; " + propName;
		var propValue = options[propName];
		if (propValue !== true) {
			updatedCookie += "=" + propValue;
		}
	}

	document.cookie = updatedCookie;
}

function getCookie(name) {
	// https://learn.javascript.ru/cookie
	var matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}
/*cookie end*/

var thisIsHomePage = $('.home-page').length;
var mediaTablet = 980;

/**
 * !resize only width
 * */
var resizeByWidth = true;

var prevWidth = -1;
$(window).resize(function () {
	var currentWidth = $('body').outerWidth();
	resizeByWidth = prevWidth !== currentWidth;
	if (resizeByWidth) {
		$(window).trigger('resizeByWidth');
		prevWidth = currentWidth;
	}
});
/*resize only width end*/

/**
 * !debouncedresize only width
 * */
var debouncedresizeByWidth = true;

var debouncedPrevWidth = -1;
$(window).on('debouncedresize', function () {
	var currentWidth = $('body').outerWidth();
	debouncedresizeByWidth = debouncedPrevWidth !== currentWidth;
	if (resizeByWidth) {
		$(window).trigger('debouncedresizeByWidth');
		debouncedPrevWidth = currentWidth;
	}
});
/*resize only width end*/

/**
 * !device detected
 * */
var DESKTOP = device.desktop();
//console.log('DESKTOP: ', DESKTOP);
var MOBILE = device.mobile();
//console.log('MOBILE: ', MOBILE);
var TABLET = device.tablet();
//console.log('MOBILE: ', MOBILE);
/*device detected end*/

/** !object fit images */
function objectFitInit() {
	var $someImages = $('.ea-promo-banners-js img');
	if($someImages.length) {
		objectFitImages($someImages);
	}
	var $productsImages = $('.products__list img');
	if($productsImages.length) {
		objectFitImages($productsImages);
	}
}

/**
 * !placeholder
 * */
function placeholderInit() {
	$('[placeholder]').placeholder();
}
/*placeholder end*/

/**
 * !toggle class for input on focus
 * */
function inputToggleFocusClass() {
	// use for the "focus" state
	var $fieldWrap = $('.field-effects-js');

	if ($fieldWrap.length) {
		var inputsAll = 'input[type="password"], input[type="email"], input[type="search"], :text, textarea, select';
		var _classFocus = 'input--focus';

		$fieldWrap.on('focus', inputsAll, function () {
			var $thisField = $(this);

			$thisField
				.closest('.input-wrap')
				.addClass(_classFocus);

		});

		$fieldWrap.on('blur', inputsAll, function () {
			var $thisField = $(this);

			$thisField
				.closest('.input-wrap')
				.removeClass(_classFocus);
		});
	}
}

function inputHasValueClass() {
	// use for the "has-value" state
	var $fieldWrap = $('.field-effects-js');

	if ($fieldWrap.length) {
		var inputsAll = 'input[type="password"], input[type="email"], input[type="search"], :text, textarea, select';
		var $inputsAll = $fieldWrap.find(inputsAll);
		var classHasValue = 'input--has-value';

		$.each($inputsAll, function () {
			switchHasValue.call(this);
		});

		// $inputsAll.on('change', function () {
		// 	switchHasValue.call(this);
		// });

		$fieldWrap.on('keyup change', inputsAll, function () {
			switchHasValue.call(this);
		});

		function switchHasValue() {
			var $currentField = $(this);
			var $currentFieldWrap = $currentField.closest('.input-wrap');

			//first element of the select must have a value empty ("")
			if ($currentField.val() === '') {
				$currentFieldWrap.removeClass(classHasValue);
			} else if (!$currentFieldWrap.hasClass(classHasValue)) {
				$currentFieldWrap.addClass(classHasValue);
			}
		}
	}
}

function inputFilledClass() {
	// use if the "focus" state and the "has-value" state are the same
	var $fieldWrap = $('.field-effects-js');

	if ($fieldWrap.length) {
		var $inputsAll = $fieldWrap.find('input[type="email"], input[type="search"], :text, textarea, select');
		var _classFilled = 'input--filled';

		$inputsAll.focus(function () {
			var $thisField = $(this);

			$thisField
				.closest($fieldWrap)
				.addClass(_classFilled);

		}).blur(function () {
			var $thisField = $(this);

			if ($thisField.val() === '') {
				$thisField
					.closest($fieldWrap)
					.removeClass(_classFilled);
			}
		});

		function switchHasValue() {
			var $currentField = $(this);
			var $currentFieldWrap = $currentField.closest($fieldWrap);

			$currentFieldWrap.removeClass(_classFilled);

			//first element of the select must have a value empty ("")
			if ($currentField.val() !== '') {
				$currentFieldWrap.addClass(_classFilled);
			}
		}

		$.each($inputsAll, function () {
			switchHasValue.call(this);
		});

		$inputsAll.on('change', function () {
			switchHasValue.call(this);
		});
	}
}
/*toggle class for input on focus end*/

/**
 * file input
 * */
function fileInput() {
	$('.upload-file').each(function () {
		$(this).filer({
			// limit: 3,
			changeInput: '' +
			'<div class="jFiler-input-dragDrop">' +
			'<div class="jFiler-input-inner">' +
			'<div class="jFiler-input-icon">' +
			'<i class="icon-jfi-cloud-up-o"></i>' +
			'</div>' +
			'<div class="jFiler-input-text">' +
			'<strong>Чтобы добавить файл, перетащите его сюда</strong>' +
			'</div>' +
			'</div>' +
			'</div>',
			showThumbs: true,
			theme: "dragdropbox",
			captions: {
				button: "Выберите файлы",
				feedback: "Выберите файлы для загрузки",
				feedback2: "Файлы выбраны",
				drop: "Чтобы добавить файл, перетащите его сюда",
				removeConfirmation: "Вы уверены, что хотите удалить этот файл?",
				errors: {
					filesLimit: "Максиальное количество файлов: {{fi-limit}}",
					filesType: "Загружать можно только изображения!",
					filesSize: "{{fi-name}} слишком велик! Пожалуйста, загрузите файл до {{fi-maxSize}} MB.",
					filesSizeAll: "Файлы, которые Вы выбрали слишком велики! Пожалуйста, загружайте файлы до {{fi-maxSize}} MB."
				}
			},
			templates: {
				box: '<ul class="jFiler-items-list jFiler-items-default list-reset"></ul>'
			},
			// captions: {
			// 	button: "Choose Files",
			// 	feedback: "Choose files To Upload",
			// 	feedback2: "files were chosen",
			// 	drop: "Drop file here to Upload",
			// 	removeConfirmation: "Вы уверены, что хотите удалить этот файл?",
			// 	errors: {
			// 		filesLimit: "Only {{fi-limit}} files are allowed to be uploaded.",
			// 		filesType: "Only Images are allowed to be uploaded.",
			// 		filesSize: "{{fi-name}} is too large! Please upload file up to {{fi-maxSize}} MB.",
			// 		filesSizeAll: "Files you've choosed are too large! Please upload files up to {{fi-maxSize}} MB."
			// 	}
			// },
			addMore: true,
			allowDuplicates: false,
			clipBoardPaste: true,
			dragDrop: {
				dragEnter: null,
				dragLeave: null,
				drop: null,
				dragContainer: null
			}
		});
	});
}
/*file input end end*/

/**
 * !print
 * */
function printShow() {
	$('.view-print').on('click', function (e) {
		e.preventDefault();
		window.print();
	})
}
/*print end*/

/**
 * !Multiselect init
 * */
function customSelect(select) {
	$.each(select, function () {
		var $thisSelect = $(this);
		var placeholder = $thisSelect.attr('data-placeholder') || '';
		$thisSelect.select2({
			language: "ru",
			width: '100%',
			containerCssClass: 'cselect-head',
			dropdownCssClass: 'cselect-drop',
			placeholder: placeholder
		});
	})
}
/* Multiselect init end */

/**
 * !sliders
 * */
function slidersInit() {
	//images carousel
	var $imagesCarousel = $('.images-slider');

	if($imagesCarousel.length){
		var slideCounterTpl = '' +
			'<div class="slider-counter">' +
				'<span class="slide-curr">0</span>/<span class="slide-total">0</span>' +
			'</div>';

		$imagesCarousel.each(function () {
			var $currentImagesCarousel = $(this);
			var $images = $currentImagesCarousel.find('.images-slider__list');
			var $titles = $currentImagesCarousel.find('.flashes');
			var dur = 200;

			$images.on('init', function (event, slick) {
				$(slick.$slider).append($(slideCounterTpl).clone());

				$('.slide-total', $(slick.$slider)).text(slick.$slides.length);
				$('.slide-curr', $(slick.$slider)).text(slick.currentSlide + 1);
			});

			$images.slick({
				fade: false,
				speed: dur,
				slidesToShow: 1,
				slidesToScroll: 1,
				asNavFor: $titles,
				// initialSlide: 2,
				lazyLoad: 'ondemand',
				infinite: true,
				dots: true,
				arrows: true
			}).on('beforeChange', function (event, slick, currentSlide, nextSlider) {
				$('.slide-curr', $(slick.$slider)).text(nextSlider + 1);
			});

			$titles.slick({
				fade: true,
				speed: dur,
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				asNavFor: $images,
				dots: false,
				arrows: false
			});

		});
	}

	//ea promo slider
	// var $eaStockSlider = $('.ea-promo-slider-js');
	//
	// if($eaStockSlider.length){
	// 	$eaStockSlider.each(function () {
	// 		var $currentSlider = $(this);
	// 		var $banners = $currentSlider.find('.ea-promo-banners-js');
	// 		var $thumbs = $currentSlider.find('.ea-promo-thumbs-js');
	// 		var dur = 300;
	// 		var auto = 6000;
	//
	// 		var bannersSlider = $banners.slick({
	// 			fade: true,
	// 			speed: dur,
	// 			slidesToShow: 1,
	// 			slidesToScroll: 1,
	// 			asNavFor: $thumbs,
	// 			// lazyLoad: 'ondemand',
	// 			infinite: true,
	// 			dots: false,
	// 			arrows: false,
	//
	// 			accessibility: true,
	// 			draggable: false,
	// 			swipe: false,
	// 			touchMove: false
	// 		});
	//
	// 		var slideLength = $thumbs.children('div').length;
	//
	// 		$thumbs.on('init', function (event, slick) {
	// 			var slides = slick.$slides;
	// 			$.each(slides, function (i, el) {
	// 				$(el).children('span').attr('data-index', i + 1);
	// 			})
	// 		});
	//
	// 		$thumbs.slick({
	// 			fade: false,
	// 			speed: dur,
	// 			slidesToShow: slideLength,
	// 			slidesToScroll: slideLength,
	// 			infinite: false,
	// 			asNavFor: $banners,
	// 			dots: false,
	// 			arrows: false,
	//
	// 			accessibility: false,
	// 			draggable: false,
	// 			swipe: false,
	// 			touchMove: false
	// 		});
	//
	// 		$thumbs.on('click', '.slick-slide', function () {
	// 			var index = $(this).index();
	// 			bannersSlider.slick('slickGoTo', index);
	// 		})
	//
	// 	});
	// }

	//ea main slider
	var $eaPromoSlider = $('.ea-main-slider-js');

	if($eaPromoSlider.length){
		$eaPromoSlider.each(function () {
			var $currentSlider = $(this);
			var dur = 300;

			$currentSlider.slick({
				// fade: true,
				speed: dur,
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				arrows: true,

				accessibility: true
				// draggable: false,
				// swipe: false,
				// touchMove: false
			});

		});
	}

	//ea stock slider
	var $eaStockSlider = $('.ea-stock-slider-js');

	if($eaStockSlider.length){
		$eaStockSlider.each(function () {
			var $currentSlider = $(this);
			var dur = 300;

			$currentSlider.slick({
				// fade: true,
				speed: dur,
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				dots: true,
				arrows: true,

				accessibility: true
				// draggable: false,
				// swipe: false,
				// touchMove: false
			});

		});
	}

	//share slider
	var $shareSlider = $('.share-slider-js');

	if($shareSlider.length){
		$shareSlider.each(function () {
			var $currentSlider = $(this);
			var dur = 300;

			$currentSlider.on('init', function (event, slick) {
				$(slick.$slides).matchHeight({
					byRow: true, property: 'height', target: null, remove: false
				});
			});

			$currentSlider.slick({
				fade: false,
				speed: dur,
				slidesToShow: 5,
				slidesToScroll: 5,
				// lazyLoad: 'ondemand',
				infinite: false,
				dots: false,
				arrows: true,
				responsive: [
					{
						breakpoint: 1600,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 4
						}
					},
					{
						breakpoint: 1440,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3
						}
					},
					{
						breakpoint: 1280,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 4
						}
					},
					{
						breakpoint: 960,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3
						}
					},
					{
						breakpoint: 660,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
				// appendArrows: $arrowsContainer
			});

		});
	}
}
/*sliders end*/

/**
 * !full page scroll
 * */
function fullPageInitial() {
	var $html = $('html');
	var prevBeforeSectionClass = 'fp-prev-before';
	var topClass = 'fp-is-top';
	var bottomClass = 'fp-is-bottom';
	// var prevSectionClass = 'fp-prev';
	var noAnimateClass = 'fp-no-animate';
	var timeout;

	/** main sections on home page */
	var $mainSections = $('.main-sections-js');
	if($mainSections.length) {
		$mainSections.fullpage({
			verticalCentered: false,
			// anchors: ['firstPage', 'secondPage', 'thirdPage'],
			// navigation: true,
			menu: '.scroll-nav-js',
			sectionSelector: '.main-section',
			scrollingSpeed: 1000,
			recordHistory: false,
			responsiveWidth: mediaTablet,
			onLeave: function (index, nextIndex, direction) {
				var $this = $(this);
				var $section = $this.parent().children();
				// var lengthPages = $section.length;

				$this.parent().removeClass('fp-down fp-up').addClass('fp-' + direction);

				$section.removeClass(prevBeforeSectionClass);
				$section.eq($this.index()).addClass(prevBeforeSectionClass);
				// console.log("currentIndex: ", index);
				// console.log("beforeIndex: ", $this.index());
				// console.log("thisIndex: ", $this.index());
				// console.log("nextIndex: ", nextIndex);

				// $section.addClass(prevBeforeSectionClass);
				// for(var i = 0; i < lengthPages; i++) {
				// 	if (i+1 >= nextIndex) {
				// 		$section.eq(i).removeClass(prevBeforeSectionClass);
				// 	}
				// }
				// if(nextIndex !== 0){
				// 	$.fn.fullpage.setAutoScrolling(false);
				// }
			},
			afterLoad: function (anchorLink, index) {
				var $this = $(this);
				var $section = $this.parent().children();

				$this.parent().addClass(noAnimateClass);
				// console.log('addClass "no-animate"');

				clearTimeout(timeout);

				timeout = setTimeout(function () {
					$this.parent().removeClass(noAnimateClass);
					// console.log('removeClass "no-animate"');
				}, 50);

				$section.removeClass(prevBeforeSectionClass);

				$html.removeClass(topClass);
				$html.removeClass(bottomClass);

				if(index === 1) {
					$html.addClass(topClass);
				}
				if(index === $section.length) {
					$html.addClass(bottomClass);
				}

				// $section.addClass(prevSectionClass);
				// for(var i = 0; i < lengthPages; i++) {
				// 	if (i+1 >= index) {
				// 		$section.eq(i).removeClass(prevSectionClass);
				// 	}
				// }
			}
			// , afterRender: function(){
			// 	var pluginContainer = $(this);
			// 	fullPageRespons();
			// }
		});
	}

	/** main sections on home page of ea site */
	// var $mainSectionsEA = $('.ea-main-sections-js');
	// if($mainSectionsEA.length) {
	// 	$mainSectionsEA.fullpage({
	// 		verticalCentered: false,
	// 		sectionSelector: '.ea-full-page-js',
	// 		scrollBar: true,
	// 		autoScrolling: false,
	// 		fitToSection: false,
	// 		css3: true,
	// 		scrollingSpeed: 1000,
	// 		recordHistory: false,
	// 		responsiveWidth: mediaTablet
	// 		, afterLoad: function (anchorLink, index) {
	// 			var $section = $(this).parent().children();
	//
	// 			$html.removeClass(topClass);
	// 			$html.removeClass(bottomClass);
	//
	// 			if(index === 1) {
	// 				$html.addClass(topClass);
	// 			}
	// 			if(index === $section.length) {
	// 				$html.addClass(bottomClass);
	// 			}
	// 		}
	// 	});
	// }

	$('.move-next-section-js').on('click', function (e) {
		e.preventDefault();

		$.fn.fullpage.moveSectionDown();
	});
}
/*full page scroll*/

/**
 * !change href
 * */
function changeHref($element) {

	if (window.innerWidth < mediaTablet) {
		getDataHref($element);
	} else {
		getDataAnchor($element);
	}

	function getDataHref($element) {
		if($element.attr('href') === $element.attr('data-href')) {
			return;
		}

		$.each($element, function () {
			var $curElement = $(this);

			$curElement.attr('href', $curElement.attr('data-href'));
		});
	}

	function getDataAnchor($element) {
		if($element.attr('href') === $element.attr('data-anchor')) {
			return;
		}

		$.each($element, function () {
			var $curElement = $(this);

			$curElement.attr('href', $curElement.attr('data-anchor'));
		});
	}
}

/* !change href end */

/**
 * !scroll to section
 * */
function scrollToSection() {
	// external js:
	// 1) Page Scroll to id (lib.min.js);

	var $navItem = $('.side-menu-drop a');
	var $sectionItems = $('.c-section-items a');

	if(!$navItem.length && !$sectionItems.length) {
		return;
	}

	var activeSectionClass = 'catalog-item-active';
	var scrollSpeed = 600;

	if ($navItem.length) {
		$navItem.mPageScroll2id({
			highlightClass: activeSectionClass,
			highlightSelector: $navItem,
			scrollSpeed: scrollSpeed,
			offset: 0,
			forceSingleHighlight: true,
			keepHighlightUntilNext: false
			// highlightByNextTarget: true
		});
	}

	if($sectionItems.length) {
		$sectionItems.on('click', function (e) {
			var href = $(this).attr('href');

			if(href.charAt(0) !== "#") {
				return;
			}

			var id = href.substring(1);
			var $currentSection = $('#' + id);

			var $page = $('html,body');
			if (!$page.is(':animated')) {
				$page.stop().animate({scrollTop: $currentSection.offset().top - 0}, scrollSpeed);
			}

			e.preventDefault();
		})
	}

	$('.current .side-menu__cell a').on('click', function (e) {
		if(window.innerWidth >= mediaTablet) {
			var $page = $('html,body');
			if (!$page.is(':animated')) {
				$page.stop().animate({scrollTop: 0}, scrollSpeed);
			}

			e.preventDefault();
		}
	})
}
/*scroll to section end*/

/**
 * !equal height
 * */
function equalHeightInit() {
	var $newsGridList = $('.news-grid__list');

	if ($newsGridList.length) {
		$newsGridList.children().matchHeight({
			byRow: true, property: 'height', target: null, remove: false
		});
	}

	var $newsList = $('.news__list');

	if ($newsList.length) {
		$newsList.children().matchHeight({
			byRow: true, property: 'height', target: null, remove: false
		});
	}

	var $newsPreviewsList = $('.news-previews__list');

	if ($newsPreviewsList.length) {
		$newsPreviewsList.children().matchHeight({
			byRow: true, property: 'height', target: null, remove: false
		});
	}

	var $thumbs = $('.c-section-thumbs');

	if ($thumbs.length) {
		$thumbs.children().matchHeight({
			byRow: true, property: 'height', target: null, remove: false
		});
	}

	var $oddsList = $('.odds__list');

	if ($oddsList.length) {
		$oddsList.children().matchHeight({
			byRow: true, property: 'height', target: null, remove: false
		});
	}

	var $orderSteps = $('.order-steps');

	if ($orderSteps.length) {
		$orderSteps.children().matchHeight({
			byRow: true, property: 'height', target: null, remove: false
		});
	}

	var $paymentList = $('.payment-list');

	if ($paymentList.length) {
		$paymentList.children().matchHeight({
			byRow: false, property: 'height', target: null, remove: false
		});
	}

	// $(window).on('resize', function () {
	// 	$.fn.matchHeight._update();
	// })
}
/*equal height end*/

/**
 * !map init
 * */
var styleMap = [
	{
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#e9e9e9"
			},
			{
				"lightness": 17
			}
		]
	},
	{
		"featureType": "landscape",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#f5f5f5"
			},
			{
				"lightness": 20
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry.fill",
		"stylers": [
			{
				"color": "#ffffff"
			},
			{
				"lightness": 17
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry.stroke",
		"stylers": [
			{
				"color": "#ffffff"
			},
			{
				"lightness": 29
			},
			{
				"weight": 0.2
			}
		]
	},
	{
		"featureType": "road.arterial",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#ffffff"
			},
			{
				"lightness": 18
			}
		]
	},
	{
		"featureType": "road.local",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#ffffff"
			},
			{
				"lightness": 16
			}
		]
	},
	{
		"featureType": "poi",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#f5f5f5"
			},
			{
				"lightness": 21
			}
		]
	},
	{
		"featureType": "poi.park",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#dedede"
			},
			{
				"lightness": 21
			}
		]
	},
	{
		"elementType": "labels.text.stroke",
		"stylers": [
			{
				"visibility": "on"
			},
			{
				"color": "#ffffff"
			},
			{
				"lightness": 16
			}
		]
	},
	{
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"saturation": 36
			},
			{
				"color": "#333333"
			},
			{
				"lightness": 40
			}
		]
	},
	{
		"elementType": "labels.icon",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "transit",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#f2f2f2"
			},
			{
				"lightness": 19
			}
		]
	},
	{
		"featureType": "administrative",
		"elementType": "geometry.fill",
		"stylers": [
			{
				"color": "#fefefe"
			},
			{
				"lightness": 20
			}
		]
	},
	{
		"featureType": "administrative",
		"elementType": "geometry.stroke",
		"stylers": [
			{
				"color": "#fefefe"
			},
			{
				"lightness": 17
			},
			{
				"weight": 1.2
			}
		]
	}
];

function mainMapInit() {
	var mainMap = 'main-map';
	var $mainMap = $('#' + mainMap);

	if (!$mainMap.length) {
		return;
	}

	function mapCenter() {
		if(window.innerWidth < mediaTablet) {
			return {
				lat: mainMapPosition.mobile.lat,
				lng: mainMapPosition.mobile.lng
			};
		} else {
			return {
				lat: mainMapPosition.desktop.lat,
				lng: mainMapPosition.desktop.lng
			};
		}
	}

	var mapOptions = {
		zoom: mainMapPosition.desktop.zoom,
		center: mapCenter(),
		styles: styleMap,
		mapTypeControl: false,
		scaleControl: false,
		scrollwheel: false
	};

	var markers = [],
		elementById = [
			document.getElementById(mainMap)
		];

	if ($(elementById[0]).length) {
		var map = new google.maps.Map(elementById[0], mapOptions);

		for (var i = 0; i < mainMapObjects.length; i++) {
			addMarker(i, map);
		}

		/*aligned after resize*/
		// var resizeTimer1;
		// $(window).on('resize', function () {
		// 	clearTimeout(resizeTimer1);
		// 	resizeTimer1 = setTimeout(function () {
		// 		moveToLocation(0, map);
		// 	}, 500);
		// });
	}

	/*change location*/
	$('.shops-info__item-js').on('click', function (e) {
		e.preventDefault();

		var index = $(this).data('location');

		deleteMarkers();
		if (index === undefined) {
			for (var i = 0; i < mainMapObjects.length; i++) {
				addMarker(i, map);
			}
			showAllMarkers();
			return;
		}

		moveToLocation(index, map);
		addMarker(index, map);
	});

	/*move to location*/
	function moveToLocation(index, map) {
		var object = mainMapObjects[index];
		var center = new google.maps.LatLng({
			// lat: object[0].lat + 0.0050, // not center of map
			// lng: object[0].lng -0.08 // not center of map
			lat: object[0].lat,
			lng: object[0].lng
		});
		map.panTo(center);
		map.setZoom(mainMapPosition.desktop.zoom);
	}

	/*show all markers*/
	function showAllMarkers() {
		var center = new google.maps.LatLng(mapCenter());
		map.panTo(center);
		map.setZoom(mainMapObjects.desktop.zoom);
	}

	var infoWindow = new google.maps.InfoWindow({
		maxWidth: 300
	});

	function addMarker(index, map) {
		var object = mainMapObjects[index];

		var position = {lat: object[0].lat, lng: object[0].lng};

		var image = {
			url: object[1],
			size: new google.maps.Size(108, 116),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(100, 110)
			// scaledSize: new google.maps.Size(25, 25)
		};

		var marker = new google.maps.Marker({
			position: position,
			//animation: google.maps.Animation.DROP,
			map: map,
			icon: image,
			title: object[2].title
		});

		markers.push(marker);

		function onMarkerClick() {
			var marker = this;

			infoWindow.setContent(
				'<div class="map-popup">' +
				'<h4>' + object[2].title + '</h4>' +
				'<div class="map-popup__list">' +
				'<div class="map-popup__row">' + object[2].address + '</div>' +
				'<div class="map-popup__row">' + object[2].phone + '</div>' +
				'<div class="map-popup__row">' + object[2].fax + '</div>' +
				'<div class="map-popup__row">' + object[2].mail + '</div>' +
				'</div>' +
				'</div>'
			);

			infoWindow.close();

			// infoWindow.open(map, marker);
		}

		map.addListener('click', function () {
			infoWindow.close();
		});

		marker.addListener('click', onMarkerClick);
	}

	function setMapOnAll(map) {
		for (var i = 0; i < markers.length; i++) {
			markers[i].setMap(map);
		}
	}

	function deleteMarkers() {
		setMapOnAll(null);
		//markers = [];
	}
}

function mainMapEAInit() {
	var mainMap = 'main-map-ea';
	var $mainMap = $('#' + mainMap);

	if (!$mainMap.length) {
		return;
	}

	function mapCenter() {
		if(window.innerWidth < 640) {
			return {
				lat: mainMapPosition.sm.lat,
				lng: mainMapPosition.sm.lng
			};
		} else if(window.innerWidth < 960) {
			return {
				lat: mainMapPosition.mob.lat,
				lng: mainMapPosition.mob.lng
			};
		} else if(window.innerWidth < 1440) {
			return {
				lat: mainMapPosition.tablet.lat,
				lng: mainMapPosition.tablet.lng
			};
		} else {
			return {
				lat: mainMapPosition.desktop.lat,
				lng: mainMapPosition.desktop.lng
			};
		}
	}

	var mapOptions = {
		zoom: mainMapPosition.desktop.zoom,
		center: mapCenter(),
		styles: styleMap,
		mapTypeControl: false,
		scaleControl: false,
		scrollwheel: false
	};

	var markers = [],
		elementById = [
			document.getElementById(mainMap)
		];

	if ($(elementById[0]).length) {
		var map = new google.maps.Map(elementById[0], mapOptions);

		// addMarker(0, map);
		// addMarker(1, map);
		for (var i = 0; i < mainMapObjects.length; i++) {
			addMarker(i, map);
		}

		/*aligned after resize*/
		// var resizeTimer1;
		// $(window).on('resize', function () {
		// 	clearTimeout(resizeTimer1);
		// 	resizeTimer1 = setTimeout(function () {
		// 		moveToLocation(0, map);
		// 	}, 500);
		// });
	}

	/*change location*/
	// $('.shops-info__item-js').on('click', function (e) {
	// 	e.preventDefault();
	//
	// 	var index = $(this).data('location');
	//
	// 	deleteMarkers();
	// 	if (index === undefined) {
	// 		for (var i = 0; i < mainMapObjects.length; i++) {
	// 			addMarker(i, map);
	// 		}
	// 		showAllMarkers();
	// 		return;
	// 	}
	//
	// 	moveToLocation(index, map);
	// 	addMarker(index, map);
	// });

	/*move to location*/
	// function moveToLocation(index, map) {
	// 	var object = mainMapObjects[index];
	// 	var center = new google.maps.LatLng({
	// 		// lat: object[0].lat + 0.0050, // not center of map
	// 		// lng: object[0].lng -0.08 // not center of map
	// 		lat: object[0].lat,
	// 		lng: object[0].lng
	// 	});
	// 	map.panTo(center);
	// 	map.setZoom(mainMapPosition.desktop.zoom);
	// }

	/*show all markers*/
	// function showAllMarkers() {
	// 	var center = new google.maps.LatLng(mapCenter());
	// 	map.panTo(center);
	// 	map.setZoom(mainMapObjects.desktop.zoom);
	// }

	var infoWindow = new google.maps.InfoWindow({
		maxWidth: 300
	});

	function addMarker(index, map) {
		var object = mainMapObjects[index];

		var position = {lat: object[0].lat, lng: object[0].lng};

		var image = {
			url: object[1],
			size: new google.maps.Size(108, 116),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(100, 110)
			// scaledSize: new google.maps.Size(25, 25)
		};

		var marker = new google.maps.Marker({
			position: position,
			//animation: google.maps.Animation.DROP,
			map: map,
			icon: image,
			title: object[2].title
		});

		markers.push(marker);

		function onMarkerClick() {
			var marker = this;

			infoWindow.setContent(
				'<div class="map-popup">' +
				'<h4>' + object[2].title + '</h4>' +
				'<div class="map-popup__list">' +
				'<div class="map-popup__row">' + object[2].address + '</div>' +
				'<div class="map-popup__row">' + object[2].phone + '</div>' +
				'<div class="map-popup__row">' + object[2].fax + '</div>' +
				'<div class="map-popup__row">' + object[2].mail + '</div>' +
				'<div class="map-popup__row">' + object[2].work + '</div>' +
				'</div>' +
				'</div>'
			);

			infoWindow.close();

			infoWindow.open(map, marker);
		}

		map.addListener('click', function () {
			infoWindow.close();
		});

		marker.addListener('click', onMarkerClick);
	}

	function setMapOnAll(map) {
		for (var i = 0; i < markers.length; i++) {
			markers[i].setMap(map);
		}
	}

	function deleteMarkers() {
		setMapOnAll(null);
		//markers = [];
	}
}
/*map init*/

/**
 * !extra popup jQuery plugin
 * */
(function ($) {
	// external js:
	// 1) TweetMax VERSION: 1.19.0 (libs);
	// 2) device.js (libs);
	// 3) resizeByWidth (resize only width);

	// add css style
	// .before-extra-popup-open{
	// 	width: 100%!important;
	// 	height: 100%!important;
	// 	max-width: 100%!important;
	// 	max-height: 100%!important;
	// 	margin: 0!important;
	// 	padding: 0!important;
	// 	overflow: hidden!important;
	// }

	// .before-extra-popup-open .wrapper{ z-index: 99; } // z-index of header must be greater than footer
	//
	// if nav need to hide
	// @media only screen and (min-width: [example: 1280px]){
	// .nav{
	// 		-webkit-transform: translate(0, 0) matrix(1, 0, 0, 1, 0, 0) !important;
	// 		-ms-transform: translate(0, 0) matrix(1, 0, 0, 1, 0, 0) !important;
	// 		transform: translate(0, 0) matrix(1, 0, 0, 1, 0, 0) !important;
	// 	}
	// .nav-list > li{
	// 		-webkit-transform: translate(0, 0) matrix(1, 0, 0, 1, 0, 0) !important;
	// 		-ms-transform: translate(0, 0) matrix(1, 0, 0, 1, 0, 0) !important;
	// 		transform: translate(0, 0) matrix(1, 0, 0, 1, 0, 0) !important;
	// 		opacity: 1 !important;
	// 		visibility: visible !important;
	// 	}
	// }
	
	var defaults = {
		mainContainer: 'html', // container wrapping all elements
		navContainer: null, // main navigation container
		navMenu: null, // menu
		btnMenu: null, // element which opens or switches menu
		btnMenuClose: null, // element which closes a menu
		navMenuItem: null,
		navMenuAnchor: 'a',
		staggerElement: null,
		overlayClass: 'popup-overlay', // overlay's class
		overlayAppendTo: 'body', // where to place overlay
		overlayAlpha: 0.8,
		overlayIndex: 997,
		classReturn: null,
		overlayBoolean: true,
		animationType: 'ltr', // rtl or ltr
		animationScale: 0.85, // default scale for animation
		animationSpeed: 300, // animation speed of the main element
		animationSpeedOverlay: null, // animation speed of the overlay
		alpha: 1,
		ease: Cubic.easeOut, // animation (gsap) https://greensock.com/customease
		minWidthItem: 100,
		mediaWidth: null,
		closeOnResize: true,
		cssScrollBlocked: false, // add class to body for blocked scroll
		closeEsc: true, // close popup on click Esc,
		activeClass: 'active',
		openedClass: 'extra-popup-opened',
		beforeOpenClass: 'extra-popup-before-open',
		extraPopupBeforeOpen: null
	};
	
	var ExtraPopup = function (settings) {
		var options = $.extend(defaults, settings || {});

		var container = $(options.navContainer),
			_animateSpeed = options.animationSpeed;

		var self = this;
		self.options = options;
		self.$mainContainer = $(options.mainContainer);            // . по умолчанию <html></html>
		self.$navMenu = $(options.navMenu);
		self.$btnMenu = $(options.btnMenu);
		self.$btnMenuClose = $(options.btnMenuClose);
		self.$navContainer = container;
		self.$navMenuItem = $(options.navMenuItem, container);     // Пункты навигации;
		self.$navMenuAnchor = $(options.navMenuAnchor, container); // Элемент, по которому производится событие (клик);
		self.$staggerElement = options.staggerElement;  //Элементы в стеке, к которым применяется анимация. По умолчанию null;

		self._animationType = options.animationType;
		self._animationScale = options.animationScale;
		self._animateSpeed = _animateSpeed;
		self.ease = options.ease;
		self.alpha = options.alpha;

		// overlay
		self.overlayBoolean = options.overlayBoolean;
		self.overlayAppendTo = options.overlayAppendTo;
		self.$overlay = $('<div class="' + options.overlayClass.substring(0) + '"></div>'); // Темплейт оверлея;
		self._overlayAlpha = options.overlayAlpha;
		self._overlayIndex = options.overlayIndex;
		self._animateSpeedOverlay = options.animationSpeedOverlay || _animateSpeed;
		self._minWidthItem = options.minWidthItem;
		self._mediaWidth = options.mediaWidth;
		self.closeOnResize = options.closeOnResize;
		self.cssScrollBlocked = options.cssScrollBlocked;
		self.closeEsc = options.closeEsc;

		self.desktop = device.desktop();

		self.modifiers = {
			active: options.activeClass,
			opened: options.openedClass,
			beforeOpen: options.beforeOpenClass
		};

		self.outsideClick();
		if ( self._mediaWidth === null || window.innerWidth < self._mediaWidth ) {
			self.preparationAnimation();
		}
		self.toggleMenu();
		self.eventsBtnMenuClose();
		self.clearStyles();
		self.closeNavOnEsc();
		self.closeNavMethod();
	};

	ExtraPopup.prototype.navIsOpened = false;

	// overlay append to "overlayAppendTo"
	ExtraPopup.prototype.createOverlay = function () {
		var self = this,
			$overlay = self.$overlay;

		$overlay.appendTo(self.overlayAppendTo);

		TweenMax.set($overlay, {
			autoAlpha: 0,
			position: 'fixed',
			width: '100%',
			height: '100%',
			left: 0,
			top: 0,
			background: '#000',
			'z-index': self._overlayIndex,
			onComplete: function () {
				TweenMax.to($overlay, self._animateSpeedOverlay / 1000, {autoAlpha: self._overlayAlpha});
			}
		});
	};

	// toggle overlay
	ExtraPopup.prototype.toggleOverlay = function (close) {
		var self = this,
			$overlay = self.$overlay,
			ease = self.ease;

		if (close === false) {
			TweenMax.to($overlay, self._animateSpeedOverlay / 1000, {
				autoAlpha: 0,
				ease: ease,
				onComplete: function () {
					$overlay.remove();
				}
			});
			return false;
		}

		self.createOverlay();
	};

	// toggle menu
	ExtraPopup.prototype.toggleMenu = function () {
		var self = this,
			$buttonMenu = self.$btnMenu;

		// $buttonMenu.on('mousedown touchstart vmousedown', function (e) {
		$buttonMenu.on('click', function (e) {

			if (self.navIsOpened) {
				self.closeNav();
			} else {
				self.openNav();
			}

			e.preventDefault();
			e.stopPropagation();
		});
	};

	// events btn close menu
	ExtraPopup.prototype.eventsBtnMenuClose = function () {

		var self = this;

		self.$btnMenuClose.on('click', function (e) {
			e.preventDefault();

			if ( self.navIsOpened ) {
				self.closeNav();
			}

			e.stopPropagation();
		});
	};

	// click outside menu
	ExtraPopup.prototype.outsideClick = function () {
		var self = this;

		$(document).on('click', function () {
			if ( self.navIsOpened ) {
				self.closeNav();
			}
		});

		self.$navContainer.on('click', function (e) {
			if ( self.navIsOpened ) {
				e.stopPropagation();
			}
		})
	};

	// close popup on click to "Esc" key
	ExtraPopup.prototype.closeNavOnEsc = function () {
		var self = this;

		$(document).keyup(function(e) {
			if (self.navIsOpened && self.closeEsc && e.keyCode === 27) {
				self.closeNav();
			}
		});
	};

	// close popup (method)
	ExtraPopup.prototype.closeNavMethod = function () {
		var self = this;

		self.$navContainer.on('extraPopupClose', function () {
			if (self.navIsOpened) {
				self.closeNav();
			}
		})
	};

	// open nav
	ExtraPopup.prototype.openNav = function() {
		// console.log("openNav");

		var self = this,
			$html = self.$mainContainer,
			$navContainer = self.$navContainer,
			$buttonMenu = self.$btnMenu,
			$buttonClose = self.$btnMenuClose,
			_animationSpeed = self._animateSpeedOverlay,
			$staggerElement = self.$staggerElement,
			ease = self.ease;

		var modifiers = self.modifiers;
		var classBeforeOpen = modifiers.beforeOpen;
		var classAfterOpen = modifiers.opened;

		$navContainer.trigger('extraPopupBeforeOpen');
		// self.options.extraPopupBeforeOpen(self.$navContainer);

		$html.addClass(classBeforeOpen);
		$buttonMenu.addClass(modifiers.active);
		$buttonClose.addClass(classBeforeOpen);

		if(self.cssScrollBlocked){
			self.cssScrollFixed();
		}

		$navContainer.css({
			'-webkit-transition-duration': '0s',
			'transition-duration': '0s'
		});

		// animation of stagger
		if($staggerElement) {
			TweenMax.staggerTo($staggerElement, 0.85, {
				autoAlpha: 1,
				scale: 1,
				y: 0,
				yPercent: 0,
				xPercent: 0,
				ease: ease
			}, 0.1);
		}

		TweenMax.to($navContainer, _animationSpeed / 1000, {
			xPercent: 0,
			scale: 1,
			autoAlpha: 1,
			ease: ease,
			onComplete: function () {
				$html.addClass(classAfterOpen);
				$buttonClose.addClass(classAfterOpen);

				if (DESKTOP) {
					noScroll();
				}
			}
		});

		if (self.overlayBoolean) {
			self.toggleOverlay();
		}

		self.navIsOpened = true;
	};

	// close nav
	ExtraPopup.prototype.closeNav = function() {
		// console.log("closeNav");

		var self = this,
			$html = self.$mainContainer,
			$navContainer = self.$navContainer,
			$buttonMenu = self.$btnMenu,
			$buttonClose = self.$btnMenuClose,
			$staggerElement = self.$staggerElement,
			_animationSpeed = self._animateSpeedOverlay,
			_mediaWidth = self._mediaWidth,
			_animationType = self._animationType,
			ease = self.ease,
			alpha = self.alpha;

		var modifiers = self.modifiers;
		var classAfterOpen = modifiers.opened;
		var classBeforeOpen = modifiers.beforeOpen;

		$html.removeClass(classAfterOpen);
		$html.removeClass(classBeforeOpen);
		$buttonMenu.removeClass(modifiers.active);
		$buttonClose.removeClass(classAfterOpen);
		$buttonClose.removeClass(classBeforeOpen);

		if (self.overlayBoolean) {
			self.toggleOverlay(false);
		}

		var duration = _animationSpeed / 1000;

		// animation of stagger
		if($staggerElement) {
			TweenMax.staggerTo($staggerElement, 0.85, {
				autoAlpha: alpha,
				xPercent: -100
			}, 0.1);
		}

		if (_animationType === 'ltr') {
			TweenMax.to($navContainer, duration, {
				xPercent: -100,
				ease: ease,
				onComplete: function () {
					if (_mediaWidth === null || window.innerWidth < _mediaWidth) {
						self.preparationAnimation();
					}

					TweenMax.set($navContainer, {
						autoAlpha: alpha
					});

					if (DESKTOP) {
						canScroll();
					}

					if(self.cssScrollBlocked){
						self.cssScrollUnfixed();
					}
				}
			});

		} else if (_animationType === 'rtl') {
			TweenMax.to($navContainer, duration, {
				xPercent: 100,
				ease: ease,
				onComplete: function () {
					if (_mediaWidth === null || window.innerWidth < _mediaWidth) {
						self.preparationAnimation();
					}

					TweenMax.set($navContainer, {
						autoAlpha: alpha
					});

					if (DESKTOP) {
						canScroll();
					}

					if(self.cssScrollBlocked){
						self.cssScrollUnfixed();
					}
				}
			});

		} else if (_animationType === 'surface') {
			TweenMax.to($navContainer, duration, {
				scale: self._animationScale,
				autoAlpha: alpha,
				ease: ease,
				onComplete: function () {
					if (_mediaWidth === null || window.innerWidth < _mediaWidth) {
						self.preparationAnimation();
					}

					if (DESKTOP) {
						canScroll();
					}

					if(self.cssScrollBlocked){
						self.cssScrollUnfixed();
					}
				}
			});

		} else {
			console.error('Type animation "' + _animationType + '" is wrong!');
			return;
		}

		self.navIsOpened = false;
	};

	// preparation element before animation
	ExtraPopup.prototype.preparationAnimation = function() {
		var self = this;

		var $navContainer = self.$navContainer,
			$staggerElement = self.$staggerElement,
			_animationType = self._animationType,
			alpha = self.alpha;

		// console.log('preparationAnimation: ', $navContainer);

		// animation of stagger
		if($staggerElement) {
			TweenMax.set($staggerElement, {
				autoAlpha: alpha,
				xPercent: -100
			});
		}

		if (_animationType === 'ltr') {
			TweenMax.set($navContainer, {
				xPercent: -100,
				autoAlpha: alpha,
				onComplete: function () {
					$navContainer.show(0);
				}
			});

		} else if (_animationType === 'rtl') {
			TweenMax.set($navContainer, {
				xPercent: 100,
				autoAlpha: alpha,
				onComplete: function () {
					$navContainer.show(0);
				}
			});

		} else if (_animationType === 'surface') {
			TweenMax.set($navContainer, {
				scale: self._animationScale,
				autoAlpha: alpha,
				onComplete: function () {
					$navContainer.show(0);
				}
			});

		} else {
			console.error('Type animation "' + _animationType + '" is wrong!');
		}
	};

	ExtraPopup.prototype.cssScrollFixed = function() {
		$('html').addClass('css-scroll-fixed');
	};

	ExtraPopup.prototype.cssScrollUnfixed = function() {
		$('html').removeClass('css-scroll-fixed');
	};

	// clearing inline styles
	ExtraPopup.prototype.clearStyles = function() {
		var self = this,
			$btnMenu = self.$btnMenu,
			$navContainer = self.$navContainer,
			$staggerElement = self.$staggerElement;

		//clear on horizontal resize
		if (self.closeOnResize === true) {

			$(window).on('resizeByWidth', function () {
				if (self.navIsOpened) {
					if (!$btnMenu.is(':visible')) {
						$navContainer.attr('style', '');
						$staggerElement.attr('style', '');
						self.closeNav();
					} else {
						self.closeNav();
					}
				}
			});

		}
	};

	window.ExtraPopup = ExtraPopup;

}(jQuery));

/**
 * !extra popup initial
 * */
function popupsInit(){

	/*navigation*/
	var navPopupClass = '.nav-popup-js';
	var $navPopup = $(navPopupClass);

	if($navPopup.length){

		new ExtraPopup({
			navContainer: navPopupClass,
			navMenu: '.nav__list',
			btnMenu: '.btn-nav-js',
			btnMenuClose: '.btn-shutter-close-js',
			// staggerElement: '.nav__list > li',
			overlayClass: 'popup-overlay--nav',
			overlayAppendTo: 'body',
			closeOnResize: false,
			// mediaWidth: 1280,
			animationSpeed: 200,
			overlayAlpha: 0.35,
			overlayIndex: 999,
			// alpha: 0,
			cssScrollBlocked: true,
			openedClass: 'shutter--opened',
			beforeOpenClass: 'shutter--before-open',
			ease: 'Power2.easeInOut'
			// ease: 'Power0.easeNone'
		});
	}

	/*search*/
	var searchPopupClass = '.search-popup-js';
	var $searchPopup = $(searchPopupClass);

	if($searchPopup.length){

		new ExtraPopup({
			navContainer: searchPopupClass,
			// navMenu: '.nav__list',
			btnMenu: '.btn-search-popup-js',
			btnMenuClose: '.btn-shutter-close-js',
			// staggerElement: '.nav__list > li',
			overlayClass: 'popup-overlay--nav',
			overlayAppendTo: 'body',
			closeOnResize: false,
			// mediaWidth: 1280,
			animationSpeed: 200,
			overlayAlpha: 0.35,
			overlayIndex: 999,
			// alpha: 0,
			cssScrollBlocked: true,
			openedClass: 'shutter--opened',
			beforeOpenClass: 'shutter--before-open',
			ease: 'Power2.easeInOut'
			// ease: 'Power0.easeNone'
		});
	}

	/*login*/
	var loginPopupClass = '.login-popup-js';
	var $loginPopup = $(loginPopupClass);

	if($loginPopup.length){

		new ExtraPopup({
			navContainer: loginPopupClass,
			// navMenu: '.nav__list',
			btnMenu: '.btn-login-popup-js',
			btnMenuClose: '.btn-shutter-close-js',
			// staggerElement: '.nav__list > li',
			overlayClass: 'popup-overlay--nav',
			overlayAppendTo: 'body',
			closeOnResize: false,
			// mediaWidth: 1280,
			animationSpeed: 200,
			overlayAlpha: 0.35,
			overlayIndex: 999,
			// alpha: 0,
			cssScrollBlocked: true,
			openedClass: 'shutter--opened',
			beforeOpenClass: 'shutter--before-open',
			ease: 'Power2.easeInOut'
			// ease: 'Power0.easeNone'
		});
	}

	/*catalog*/
	var catalogMenuPopupClass = '.catalog-menu-popup-js';
	var $catalogMenuPopup = $(catalogMenuPopupClass);

	if($catalogMenuPopup.length){

		new ExtraPopup({
			navContainer: catalogMenuPopupClass,
			// navMenu: '.nav__list',
			btnMenu: '.btn-catalog-js',
			btnMenuClose: '.btn-catalog-close-js',
			overlayClass: 'popup-overlay--catalog-menu',
			overlayAppendTo: 'body',
			closeOnResize: false,
			animationSpeed: 300,
			animationType: 'rtl',
			overlayAlpha: 0.35,
			overlayIndex: 997,
			cssScrollBlocked: true,
			openedClass: 'catalog-menu-popup-opened',
			beforeOpenClass: 'catalog-menu-popup-before-open',
			ease: 'Power2.easeInOut'
		});
	}

	/*text popup*/
	var textPopupClass = '.text-popup-js';
	var $textPopup = $(textPopupClass);

	if(textPopupClass.length){

		new ExtraPopup({
			navContainer: textPopupClass,
			// navMenu: '.nav__list',
			btnMenu: '.text-popup-opener-js',
			btnMenuClose: '.btn-text-popup-close-js',
			overlayClass: 'popup-overlay--text-popup',
			overlayAppendTo: 'body',
			closeOnResize: false,
			animationSpeed: 300,
			animationType: 'rtl',
			overlayAlpha: 0.35,
			overlayIndex: 1010,
			cssScrollBlocked: true,
			openedClass: 'text-popup-popup-opened',
			beforeOpenClass: 'text-popup-popup-before-open',
			ease: 'Power2.easeInOut'
		});
	}

	$searchPopup.on('extraPopupBeforeOpen', function () {
		$navPopup.trigger('extraPopupClose');
		$catalogMenuPopup.trigger('extraPopupClose');
		$loginPopup.trigger('extraPopupClose');
	});

	$navPopup.on('extraPopupBeforeOpen', function () {
		$searchPopup.trigger('extraPopupClose');
		$catalogMenuPopup.trigger('extraPopupClose');
		$loginPopup.trigger('extraPopupClose');
	});

	$catalogMenuPopup.on('extraPopupBeforeOpen', function () {
		$navPopup.trigger('extraPopupClose');
		$searchPopup.trigger('extraPopupClose');
		$loginPopup.trigger('extraPopupClose');
	});

	$loginPopup.on('extraPopupBeforeOpen', function () {
		$navPopup.trigger('extraPopupClose');
		$searchPopup.trigger('extraPopupClose');
		$catalogMenuPopup.trigger('extraPopupClose');
	});

	var btnCloseTpl = '<button title="%title%" type="button" class="mfp-close"><svg class="svg-ico-close" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 57.2 57.2"><path d="M34.3 28.6L56 6.9c1.6-1.6 1.6-4.1 0-5.7 -1.6-1.6-4.1-1.6-5.7 0L28.6 22.9 6.9 1.3c-1.6-1.6-4.1-1.6-5.7 0 -1.6 1.6-1.6 4.1 0 5.7l21.7 21.6L1.3 50.3c-1.6 1.5-1.6 4.1 0 5.6 0.8 0.8 1.8 1.2 2.8 1.2s2-0.4 2.8-1.2l21.7-21.6L50.3 56c0.8 0.8 1.8 1.2 2.8 1.2s2-0.4 2.8-1.2c1.6-1.6 1.6-4.1 0-5.7L34.3 28.6z"></path></svg></button>';

	$('.btn-popup-js').magnificPopup({
		type: 'inline',
		midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.,
		// closeOnContentClick: false,
		mainClass: 'mfp-zoom-in',
		removalDelay: 500,
		fixedContentPos: 'auto',
		overflowY: 'auto',
		closeMarkup: btnCloseTpl,
	});
}
/*extra popup initial end*/

/**
 * !side menu event
 * */
function sideMenuEvents() {
	var $sideItem = $('.side-menu__hover');
	var $sideItemTitle = $('.side-menu__title');

	if (thisIsHomePage) {
		$sideItem.on('mouseenter', function () {
			var $thisItem = $(this);
			var $thisItemTitle = $thisItem.find($sideItemTitle);
			if (!$thisItemTitle.length) {
				return false;
			}

			var $newPositionTitle = Math.round($thisItemTitle.offset().top - ($thisItem.offset().top + ($thisItem.outerHeight() - $thisItemTitle.outerHeight()) / 2));

			$thisItemTitle.css({
				'transform': 'matrix(1, 0, 0, 1, 0, ' + -$newPositionTitle + ')',
				'webkit-transform': 'matrix(1, 0, 0, 1, 0, ' + -$newPositionTitle + ')'
			})

		}).on('mouseleave', function () {
			// $sideItemTitle.css({
			// 	'top': 0
			// })
			$sideItemTitle.css({
				'transform': 'matrix(1, 0, 0, 1, 0, 0'
			})
		})
	}
}
/**side menu events end*/

/**
 * !catalog menu events
 */
function catalogMenuEvents() {
	var $menu = $('.menu-events-js');
	var $submenu = $('.submenu-events-js');
	var $categories = $('.catalog-categories-js');
	var $categoriesLinks = $('.catalog-categories-link-js');
	var submenuIsOpen = 'submenu-is-open';
	var catalogIsOpen = 'categories-is-open';

	$categories.on('mouseenter', function () {
		$categories.addClass(catalogIsOpen);
	}).on('mouseleave', function () {
		if (!$menu.hasClass(submenuIsOpen)) {
			$categories.removeClass(catalogIsOpen);
		}
	});

	$categoriesLinks.on('click', function () {
		if (!$menu.hasClass(submenuIsOpen)) {
			$menu.addClass(submenuIsOpen);
		}
	});

	$submenu.on('mouseleave', function (e) {
		if (e.offsetX < 0) {
			$categories.removeClass(catalogIsOpen);
			$menu.removeClass(submenuIsOpen);
		}
	});
}
/* catalog menu events end */

/**
 * !choicer
 * */
function choicerInit() {

	var $choiceContainer = $('.js-choice-wrap');
	var $choiceDrop = $('.js-choice-drop');
	var openClass = 'choice-opened';
	var delay = 300; // delay recalculate height of the drop

	if ($choiceContainer.length) {

		// if this container has absolute position
		$.each($choiceContainer, function () {
			var $thisContainer = $(this);

			if ($thisContainer.attr('data-parent-position') !== undefined) {
				$thisContainer.parent().css({
					'position': 'relative',
					'padding-right': Math.round($thisContainer.outerWidth() + 10),
					'overflow': 'visible'
				});
			}
		});

		$('.js-choice-open').on('click', function (e) {
			e.preventDefault();
			e.stopPropagation();

			var $currentContainer = $(this).closest('.js-choice-wrap');

			if($currentContainer.hasClass(openClass)) {
				$currentContainer.removeClass(openClass);
				return;
			}

			recalculatePhonesDrop($currentContainer.find($choiceDrop));

			$choiceContainer.removeClass(openClass);
			$currentContainer.addClass(openClass);
		});

		$(document).on('click', function () {
			closeDrop();
		});

		// method of close drop
		$choiceContainer.on('closeDrop', function () {
			closeDrop();
		});

		function closeDrop() {
			$choiceContainer.removeClass(openClass);
		}

		$choiceDrop.on('click', 'a', function (e) {
			var $this = $(this);

			// if data-select is false, do not replace text
			if ($this.closest($choiceContainer).attr('data-select') === 'false') {
				return;
			}

			$('a', '.js-choice-drop').removeClass('active');

			$this
				.addClass('active')
				.closest('.js-choice-wrap')
				.find('.js-choice-open span')
				.text($this.find('span').text());
		});

		$(window).on('debouncedresize scroll', function () {
			recalculatePhonesDrop($('.choice-opened').find($choiceDrop));
		});

		// set max height of the drop
		var timeout;
		function recalculatePhonesDrop($dropMenu) {
			if ($dropMenu && $dropMenu.length > 0) {
				clearTimeout(timeout);

				timeout = setTimeout(function () {
					// console.log("$thisDrop: ", $dropMenu);
					// console.log("$thisDropPosition: ", $dropMenu.offset().top);

					var thisDropMaxHeight = $(window).height() - $dropMenu.offset().top;
					// console.log("thisDropMaxHeight: ", thisDropMaxHeight);

					$dropMenu.css('max-height', thisDropMaxHeight);
				}, delay);
			}
		}
	}

}
/*choicer end*/

/**
 * !simple accordion
 * */
function simpleAccordInit() {
	function simpleAccordion($hand, $panel, animateSpeed) {
		var activeClass = 'is-open';

		if ($panel.hasClass(activeClass)) {
			$panel.toggle().prev().addClass(activeClass);
		}

		$hand.on('click', function (e) {
			e.preventDefault();

			$(this).toggleClass(activeClass);
			$panel.stop().slideToggle(animateSpeed);
		})
	}

	var $simpleAccordionHand = $('.simple-accordion-js').children('a');

	if ($simpleAccordionHand.length) {
		$simpleAccordionHand.each(function () {
			var $thisHand = $(this);

			simpleAccordion($thisHand, $thisHand.next(), 200);
		})
	}
}
/*simple accordion end*/

/**
 * !multi accordion jquery plugin
 * */
(function ($) {
	var MultiAccordion = function (settings) {
		var options = $.extend({
			collapsibleAll: false, // если установить значение true, сворачиваются идентичные панели НА СТРАНИЦЕ, кроме текущего
			resizeCollapsible: false, // если установить значение true, при ресайзе будут соворачиваться все элементы
			container: null, // общий контейнер
			item: null, // непосредственный родитель открывающегося элемента
			handler: null, // открывающий элемента
			handlerWrap: null, // если открывающий элемент не является непосредственным соседом открывающегося элемента, нужно указать элемент, короный является оберткой открывающего элемета и лежит непосредственно перед открывающимся элементом (условно, является табом)
			panel: null, // открывающийся элемент
			openClass: 'active', // класс, который добавляется при открытии
			currentClass: 'current', // класс текущего элемента
			animateSpeed: 300, // скорость анимации
			collapsible: false // сворачивать соседние панели
		}, settings || {});

		this.options = options;
		var container = $(options.container);
		this.$container = container;
		this.$item = $(options.item, container);
		this.$handler = $(options.handler, container);
		this.$handlerWrap = $(options.handlerWrap, container);
		this._animateSpeed = options.animateSpeed;
		this.$totalCollapsible = $(options.totalCollapsible);
		this._resizeCollapsible = options.resizeCollapsible;

		this.modifiers = {
			active: options.openClass,
			current: options.currentClass
		};

		this.bindEvents();
		this.totalCollapsible();
		this.totalCollapsibleOnResize();

	};

	MultiAccordion.prototype.totalCollapsible = function () {
		var self = this;
		self.$totalCollapsible.on('click', function () {
			self.$panel.slideUp(self._animateSpeed, function () {
				self.$container.trigger('accordionChange');
			});
			self.$item.removeClass(self.modifiers.active);
		})
	};

	MultiAccordion.prototype.totalCollapsibleOnResize = function () {
		var self = this;
		$(window).on('resize', function () {
			if (self._resizeCollapsible) {
				self.$panel.slideUp(self._animateSpeed, function () {
					self.$container.trigger('accordionChange');
				});
				self.$item.removeClass(self.modifiers.active);
			}
		});
	};

	MultiAccordion.prototype.bindEvents = function () {
		var self = this;
		var $container = this.$container;
		var $item = this.$item;
		var panel = this.options.panel;

		$container.on('click', self.options.handler, function (e) {
			var $currentHandler = self.options.handlerWrap ? $(this).closest(self.options.handlerWrap) : $(this);
			// console.log("!!self.options.handlerWrap: ", self.options.handlerWrap);
			// console.log("$currentHandler: ", $currentHandler);
			var $currentItem = $currentHandler.closest($item);

			if ($currentItem.has($(panel)).length) {
				e.preventDefault();

				if ($currentHandler.next(panel).is(':visible')) {
					self.closePanel($currentItem);

					return;
				}

				if (self.options.collapsibleAll) {
					self.closePanel($($container).not($currentHandler.closest($container)).find($item));
				}

				if (self.options.collapsible) {
					self.closePanel($currentItem.siblings());
				}

				self.openPanel($currentItem, $currentHandler);
			}
		})
	};

	MultiAccordion.prototype.closePanel = function ($currentItem) {
		var self = this;
		var panel = self.options.panel;
		var openClass = self.modifiers.active;

		$currentItem.removeClass(openClass).find(panel).filter(':visible').slideUp(self._animateSpeed, function () {
			// console.log('mAccordionAfterClose');
			self.$container.trigger('mAccordionAfterClose').trigger('mAccordionAfterChange');
		});

		$currentItem
			.find(self.$item)
			.removeClass(openClass);
	};

	MultiAccordion.prototype.openPanel = function ($currentItem, $currentHandler) {
		var self = this;
		var panel = self.options.panel;

		$currentItem.addClass(self.modifiers.active);

		$currentHandler.next(panel).slideDown(self._animateSpeed, function () {
			// console.log('mAccordionAfterOpened');
			self.$container.trigger('mAccordionAfterOpened').trigger('mAccordionAfterChange');
		});
	};

	window.MultiAccordion = MultiAccordion;
}(jQuery));

/**
 * !multi accordion initial
 * */
function multiAccordionInit() {
	var catalogMenu = '.catalog-menu-js';
	// var catalogMenuChangeTimeout;

	if ($(catalogMenu).length) {
		new MultiAccordion({
			container: catalogMenu,
			item: 'li',
			handler: '.catalog-menu-handler-js',
			handlerWrap: '.catalog-menu__tab-js',
			panel: '.catalog-menu-drop-js',
			openClass: 'is-open',
			animateSpeed: 200,
			collapsible: true
		});

		// $(catalogMenu).on('mAccordionAfterChange', function () {
		// 	clearTimeout(catalogMenuChangeTimeout);
		//
		// 	catalogMenuChangeTimeout = setTimeout(function () {
		// 		$(document.body).trigger("sticky_kit:recalc");
		// 	}, 50);
		// })
	}

	var sideMenu = '.side-menu';

	if ($(sideMenu).length) {
		new MultiAccordion({
			container: sideMenu,
			item: '.side-menu__row',
			handler: '.side-menu-handler-js',
			handlerWrap: '.side-menu__cell',
			panel: '.side-menu-drop',
			openClass: 'is-open',
			animateSpeed: 200,
			collapsible: true
		});

		// $(catalogMenu).on('mAccordionAfterChange', function () {
		// 	clearTimeout(catalogMenuChangeTimeout);
		//
		// 	catalogMenuChangeTimeout = setTimeout(function () {
		// 		$(document.body).trigger("sticky_kit:recalc");
		// 	}, 50);
		// })
	}

	var navMenu = '.nav-js';

	if ($(navMenu).length) {
		new MultiAccordion({
			container: navMenu,
			item: 'li',
			handler: '.nav-handler-js',
			handlerWrap: '.nav__tab-js',
			panel: '.nav-drop-js',
			openClass: 'is-open',
			animateSpeed: 200,
			collapsible: true
		});

		// $(catalogMenu).on('mAccordionAfterChange', function () {
		// 	clearTimeout(catalogMenuChangeTimeout);
		//
		// 	catalogMenuChangeTimeout = setTimeout(function () {
		// 		$(document.body).trigger("sticky_kit:recalc");
		// 	}, 50);
		// })
	}
}
/*multi accordion initial end*/

/**
 * !tab switcher
 * */
function tabSwitcher() {
	// external js:
	// 1) TweetMax VERSION: 1.19.0 (widgets.js);
	// 2) resizeByWidth (resize only width);

	/*
	 <!--html-->
	 <div class="some-class tabs-js" data-collapsed="true" data-auto-height="true" data-to-queue="480">
	 <!--if has data-collapsed="true" one click open tab content, two click close collapse tab content-->
	 <div class="some-class__nav">
	 <div class="some-class__tab">
	 <a href="#" class="tab-anchor-js" data-for="some-id-01">Text tab 01</a>
	 </div>
	 <div class="some-class__tab">
	 <a href="#" class="tab-anchor-js" data-for="some-id-02">Text tab 02</a>
	 </div>
	 </div>

	 <div class="some-class__panels tab-container-js">
	 <div class="some-class__panel tab-content-js" data-id="some-id-01">Text content 01</div>
	 <div class="some-class__panel tab-content-js" data-id="some-id-02">Text content 02</div>
	 </div>
	 </div>
	 <!--html end-->
	 */

	var $tabWrapper = $('.js-tabs');
	var $container = $('.js-tab-container');

	if (!$container.length) return false;

	if ($tabWrapper.length) {
		var $anchor = $('.js-tab-anchor'),
			$content = $('.js-tab-content'),
			activeClass = 'active-tab',
			collapseAllClass = 'collapsed-all-tab',
			idPrefix = 'activeIs',
			animationSpeed = 0.2,
			animationHeightSpeed = 0.08;

		$.each($tabWrapper, function () {
			var $currentContainer = $(this),
				$currentAnchor = $currentContainer.find($anchor),
				$thisContainer = $currentContainer.find($container),
				$currentContent = $currentContainer.find($content);
			if ($currentContainer.find('.' + activeClass).length > 0) {
				var initialTab = $currentContainer.find('.' + activeClass).attr('href').substring(1);
			}
			if($currentContainer.data('collapsed') === true){
				$currentContainer.addClass(collapseAllClass);
			}
			// var toQueue = $currentContainer.data('to-queue'); // transform tab for toQueue value layout width
			// var tabInitedFlag = false;
			var valDataAutoHeight = $currentContainer.data('auto-height');
			var thisAutoHeight = valDataAutoHeight !== false;
			var activeTab = false;

			// prepare traffic content
			function prepareTabsContent() {
				$thisContainer.css({
					'display': 'block',
					'position': 'relative',
					'overflow': 'hidden'
				});

				$currentContent.css({
					// 'display': 'none',
					'position': 'absolute',
					'left': 0,
					'top': 0,
					'width': '100%',
					'z-index': -1
				});

				switchContent();
			}

			prepareTabsContent();

			// toggle content
			$currentAnchor.on('click', function (e) {
				e.preventDefault();

				var $self = $(this),
					selfTab = $self.attr('href').substring(1);

				if ($currentContainer.data('collapsed') === true && activeTab === selfTab) {

					toggleActiveClass();
					toggleContent(false);
					changeHeightContainer(false);

					return;
				}

				if (activeTab === selfTab) return false;

				initialTab = selfTab;

				switchContent();
			});

			// collapse current tab method
			$currentAnchor.eq(0).on('tabSwitcherCollapse', function () {
				var $self = $(this);
				var selfTab = $self.attr('href').substring(1);

				if (activeTab === selfTab) {
					toggleActiveClass();
					toggleContent(false);
					changeHeightContainer(false);
				}
			});

			// switch content
			function switchContent() {
				if (initialTab) {
					toggleContent();
					changeHeightContainer();
					toggleActiveClass();
				}
			}

			// show active content and hide other
			function toggleContent() {

				thisAutoHeight && $thisContainer.css('height', $thisContainer.outerHeight());

				$currentContent.css({
					'position': 'absolute',
					'left': 0,
					'top': 0
				});

				TweenMax.to($currentContent, animationSpeed, {
					autoAlpha: 0
					// ,'z-index': -1
				});

				var $initialContent = $currentContent.filter('[id="' + initialTab + '"]');

				$initialContent.css('z-index', 2);

				if (arguments[0] === false) return;

				TweenMax.to($initialContent, animationSpeed, {
					autoAlpha: 1
					// ,'z-index': 2
				});
			}

			// change container's height
			function changeHeightContainer() {
				var $initialContent = $currentContent.filter('[id="' + initialTab + '"]');

				if (arguments[0] === false) {
					TweenMax.to($thisContainer, animationHeightSpeed, {
						'height': 0
					});

					return;
				}

				if (thisAutoHeight) {
					TweenMax.to($thisContainer, animationHeightSpeed, {
						'height': $initialContent.outerHeight(),
						onComplete: function () {

							thisAutoHeight && $thisContainer.css('height', 'auto');

							$initialContent.css({
								'position': 'relative',
								'left': 'auto',
								'right': 'auto'
							});
						}
					});
				}

				$initialContent.css({
					'position': 'relative',
					'left': 'auto',
					'right': 'auto'
				})
			}

			// toggle class active
			function toggleActiveClass() {
				$currentAnchor.removeClass(activeClass);
				$currentContent.removeClass(activeClass);
				if($currentContainer.data('collapsed') === true){
					$currentContainer.addClass(collapseAllClass);
				}

				if (activeTab) {
					$currentContainer.removeClass(idPrefix + '-' + activeTab);
				}

				if (initialTab !== activeTab) {

					$currentAnchor.filter('[href="#' + initialTab + '"]').addClass(activeClass);
					$currentContent.filter('[id="' + initialTab + '"]').addClass(activeClass);
					$currentContainer.addClass(idPrefix + '-' + initialTab);
					$currentContainer.removeClass(collapseAllClass);

					activeTab = initialTab;

					return false;
				}

				activeTab = false;
			}

			// to queue
			// $(window).on('load debouncedresize', function () {
			// 	console.log("toQueue.length: ", !!toQueue);
			// 	if (toQueue && window.innerWidth < toQueue){
			// 		tabInitedFlag = false;
			// 		$thisContainer.attr('style', "");
			// 		$currentContent.attr('style', "");
			//
			// 		return;
			// 	}
			//
			// 	console.log("tabInitedFlag: ", tabInitedFlag);
			// 	if(!tabInitedFlag) {
			// 		prepareTabsContent();
			// 		tabInitedFlag = true;
			// 	}
			// });
		});

		// if transform tabs to accordion
		var $simpleAccordionHand = $('.js-tab-link');

		if ($simpleAccordionHand.length) {
			$simpleAccordionHand.each(function () {
				var $thisHand = $(this);

				tabAccordion($thisHand, $thisHand.next().children(), animationSpeed*1000);
			})
		}

		$(window).on('debouncedresizeByWidth', function () {
			$simpleAccordionHand.each(function () {
				var $thisHand = $(this);

				if ($thisHand.hasClass(activeClass)) {
					$thisHand.next().children().show();
				}
			});
		});

		function tabAccordion($hand, $panel, animateSpeed) {
			if ($hand.hasClass(activeClass)) {
				$panel.show();
			}

			$hand.on('click', function (e) {
				e.preventDefault();

				$(this).toggleClass(activeClass);
				$panel.stop().slideToggle(animateSpeed);
			})
		}
	}
}
/* tab switcher end */

/**
 * !toggle view shops
 * */
function toggleView() {
	var $switcherHand = $('.view-switcher-js a');

	if ( $switcherHand.length ) {

		var $container = $('.view-container-js');
		var activeHand = 'active';
		var activeContainer = 'grid-view-activated';

		var cookie = 'gridView';
		if($container.hasClass(activeContainer)){
			setCookie(cookie, true, {
				// path: "/"
			});
		}

		// $switcherHand.removeClass(activeHand);
		// if(getCookie(cookie) === 'true'){
		// 	$switcherHand.eq(1).addClass(activeHand);
		// 	$container.addClass(activeContainer);
		// } else {
		// 	$switcherHand.eq(0).addClass(activeHand);
		// 	$container.removeClass(activeContainer);
		// }

		$switcherHand.on('click', function (e) {
			e.preventDefault();

			var $this = $(this);

			if ( $this.hasClass(activeHand) ) return false;

			$switcherHand.removeClass(activeHand);
			$container.removeClass(activeContainer);
			setCookie('gridView', false, {
				// path: "/"
			});

			$this.addClass(activeHand);

			if ($this.index() === 1) {
				$container.addClass(activeContainer);
				setCookie('gridView', true, {
					// path: "/"
				});
			}
		});
	}
}
/*toggle view shops end*/

/**spinner initial*/
function spinnerInit() {
	$( ".spinner-js" ).spinner({
		min: 1
	});
}
/**spinner initial end*/

/**only number input*/
function onlyNumberInput() {
	// link: https://stackoverflow.com/questions/995183/how-to-allow-only-numeric-0-9-in-html-inputbox-using-jquery

	$("[data-only-number]").keydown(function (e) {
		// Allow: backspace, delete, tab, escape, enter and .
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
			// Allow: Ctrl+A, Command+A
			(e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
			// Allow: home, end, left, right, down, up
			(e.keyCode >= 35 && e.keyCode <= 40)) {
			// let it happen, don't do anything
			return;
		}
		// Ensure that it is a number and stop the keypress
		if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
			e.preventDefault();
		}
	});
}
/**only number input end*/

/**
 * !multi filters jquery plugin
 * */
(function ($) {
	var MultiFilters = function (settings) {
		var options = $.extend({
			container: null,
			item: null,
			group: null,
			handler: null,
			placeholder: null,
			selected: null,
			drop: null,
			checkbox: null,
			labelText: null,
			btnReset: null,
			btnResetAll: null,
			tagsContainer: null,
			tagsItem: ".tags-item-js",
			tagsItemTpl: null,
			tagTextContainer: ".tag-text-js",

			dropOpenClass: 'is-open',
			filtersOnClass: 'filters-on',

			dataGroup: 'group',
			dataTag: 'tag',
			dataName: 'index',
			dataPrefix: 'prefix',
			dataPostfix: 'postfix'
		}, settings || {});

		this.options = options;
		var container = $(options.container);

		this.$container = container;
		this.$item = $(options.item, container);
		this.$handler = $(options.handler, container);
		this.$placeholder = $(options.placeholder, container);
		this.$selected = $(options.selected, container);
		this.$drop = $(options.drop, container);
		this.$group = $(options.group, container);
		this.$checkbox = $(options.checkbox, container);
		this.$labelText = $(options.labelText, container);
		this.$btnReset = $(options.btnReset, container);
		this.$btnResetAll = $(options.btnResetAll, container);
		this.$tagsContainer = $(options.tagsContainer, container);
		this.tagsItem = options.tagsItem; // не jq-объект, чтобы можна было искать в DOM после добавления
		this.tagTextContainer = options.tagTextContainer; // не jq-объект, чтобы можна было искать в DOM после добавления
		this.tagsItemTpl = !options.tagsItemTpl ?
			'<div class="' + options.tagsItem.substring(1) + '"><i>Удалить</i><span class="' + options.tagTextContainer.substring(1) + '"></span></div>' :
			options.tagsItemTpl ;

		this.modifiers = {
			dropIsOpened: options.dropOpenClass,
			filtersOn: options.filtersOnClass
		};

		this.attributes = {
			group: options.dataGroup,
			tag: options.dataTag,
			name: options.dataName,
			prefix: options.dataPrefix,
			postfix: options.dataPostfix
		};

		this.bindCheckboxEvents();
		this.bindTagsEvents();
		this.toggleDrop();
		this.resetCheckboxesInGroup();
		this.resetAllCheckboxes();
		// this.addClassCustom();

	};

	MultiFilters.prototype.dropIsOpened = false;

	MultiFilters.prototype.bindCheckboxEvents = function () {
		var self = this;
		var $container = self.$container;
		var $item = self.$item;
		var $group = self.$group;
		var $checkbox = self.$checkbox;
		var $btnReset = self.$btnReset;
		var filtersOnClass = self.modifiers.filtersOn;
		var attributes = self.attributes;

		$checkbox.on('change', function () {
			var $currentCheckbox = $(this);
			console.info('Checkbox is change...');
			var $currentContainer = $currentCheckbox.closest($container);
			var $currentItem = $currentCheckbox.closest($item);
			var $currentGroup = $currentCheckbox.closest($group);
			var $currentLabel = $currentCheckbox.closest('label');
			var $currentLabelText = $currentLabel.find(self.$labelText);
			var $currentTagsContainer = $currentContainer.find(self.$tagsContainer);

			// attributes
			var currentAttrGroup = $currentGroup.data(attributes.group);
			var currentAttrName = $currentLabel.data(attributes.name);
			var currentAttrTag = $currentLabel.data(attributes.tag);

			// buttons
			var $currentBtnReset = $currentItem.find($btnReset);
			var $currentBtnResetAll = $currentContainer.find(self.$btnResetAll);

			// отключить кнопку очистки чекбоксов в ГРУППЕ
			self.disabledButton($currentBtnReset);
			// удалить класс наличия отмеченных чекбоксов с фильтров в ГРУППЕ
			self.removeClassCustom($currentItem, filtersOnClass);

			// console.log("currentAttrGroup: ", currentAttrGroup);
			// console.log("currentAttrName: ", currentAttrName);

			if($currentCheckbox.prop('checked')) {
				// добавляем тэг фильтра
				self.addTag($currentTagsContainer, currentAttrGroup, currentAttrName, currentAttrTag || $currentLabelText.text());
			} else {
				self.removeTag($currentTagsContainer, currentAttrGroup, currentAttrName);
			}

			// отключить кнопку очистки ВСЕХ чекбоксов
			self.disabledButton($currentBtnResetAll);
			// удалить класс наличия отмеченных чекбоксов со ВСЕХ фильтров
			// self.removeClassCustom($item, filtersOnClass);

			if (self.checkProp($currentGroup)) {
				// включить кнопку очистки чекбоксов в ГРУППЕ
				self.enabledButton($currentBtnReset);
				// добавить класс наличия отмеченных чекбоксов с фильтров в ГРУППЕ
				self.addClassCustom($currentItem, filtersOnClass);
			}

			// включить кнопку очистки ВСЕХ чекбоксов
			if (self.checkProp($currentContainer.find($group))) {
				self.enabledButton($currentBtnResetAll);
			}

			// проверка омечены все чекбоксы, или не все
			// var $toggle = $currentGroup.find('.toggle-all-filters-js');
			// if (self.checkProp($currentGroup, true)) {
			// 	$toggle.prop('checked', true);
			// 	self.checkedToggleBtn($toggle, activeClass);
			// } else {
			// 	$toggle.prop('checked', false);
			// 	self.uncheckedToggleBtn($toggle, activeClass);
			// }

			self.setLengthCheckedCheckboxes($currentGroup);
		});
	};

	MultiFilters.prototype.checkProp = function ($group, cond) {
		// если cond === true, происходит сравнение количества все фильтров к отмеченым

		var $checkboxes = $group.find(':checkbox');
		var hasChecked = false;
		var countChecked = 0;

		$.each($checkboxes, function () {

			if ($(this).prop('checked')) {
				hasChecked = true;

				if (cond !== true) {
					return false;
				}

				countChecked++;
			}
		});

		return hasChecked;

		// if (cond === true) {
		// 	// если количества все фильтров равно количесту отмеченных, то возвращает true, иначе false
		// 	return $checkboxes.length === self.getTotalCheckedInputs($group);
		// } else {
		// 	return hasChecked;
		// }
	};

	MultiFilters.prototype.setLengthCheckedCheckboxes = function ($wrap) {
		var self = this;
		var $currentItem = $wrap.closest(self.$item);
		var $currentHolder = $currentItem.find(self.$placeholder);
		var $currentSelected = $currentItem.find(self.$selected);
		var attributes = self.attributes;
		var textPrefix = $currentSelected.data(attributes.prefix) || "";
		var textPostfix = $currentSelected.data(attributes.postfix) || "";

		var lengthChecked = self.getLengthCheckedCheckboxes($wrap);

		$currentSelected.html(textPrefix + " " + lengthChecked + " " + textPostfix);

		$currentHolder.toggle(!lengthChecked > 0);
		$currentSelected.toggle(lengthChecked > 0);
	};

	MultiFilters.prototype.getLengthCheckedCheckboxes = function ($wrap) {
		var $checkboxes = $wrap.find(':checkbox');

		var totalCheckedInput = 0;

		$.each($checkboxes, function () {

			if ($(this).prop('checked')) {

				totalCheckedInput++;
			}
		});

		return totalCheckedInput;
	};

	MultiFilters.prototype.bindTagsEvents = function () {
		var self = this;
		var $container = self.$container;
		var attributes = self.attributes;

		$container.on('click', self.tagsItem, function (e) {
			var $currentTag = $(this);
			self.removeTag($currentTag.closest(self.$tagsContainer), $currentTag.data(attributes.group), $currentTag.data(attributes.name));

			e.preventDefault();
		});
	};

	MultiFilters.prototype.resetCheckboxesInGroup = function () {
		var self = this;

		self.$btnReset.on('click', function (e) {
			e.preventDefault();

			var $currentBtn = $(this);

			self.resetCheckboxes($currentBtn.closest(self.$item));
		});
	};

	MultiFilters.prototype.resetAllCheckboxes = function () {
		var self = this;

		self.$btnResetAll.on('click', function (e) {
			e.preventDefault();

			var $currentBtn = $(this);

			self.resetCheckboxes($currentBtn.closest(self.$container).find(self.$group));
		});
	};

	MultiFilters.prototype.resetCheckboxes = function ($container) {
		$container.find(':checked').prop('checked', false).trigger('change');
	};

	MultiFilters.prototype.enabledButton = function ($button) {
		$button.prop('disabled', false);
	};

	MultiFilters.prototype.disabledButton = function ($button) {
		$button.prop('disabled', true);
	};

	MultiFilters.prototype.toggleDrop = function () {
		var self = this;
		var $container = self.$container;
		var $item = self.$item;
		var $handler = self.$handler;
		var $drop = self.$drop;
		var dropIsOpenedClass = self.modifiers.dropIsOpened;
		// window.preventAction = true;

		$handler.on('click', function (e) {
			e.preventDefault();
			e.stopPropagation();

			var $currentHandler = $(this);
			var $currentItem = $currentHandler.closest($item);

			if($currentItem.hasClass(dropIsOpenedClass)) {
				closeVisibleDrop();
				return;
			}

			closeVisibleDrop();
			openCurrentDrop($currentItem);
		});

		$(document).on('click', function () {
			closeVisibleDrop();
		});

		$(document).keyup(function(e) {
			// console.log('Is drop opened? - ', self.dropIsOpened);
			if (self.dropIsOpened && e.keyCode === 27) {
				closeVisibleDrop();
				// console.log('Drop closed!');
			}
		});

		$container.on('closeDrop', function () {
			closeVisibleDrop();
		});

		$($drop).on('click', function (e) {
			e.stopPropagation();
		});

		function openCurrentDrop($elements) {
			self.addClassCustom($elements, dropIsOpenedClass);
			self.dropIsOpened = true;
		}

		function closeVisibleDrop() {
			self.removeClassCustom($item, dropIsOpenedClass);
			self.dropIsOpened = false;
		}
	};

	MultiFilters.prototype.addClassCustom = function (elements, modifiersClass) {
		var self = this;

		$.each(elements, function () {
			$(this).addClass(modifiersClass);
		});
	};

	MultiFilters.prototype.removeClassCustom = function (elements, modifiersClass) {
		var self = this;

		$.each(elements, function () {
			$(this).removeClass(modifiersClass);
		});
	};

	MultiFilters.prototype.addTag = function ($tagsContainer, attrGroup, attrName, tag) {
		var self = this;
		var attributes = self.attributes;

		$(self.tagsItemTpl).clone()
			.find(self.tagTextContainer)
			.html(tag)
			.end()
			.attr('data-' + attributes.group, attrGroup)
			.attr('data-' + attributes.name, attrName)
			.appendTo($tagsContainer);
	};

	MultiFilters.prototype.removeTag = function ($tagsContainer, attrGroup, attrName) {
		var self = this;
		var attributes = self.attributes;

		var dataGroup = "[data-" + attributes.group + "=" + attrGroup + "]";
		var dataName = "[data-" + attributes.name + "=" + attrName + "]";
		var filtersValue = dataGroup + dataName;
		var $currentTag = $tagsContainer.find(self.tagsItem).filter(filtersValue);

		// отключить соответствующий чекбокс
		var b = $currentTag.closest(self.$container)
			.find(self.$group).filter(dataGroup)
			.find(dataName)
			.find(self.$checkbox).filter(':checked')
			.prop('checked', false)
			.trigger('change');

		// удалить тэг
		$currentTag.remove();
	};

	window.MultiFilters = MultiFilters;
}(jQuery));

/**
 * !multi filters initial
 * */
function multiFiltersInit() {
	var productFilters = '.p-filters-js';
	// var catalogMenuChangeTimeout;

	if ($(productFilters).length) {
		new MultiFilters({
			container: productFilters,
			item: '.p-filters-item-js',
			group: '.p-filters-group-js',
			handler: '.p-filters-select-js',
			placeholder: '.p-filters-placeholder-js',
			selected: '.p-filters-selected-js',
			drop: '.p-filters-drop-js',
			checkbox: '.p-filters-drop-list input[type="checkbox"]',
			labelText: '.p-filters-label-text-js',
			btnReset: '.btn-reset-js',
			btnResetAll: '.btn-clear-filters-js',
			tagsContainer: '.p-filters-tags-js',
			tagsItem: '.p-filters-tags-item-js',
			tagTextContainer: '.p-filters-tag-text-js',
			tagsItemTpl: '<div class="p-filters-tags__item p-filters-tags-item-js"><i>Удалить</i><span class="p-filters-tag-text-js"></span></div>',


			dropOpenClass: 'p-filters-is-open',
			filtersOnClass: 'p-filters-on',

			dataGroup: 'filters-group',
			dataTag: 'filter-tag',
			dataName: 'filter-name',
			dataPrefix: 'value-prefix',
			dataPostfix: 'value-postfix'
		})
	}
}
/*multi filters initial end*/

/**
 * !sorting
 * */
function sortingOrder() {
	var $sortingContainer = $('.sorting-js');
	var _ascending = 'order-asc',
		_descending = 'order-desc';
	var activeClass = 'active';

	var $sortingItems = $('.sorting-thumbs-js li');

	$sortingItems.on('click', function (e) {
		e.preventDefault();

		var $this = $(this);
		if (!$this.hasClass(activeClass)) {
			$sortingItems.removeClass(activeClass);
			$this.addClass(activeClass);

			return;
		}

		var $thisSortingContainer = $this.closest($sortingContainer);

		$thisSortingContainer.toggleClass(_ascending + ' ' + _descending)
	})
}
/** sorting end */

/**
 * fotorama init
 * */
function fotoramaInit() {
	var $gallery = $('.gallery-js');

	$.each($gallery, function () {
		var $this = $(this);

		var $galleryFotorama = $this.fotorama({
			click: false,
			nav: 'thumbs',
			allowfullscreen: true,
			// arrows: 'always',
			thumbmargin: 20,
			thumbwidth: 100,
			thumbheight: 100,
			thumbfit: 'contain',
			thumbborderwidth: 3,
			ratio: 1/1
		});

		// Get the API object.
		// var fotorama = $galleryFotorama.data('fotorama');

		// Inspect it in console.
		// $this.on('click', '.fotorama__grab', function (e) {
		// 	e.preventDefault();
		// 	fotorama.requestFullScreen();
		// })
	})
}
/** fotorama init end */

/**
 * !loadList
 * */
function loadList(){

	var $container = $('.show-container-js');
	var $list = $('.show-list-js');
	var $btnShow = $('.btn-show-js');
	var hideClass = 'hidden-item';
	var activeClass = 'active';

	$.each($list, function () {
		var $currentList = $(this);
		var minHideLength = $currentList.data('min-hide-item') || 1;
		var $hiddenItems = $currentList.find('a:gt(' + (+$currentList.data('show-item') - 1) + ')');

		var hiddenItemLength = $hiddenItems.length || $currentList.find('.' + hideClass).length || 0;

		var actualHideItemLength = hiddenItemLength < minHideLength ? 0 : hiddenItemLength;

		if (actualHideItemLength > 0 && $currentList.attr('data-show-item')) {
			$hiddenItems
				.hide(0)
				.addClass(hideClass);
		}

		// var tpl;
		// switch (actualHideItemLength) {
		// 	case 1:
		// 		tpl = 'категория';
		// 		break;
		// 	case 2:
		// 	case 3:
		// 	case 4:
		// 		tpl = 'категории';
		// 		break;
		// 	default:
		// 		tpl = 'категорий';
		// }

		var $currentBtn = $currentList.closest($container).find($btnShow);
		var $currentBtnContent = '<span>' + $currentBtn.data('text') + '</span> <i>' + actualHideItemLength + '</i>';
		$currentBtn
			.html($currentBtnContent)
			.attr('data-content', $currentBtnContent)
			.toggle(!!actualHideItemLength);
	});

	$btnShow.on('click', function (e) {
		var $currentBtn = $(this);
		var $currentContainer = $currentBtn.closest($container);
		var $currentList = $currentContainer.find($list);
		var $currentHiddenItems = $currentList.find('.' + hideClass);

		$currentHiddenItems.stop()
			.slideToggle();

		$currentBtn.stop()
			.toggleClass(activeClass);

		if ( $currentBtn.hasClass(activeClass) ) {
			$currentBtn.html('<span>' + $currentBtn.attr('data-hide') + '</span>');
		} else {
			$currentBtn.html($currentBtn.attr('data-content'));
		}

		e.preventDefault();
	})
}
/* loadList */

/**
 * !radio switcher
 * */
function radioSwitcher() {

	var $radioSwitcher = $('.radio-switcher-js');
	var $radioSwitcherHand = $('.radio-switcher__head-js');
	var activeClass = 'is-open';

	if ($radioSwitcherHand.length) {
		$radioSwitcher.each(function () {
			var $thisContainer = $(this);
			var $thisHand = $thisContainer.find($radioSwitcherHand);
			var $thisToggler = $thisHand.find('input[type="radio"]');

			$thisToggler.on('change', function (e) {
				e.preventDefault();

				var $currentToggler = $(this);

				if ($currentToggler.prop('checked')) {
					$thisHand.removeClass(activeClass);
					$currentToggler.closest($thisHand).addClass(activeClass);
				}
			})
		});

		$radioSwitcherHand.find('input[type="radio"]').each(function () {
			$(this).trigger('change');
		})
	}
}
/*radio switcher end*/

/**
 * !add new field
 * */
function addNewField() {
	var $container = $('.add-field-group-js');
	var $addFieldBtn = $('.add-field-js');

	function addField($element) {
		$element.prev().append(
			$('script[data-template="field-tpl"]').html()
		);

		$element.prev().find('.input-wrap').last().find('input').focus();
	}

	$addFieldBtn.on('click', function (event) {
		event.preventDefault();
		var $this = $(this);
		addField($this);
	});

	$container.on('click', '.remove-field-js', function (event) {
		event.preventDefault();
		$(this).closest('.input-wrap').remove();
	})
}

/**
 * init non-blocking notifications
 */
// (function () {
// 	var addToCartMsg = {
// 		'title': 'Корзина',
// 		'text': 'Количество товара обновлено'
// 	};
// 	toastr.options = {
// 		"closeButton": false,
// 		"positionClass": "toast-bottom-left",
// 		"timeOut": "222000"
// 	};
// 	toastr.info(addToCartMsg.text, addToCartMsg.title);
// })();

/**
 * !footer at bottom
 * */
(function () {
	var $footer = $('.footer__holder');

	if ($footer.length) {
		$('.main__holder').append($('<div class="spacer"></div>')); // need for sidebar's element sticky of bottom page

		setTimeout(function () {
			layoutFooter();
			$($footer).addClass('isBottoming');
		}, 50);

		$(window).on('resizeByWidth', function () {
			layoutFooter();
		});

		function layoutFooter() {
			// var footerHeight = $('.footer__holder', $footer).outerHeight();
			var footerHeight = $($footer).outerHeight();
			// $footer.css({
			// 	'margin-top': -footerHeight
			// });

			$('.spacer').css({
				'height': footerHeight,
				'pointer-events': 'none', 'float': 'left',
				'width': '100%'
			});
		}
	}
})();
/*footer at bottom end*/

/**
 * !form success for example
 * */
function formSuccessExample() {
	var $form = $('.user-form form, .callback-form form, .tabs-light__panel form');

	if ( $form.length ) {

		$form.submit(function (event) {
			var $thisForm = $(this);

			if ($thisForm.parent().hasClass('success-form')) return;

			event.preventDefault();

			testValidateForm($thisForm);
		});

		// $(':text, input[type="email"], textarea', $form).on('keyup change', function () {
		// 	var $form = $(this).closest('form');
		// 	if ($form.parent().hasClass('error-form')) {
		// 		testValidateForm($form);
		// 	}
		// })

	}

	function testValidateForm(form) {
		var $thisFormWrap = form.parent();

		var $inputs = $(':text, input[type="email"], input[type="password"], textarea, select', form);

		var inputsLength = $inputs.length;
		var inputsHasValueLength = $inputs.filter(function () {
			return $(this).val().length;
		}).length;

		$thisFormWrap.toggleClass('error-form', inputsLength !== inputsHasValueLength);
		$thisFormWrap.toggleClass('success-form', inputsLength === inputsHasValueLength);

		$.each($inputs, function () {
			var $thisInput = $(this);
			var thisInputVal = $thisInput.val();
			var $thisInputWrap = $thisInput.parent();

			$thisInput.toggleClass('error', !thisInputVal.length);
			$thisInput.toggleClass('success', !!thisInputVal.length);

			$thisInputWrap.toggleClass('error', !thisInputVal.length);
			$thisInputWrap.toggleClass('success', !!thisInputVal.length);
		});
	}
}
/* form success for example end */

/** ready/load/resize document **/


$(window).on("load", function () {
	scrollToSection();
});

$(window).on('load debouncedresize', function () {
	var $navItem = $('.side-menu-drop a');
	var $sectionItems = $('.c-section-items a');

	if ($navItem.length) {
		changeHref($navItem);
	}
	if ($sectionItems.length) {
		changeHref($sectionItems);
	}
});

$(function () {
	objectFitInit();
	placeholderInit();
	inputToggleFocusClass();
	inputHasValueClass();
	// inputFilledClass();
	fileInput();
	printShow();
	customSelect($('select.cselect'));
	slidersInit();
	equalHeightInit();
	fullPageInitial();
	popupsInit();
	sideMenuEvents();
	catalogMenuEvents();
	choicerInit();
	simpleAccordInit();
	multiAccordionInit();
	tabSwitcher();
	toggleView();
	spinnerInit();
	onlyNumberInput();
	multiFiltersInit();
	sortingOrder();
	fotoramaInit();
	loadList();
	radioSwitcher();
	addNewField();

	mainMapInit();
	mainMapEAInit();

	formSuccessExample();
});