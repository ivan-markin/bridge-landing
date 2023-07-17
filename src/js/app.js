import * as flsFunctions from "./modules/functions.js";
import smoothscroll from 'smoothscroll-polyfill';
import Swiper, {Navigation, Pagination, EffectFade} from "swiper";
import Aos from "aos";

const dataSwiper = new Swiper('.data__content', {
	modules: [EffectFade, Navigation],
	effect: 'fade',
  fadeEffect: {
    crossFade: true
  },	
	speed: 700,
	slidesPerView: 1,	
	navigation: {
		nextEl: '.data__next-btn',
    prevEl: '.data__prev-btn',
	}
})

const stepsSlider = new Swiper('.steps__description', {
	modules: [EffectFade, Navigation, Pagination],
	effect: 'fade',
  fadeEffect: {
    crossFade: true
  },	
	speed: 300,	
	slidesPerView: 1,	
	pagination: {
    el: '.steps__slider-pagination',
    type: 'bullets',
  },
	navigation: {
		nextEl: '.steps__slider-btn_next',
		prevEl: '.steps__slider-btn_prev',
	}	
})

const examplesSlider = new Swiper('.examples__tab-content', {
	modules: [EffectFade],
	effect: 'fade',
  fadeEffect: {
    crossFade: true
  },	
	speed: 300,
	slidesPerView: 1,		
})

Aos.init();

stepsSlider.on('slideChange', () => {
	const stepsElems = document.querySelectorAll('.steps__list-item');

	stepsElems.forEach((el, i) => {
		el.classList.remove('active');
		
		if (stepsSlider.activeIndex === i) {
			el.classList.add('active');
		}
	})
})

document.querySelectorAll('.steps__list-item').forEach((el, i) => {
	el.addEventListener('click', (e) => {
		document.querySelectorAll('.steps__list-item').forEach(el => {
			el.classList.remove('active');
		})
		e.target.classList.add('active');
		stepsSlider.slideTo(i);
	})
})

document.querySelectorAll('.examples__tabs-item').forEach((el, i) => {
	el.addEventListener('click', (e) => {
		let currentEl = e.target.closest('.examples__tabs-item');
		let previousSiblingEl = currentEl.previousSibling.previousSibling;
		
		document.querySelectorAll('.examples__tabs-item').forEach(el => {
			el.classList.remove('active');
			el.style.borderWidth = '3px';
		})
		
		currentEl.classList.add('active');		
		
		if (previousSiblingEl) {
			previousSiblingEl.style.borderWidth = '0';						
			previousSiblingEl
				.querySelector('.examples__tabs-item-header')
				.style.height = '123px';						
		}

		examplesSlider.slideTo(i);
	})
})

examplesSlider.on('slideChange', () => {	
	document.querySelectorAll('.examples__tabs-item').forEach((el, i) => {
		el.classList.remove('active');
		
		if (examplesSlider.activeIndex === i) {
			el.classList.add('active');
		}
	})
})

document.querySelectorAll('.faq-toggler').forEach(el => {
	el.addEventListener('click', (e) => {		
		e.target.closest('.faq__list-item').classList.toggle('active');
	})
})

window.addEventListener('scroll', () => {
	const container = document.querySelector('.features__list');	
	const images = document.querySelectorAll('.features__image-item');

	let section1 = document.getElementById('featureSection1').offsetTop;
	let section2 = document.getElementById('featureSection2').offsetTop;
	let section3 = document.getElementById('featureSection3').offsetTop;
	let section4 = document.getElementById('featureSection4').offsetTop;
	let section5 = document.getElementById('featureSection5').offsetTop;
	let section6 = document.getElementById('featureSection6').offsetTop;
	
	if (scrollY > container.offsetTop && scrollY < container.offsetTop + container.offsetHeight) {									

		images.forEach(img => {
			img.classList.remove('active');
		})
		
		if (scrollY < section1 ) {
			images.forEach(img => {
				img.classList.remove('active');
			})
			document.getElementById('img-1').classList.add('active');
		}	

		if (scrollY > section1 && scrollY < section2) {
			images.forEach(img => {
				img.classList.remove('active');
			})
			document.getElementById('img-2').classList.add('active');
		}	
		
		if (scrollY > section2 && scrollY < section3) {
			images.forEach(img => {
				img.classList.remove('active');
			})
			document.getElementById('img-3').classList.add('active');
		}	
		
		if (scrollY > section3 && scrollY < section4 ) {
			images.forEach(img => {
				img.classList.remove('active');
			})
			document.getElementById('img-4').classList.add('active');
		}
		
		if (scrollY > section4 && scrollY < section5 ) {
			images.forEach(img => {
				img.classList.remove('active');
			})
			document.getElementById('img-5').classList.add('active');
		}	
		
		if (scrollY > section5 && scrollY < section6) {
			images.forEach(img => {
				img.classList.remove('active');
			})
			document.getElementById('img-6').classList.add('active');
		}								
	}			

	if (scrollY > 3000) {
		document.querySelector('.back-to-top-btn').classList.add('shown');
	} else document.querySelector('.back-to-top-btn').classList.remove('shown');
})

document.querySelector('.back-to-top-btn').addEventListener('click', () => {
	scrollTo({
		top: 0,
		behavior: 'smooth'
	})
})

flsFunctions.isWebp();
// flsFunctions.popupToggler();
flsFunctions.floatMenuToggler();
flsFunctions.clientWidthPropertyHandler();
flsFunctions.mobileMenuHandler();
// flsFunctions.openSubmitForm();
smoothscroll.polyfill();