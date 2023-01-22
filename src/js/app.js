import * as flsFunctions from "./modules/functions.js";
import smoothscroll from 'smoothscroll-polyfill';

const sortSelectBtn = document.querySelector('#sortSelectBtn');
const burgerBtn = document.querySelector('.mobile-menu-btn');
const mobileMenuClose = document.querySelector('.mobile-menu__close');
const btnSelectBtn = document.querySelector('.btn-select__btn');
const popupCloseButtons = document.querySelectorAll('.popup__close');
const popups = document.querySelectorAll('.popup');
const selectElems = Array.from(document.querySelectorAll('.select'));
const btnSelectElems = Array.from(document.querySelectorAll('.btn-select'));
const selectArr = selectElems.concat(btnSelectElems);
const chooseTokenBtn = document.querySelector('.choose-token-button');
const moreBtn = document.querySelector('#moreTokensBtn');

flsFunctions.isWebp();
smoothscroll.polyfill();
flsFunctions.newsBlockWidth();

// sortSelectBtn.addEventListener('click', flsFunctions.selectHandler);
window.addEventListener('resize', flsFunctions.newsBlockWidth);
burgerBtn.addEventListener('click', flsFunctions.mobileMenuHandler().open);
mobileMenuClose.addEventListener('click', flsFunctions.mobileMenuHandler().close);
btnSelectBtn.addEventListener('click', flsFunctions.selectHandler);

chooseTokenBtn.addEventListener('click', (evt) => {
	const popup = document.querySelector('.top-up-popup');

	evt.preventDefault();
	popup.classList.add('active');
	document.body.classList.add('fixed');
})

if (moreBtn) {
  moreBtn.addEventListener('click', (evt) => {
    const popup = evt.target.closest('.popup').querySelector('.switch-network-popup');
    popup.style.height = '100vh';
    popup.classList.add('active');
  })
}

popups.forEach(el => {
	el.addEventListener('click', flsFunctions.popupCloseHandler);
})

popupCloseButtons.forEach(el => {
	el.addEventListener('click', flsFunctions.popupCloseHandler);
})

document.addEventListener('keydown', (evt) => {  	
	selectArr.forEach(el => {
		if (evt.key === 'Escape') el.classList.remove('active');		
	})
	
	popups.forEach(el => {
		if (evt.key === 'Escape') el.classList.remove('active');
		document.body.classList.remove('fixed');
  })        
})

// document.addEventListener('click', (evt) => {
// 	if (!evt.target.classList.contains('select') || !evt.target.closest('.select') || 
// 			!evt.target.classList.contains('btn-select') || !evt.target.closest('.btn-select')) {
		
// 		selectArr.forEach(el => el.classList.remove('active'));
// 	}
// })
