//dropdown
let lists = document.querySelectorAll('.menu__list-item')
for (let item of lists) {
	if (item.querySelector('.arrow')) {
	item.addEventListener('click', () => {
		let arrow = item.querySelector('.arrow')
		arrow.classList.toggle('arrow_active');
		item.querySelector('.dropdown').classList.toggle('dropdown_active')
		console.log(1);
	})
}
}
//burger
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
function showMenu() {
  burger.classList.toggle("burger_active");
  menu.classList.toggle("menu");
  menu.classList.toggle("menu-burger");
}
burger.addEventListener('click', showMenu);
//promo-line
const promo_close = document.querySelector('.promo-line__close');
promo_close.addEventListener('click', () => promo_close.closest('.header').classList.add('_hide'));
//search-form
let search_btn = document.querySelector('.header__search');
search_btn.addEventListener('click', () => {
	let search_form_input = document.querySelector('.search-form__input');
	search_form_input.classList.toggle('search-form__input_active');
})
//swiper

const swiper_inst = new Swiper('.instagram__swiper-container', {
	slidesPerView: 5,
spaceBetween: 3,
	loop: false,
	navigation: {
        nextEl: '.instagram__next',
        prevEl: '.instagram__prev',
      },
	breakpoints: {
	  480: {
		slidesPerView: 3,
		spaceBetween: 3,
	  },}
});