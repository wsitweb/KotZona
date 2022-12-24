const burger = document.querySelectorAll('.burger');
const headerNav = document.querySelectorAll('.header__nav');
const body = document.querySelectorAll('body');
burger.forEach((e, i) => {
	e.addEventListener('click', () => {
		if(e.classList == 'burger'){
			e.classList.add('active');
			headerNav[i].classList.add('active');
			body[i].classList.add('active');
		}else{
			e.classList.remove('active');
			headerNav[i].classList.remove('active');
			body[i].classList.remove('active');
		}
	});
});
