"use strict"
//< Меню бургер>==========================================================================================
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
if (iconMenu != null) {
	iconMenu.addEventListener('click', function (e) {
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		document.body.classList.toggle('_lock');
	});
};


//< Закрываем меню при нажатии на пункт меню, ссылки не работают>=====================================================================================
const menuLinks = document.querySelectorAll('.menu__link');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', function (e) {
			if (iconMenu.classList.contains('_active')) {
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
				document.body.classList.remove('_lock');

				e.preventDefault();
			}
		})
	})
}



function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();
