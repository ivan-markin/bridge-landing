export function isWebp() {
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    let className = support === true ? "webp" : "no-webp";
    document.documentElement.classList.add(className);
  });    
}

export function popupToggler() {
	function closeOnEsc(e) {
		if (e.key === 'Escape' || e.key === 'Esc') {
			document.querySelector('.gcc-popup').classList.remove('active');
      document.body.classList.remove('fixed');
		}
	}
	
	document.querySelector('.hero__main-btn').addEventListener('click', (e) => {
		e.preventDefault();
		document.querySelector('.gcc-popup').classList.add('active');
    document.body.classList.add('fixed');
		document.addEventListener('keydown', closeOnEsc);
	})
	
	document.querySelectorAll('.popup-toggler').forEach(el => {
		el.addEventListener('click', () => {
			document.querySelector('.gcc-popup').classList.remove('active');
      document.body.classList.remove('fixed');
			document.removeEventListener('keydown', closeOnEsc);
		})
	})
}

export function floatMenuToggler() {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header_main');    
    
    if (scrollY > 900) {
      header.classList.add('float');      
    } else {
      header.classList.remove('float'); 	      
    }   
  })
}

export function clientWidthPropertyHandler() {
  function setClientWidthProperty() {
    const root = document.documentElement;
    root.style.setProperty('--screenWidth', root.clientWidth + 'px');
  }  
  setClientWidthProperty();  
  window.addEventListener('resize', setClientWidthProperty);
}

export function mobileMenuHandler() {
  const menuPopupEl = document.querySelector('.mobile-menu');
  
  document.querySelector('.menu-open').addEventListener('click', () => {    
    menuPopupEl.classList.add('active');	
    document.body.classList.add('fixed');
  })
  
  document.querySelector('.menu-close').addEventListener('click', () => {    
    menuPopupEl.classList.remove('active');	
    document.body.classList.remove('fixed');
  })
}

export function openSubmitForm() {
  const form = document.querySelector('.submit-form');

  function closeOnEsc(e) {
		if (e.key === 'Escape' || e.key === 'Esc') {
			document.querySelector('.submit-form').classList.remove('active');
      document.body.classList.remove('fixed');
		}
	}
		
	document.querySelectorAll('.close-form').forEach(el => {
		el.addEventListener('click', () => {
			document.querySelector('.submit-form').classList.remove('active');
      document.body.classList.remove('fixed');
			document.removeEventListener('keydown', closeOnEsc);
      document.querySelector('.submit-form__error').classList.remove('active');                
      document.querySelector('.submit-form__success').classList.remove('active');                
		})
	})
  
  document.querySelectorAll('.open-form').forEach(el => {
    el.addEventListener('click', () => {
      form.classList.add('active');
      document.body.classList.add('fixed');
      document.addEventListener('keydown', closeOnEsc);
    })
  })
}