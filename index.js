

let stocks_1 = $("#stocks_1");
let stocks_2 = $("#stocks_2");
let stocks_3 = $("#stocks_3");
let circleMenu = $('.circle-btns_menu');
circleMenu.addClass('hidden');

const stocks = [stocks_1, stocks_2, stocks_3];

let interior_1 = $("#interior_1");
let interior_2 = $("#interior_2");
let interior_3 = $("#interior_3");
let interior_4 = $("#interior_4");
let circleInterior = $('.circle-btns_interior');

const interior = [interior_1, interior_2, interior_3, interior_4];
circleInterior.addClass('hidden');

let prevBtn = $("#prev-btn");
let nextBtn = $("#next-btn");
let circleBtns = $(".circle-btns");
circleBtns.addClass('hidden');

const slides = $('.slide').toArray();
console.log(slides)

slides.forEach((slide, index) => {
  $(slide).css('order', index + 1);
})

nextBtn.on("click", function () {
  const slide = slides.shift();
  slides.push(slide);
  slides.forEach((slide, index) => {
    $(slide).css('order', index + 1);
  })
})

prevBtn.on("click", function () {
  const slide = slides.pop();
  slides.unshift(slide);
  slides.forEach((slide, index) => {
    $(slide).css('order', index + 1);
  })
})

let circleBtn = $(".circle-btn");
circleBtn.addClass('hidden');



for (let i = 0; i < slides.length; i++) {
  let buttonCircle = document.createElement("button");
  buttonCircle.setAttribute('class', 'btn circle-btn');
  buttonCircle.onclick = function () {
    slides.forEach((slide, index) => {
      let currentOrder =  +window.getComputedStyle(slide).order;
      $(slide).css('order', index + 1);

      if (index === i) {
        $(slide).css('order', '1');
      } else {
        $(slide).css('order', currentOrder + 1);
      }
    });
  }
  circleBtns.append(buttonCircle);
}


for (let i = 0; i < stocks.length; i++) {
  let buttonCircle = document.createElement("button");
  buttonCircle.setAttribute('class', 'btn circle-btn');
  buttonCircle.onclick = function () {
    stocks.forEach((item, index) => {
      if (index === i) {
        item.show();
      } else {
        item.hide();
      }
    })
  }
  circleMenu.append(buttonCircle);
}


for (let i = 0; i < interior.length; i++) {
  let buttonCircle = document.createElement("button");
  buttonCircle.setAttribute('class', 'btn circle-btn');
  buttonCircle.onclick = function () {
    interior.forEach((item, index) => {
      if (index === i) {
        item.show();
      } else {
        item.hide();
      }
    })
  }
  circleInterior.append(buttonCircle);
}

  $( document ).ready(function() {
    console.log( "ready!" );
  });

window.onresize = function (event) {
  if (window.screen.width >= 1149) {
    circleBtn.addClass('hidden');
    prevBtn.removeClass('hidden');
    nextBtn.removeClass('hidden');
    circleBtns.addClass('hidden');
    circleMenu.addClass('hidden');
    circleInterior.addClass('hidden');
    stocks[1].show();
    stocks[2].show();
    interior[1].show();
    interior[2].show();
    interior[3].show();

  }

  else if (window.screen.width <= 1149 && window.screen.width > 858) {
    circleBtn.addClass('hidden');
    prevBtn.removeClass('hidden');
    nextBtn.removeClass('hidden');
    circleBtns.addClass('hidden');
    circleMenu.addClass('hidden');
    circleInterior.addClass('hidden');
    stocks[0].show();
    stocks[1].show();
    stocks[2].show();
    interior[1].show();
    interior[2].show();
    interior[3].show();

    // activeSlides = [0, 1];
  }


  else if (window.screen.width <= 858) {
    prevBtn.addClass('hidden');
    nextBtn.addClass('hidden');
    circleBtns.removeClass('hidden');
    circleMenu.removeClass('hidden');
    circleInterior.removeClass('hidden');
    stocks[1].hide();
    stocks[2].hide();
    interior[1].hide();
    interior[2].hide();
    interior[3].hide();
  }
};

if (window.screen.width <= 858) {
  prevBtn.addClass('hidden');
  nextBtn.addClass('hidden');
  circleBtns.removeClass('hidden');
  circleMenu.removeClass('hidden');
  circleInterior.removeClass('hidden');
  stocks[1].hide();
  stocks[2].hide();
  interior[1].hide();
  interior[2].hide();
  interior[3].hide();
}

let hookahs = $("#hookahs");
let snacks = $("#snacks");
let tea = $("#tea");
let barCard = $("#bar_card");
let hookahsCard = $("#cards-1");
let snacksCard = $("#cards-2");
let teaCard = $("#cards-3");
let barCard2 = $("#cards-4");

snacksCard.hide();
teaCard.hide();
barCard2.hide();

menuItems = [hookahsCard, snacksCard, teaCard, barCard2];


function menuHandleClick(element, event) {
  menuItems.forEach(item => item.hide());
  element.css('display', 'flex');
  element.addClass('animate__animated wow animate__fadeInUp');
  event.preventDefault();
}


hookahs.on('click', function (event) {
  menuHandleClick(hookahsCard, event);
})

snacks.on('click', function (event) {
  menuHandleClick(snacksCard, event);

})

tea.on('click', function () {
  menuHandleClick(teaCard, event);

})


barCard.on('click', function () {
  menuHandleClick(barCard2, event);
})


let nameInput = $("#name_input");
let phoneInput = $("#phone_input");
let order = $("#order");
let orderSuccess = $("#order-success");
let loader = $(".loader");
$(phoneInput).inputmask({"mask": "+375 (99) 999-99-99"});
nameInput.attr("placeholder", "Ваше имя");
phoneInput.attr("placeholder", "Ваш телефон");

phoneInput.mouseleave(function(){
  phoneInput.attr("placeholder", "Ваш телефон");
});

function checkInput(input) {
  if (!input.val()) {
    input.css("border-color", "#ff0000");

    return true;
  } else {
    input.css("border-color", "#6224df");
    return false;
  }
}

$('#booking_btn').on('click', function (e) {

  let hasError = false;
  $('.text-error').hide();

  if (checkInput(nameInput)) {
    hasError = true;
    nameInput.attr("placeholder", "Введите ваше имя!");

  }

  if (checkInput(phoneInput)) {
    phoneInput.attr("placeholder", "Введите ваш телефон!");
    hasError = true;
  }


  if (!hasError) {
    loader.css('display', 'flex');
    $.ajax({
      method: "POST",
      url: "https://testologia.site/checkout",
      data: {name: nameInput.val(), phone: phoneInput.val()}
    })
      .done(function (msg) {
        loader.hide();
        console.log(msg)
        if (msg.success !== 1) {
          alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
          // location.reload();
        } else {
          order.css('display', 'none');
          orderSuccess.css('display', 'flex').css('justify-content', 'center');
        }
      });
  }
  e.preventDefault();
})



$('#burger').on('click', function () {
  $('#header_navigation').css('display', 'block');
})

document.querySelectorAll('#header_navigation *').forEach((item) => {
  item.onclick = () => {
    $('#header_navigation').css('display', 'none');
  }
})