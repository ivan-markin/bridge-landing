import * as flsFunctions from "./modules/functions.js";
import smoothscroll from 'smoothscroll-polyfill';

const sortSelectBtn = document.querySelector('#sortSelectBtn');
const burgerBtn = document.querySelector('.mobile-menu-btn');
const mobileMenuClose = document.querySelector('.mobile-menu__close');

flsFunctions.isWebp();
smoothscroll.polyfill();
flsFunctions.newsBlockWidth();

sortSelectBtn.addEventListener('click', flsFunctions.selectHandler);
window.addEventListener('resize', flsFunctions.newsBlockWidth);
burgerBtn.addEventListener('click', flsFunctions.mobileMenuHandler().open);
mobileMenuClose.addEventListener('click', flsFunctions.mobileMenuHandler().close);