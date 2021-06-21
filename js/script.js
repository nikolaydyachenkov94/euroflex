window.addEventListener('DOMContentLoaded', function() {

	/* TabS */

	const divs = document.querySelectorAll('.tabcontent__item'),
		tabsParent = document.querySelector('.tabheader__items'),
		tabs = document.querySelectorAll('.tabheader__item'),
		prevTab = document.querySelector('.tab__arrow_prev'),
		nextTab = document.querySelector('.tab__arrow_next');

	function hideTabs() {
		divs.forEach(div => {
			div.classList.remove('tabcontent__item_active');
		});
	}

	function showTabs(i = 0) {
		tabs.forEach(tab => {
			tab.classList.remove('tabheader__item_active');
		});
		tabs[i].classList.add('tabheader__item_active');
		divs[i].classList.add('tabcontent__item_active');
	}

	hideTabs();
	showTabs();

	tabsParent.addEventListener('click', (e) => {
		let target = e.target.closest('.tabheader__item');
		if (target) {
			tabs.forEach((tab, i) => {
				if (target === tab) {
					hideTabs();
					showTabs(i);	
				}
			});
		}
	});

	function changeTab(n) {
		const current = document.querySelector('.tabheader__item_active');
		tabs.forEach((tab, i) => {
			if (current === tab) {
					if (current === tabs[0] && n === - 1) {
						hideTabs();
						showTabs(tabs.length - 1);
						return;
					}
					if (current === tabs[tabs.length - 1] && n === 1) {
						hideTabs();
						showTabs(0);
						return;
					}
					hideTabs();
					showTabs(i+n);
			}		
		});		
	}

	prevTab.addEventListener('click', () => {
		changeTab(-1);
	});

	nextTab.addEventListener('click', () => {
		changeTab(1);
	});

	/* Solutions */

	const solutionsCloseBtn = document.querySelector('.solutions__btn'),
		solutionCards = document.querySelector('.solutions__cards'),
		solutionsSpans = document.querySelectorAll('.solutions__text-red');

	solutionsCloseBtn.addEventListener('click', () => {
		solutionCards.classList.toggle('hidden');
		solutionsCloseBtn.classList.toggle('solutions__btn_rotate');
		solutionsSpans.forEach(span => {
			span.classList.toggle('hidden');
		});
	});

	/* Swiper */

	new Swiper('.image-slider',{
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		slidesPerView: 5,
		spaceBetween: 20,
		breakpoints: {
			319: {
				slidesPerView: 1,
			},
			767: {
				slidesPerView: 3
			},
			991: {
				slidesPerView: 5
			}
		}
	});

	/* Popup */

	const closePopup = document.querySelector('.popup__close'),
		popupOpenBtn = document.querySelectorAll('.popup-open'),
		popup = document.querySelector('.popup');

	popupOpenBtn.forEach(btn => {
		btn.addEventListener('click', () => {
			popup.classList.remove('hidden');
			document.body.style.overflow = 'hidden';
		});
	});

	closePopup.addEventListener('click', () => {
		popup.classList.add('hidden');
		document.body.style.overflow = '';
	});


	/*Scroll*/

	const navLinks = document.querySelectorAll('.nav__link[data-goto]');
	if (navLinks.length > 0) {
		navLinks.forEach(navLink => {
			navLink.addEventListener('click', onLinkClick);
		});

	function onLinkClick(e) {
		const target = e.target;
		if (target.dataset.goto && document.querySelector(target.dataset.goto)){
			const gotoBlock = document.querySelector(target.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
			}
		}
	}

	/* Burger */

	document.querySelector('.burger').addEventListener('click', () => {
		document.querySelector('.burger span').classList.toggle('active');
		document.querySelector('.nav__menu').classList.toggle('show__nav-menu');
	});

});	
