window.onload = function () {
  new WOW({
    animateClass: 'animate__animated',
  }).init();

  $(document).ready(function () {
    $('.card-image').magnificPopup(
      {
      type: 'image',
        zoom: {
          enabled: true,
          duration: 300 // don't foget to change the duration also in CSS
        }
    },

    )
  })


  $(document).on("click", "nav a", function(e) {
    e.preventDefault();
    let id  = $(this).attr('href');
    let top = $(id).offset().top; // получаем координаты блока
    $('body, html').animate({scrollTop: top}, 800); // плавно переходим к блоку
  });
}