$(document).ready(function() {
	$('.header__burger').click(function(event){
		$('.header__burger,.nav__list').toggleClass('active');
		$('body').toggleClass('lock');
	});

	let slider = $("#reviewsSlider");

    slider.slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

    function onToggle(event) {
  if (event.target.open) {
    document.querySelectorAll(".accordion > details[open]").forEach((el) => {
      // Исключаем из перебора елемент который мы только что открыли
      if (el === event.target) {
        return;
      }

      // Закрываем все остальные елементы <details>
      el.open = false;
    });
  }
}

// Вешаем наблюдатель на все елементы <details> внутри акордиона
document
  .querySelectorAll(".accordion > details")
  .forEach((el) => el.addEventListener("toggle", onToggle));


});
				