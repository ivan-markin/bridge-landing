import * as flsFunctions from "./modules/functions.js";
import smoothscroll from 'smoothscroll-polyfill';

const sortSelectBtn = document.querySelector('#sortSelectBtn');

flsFunctions.isWebp();
smoothscroll.polyfill();

sortSelectBtn.addEventListener('click', flsFunctions.selectHandler);
