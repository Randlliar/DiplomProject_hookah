let slide_1 = $("#slide_1");
let slide_2 = $("#slide_2");
let slide_3 = $("#slide_3");
let slide_4 = $("#slide_4").addClass('hidden');
let slide_5 = $("#slide_5").addClass('hidden');
let slide_6 = $("#slide_6").addClass('hidden');
let prevBtn = $("#prev-btn");
let nextBtn = $("#next-btn");
let circleBtns = $(".circle-btns");
circleBtns.addClass('hidden');

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


const slides = [slide_1, slide_2, slide_3, slide_4, slide_5, slide_6];

let activeSlides = [0, 1, 2];

nextBtn.on("click", function () {
  activeSlides = activeSlides.map((item) => {
    if (item === 5) {
      return 0;
    }

    return ++item;
  });
  slides.forEach((item, index) => {
    if (activeSlides.includes(index)) {
      item.removeClass('hidden');
    } else {
      item.addClass('hidden');
    }
  })
})

prevBtn.on("click", function () {
  activeSlides = activeSlides.map((item) => {
    if (item === 0) {
      return 5;
    }

    return --item;
  });
  slides.forEach((item, index) => {
    if (activeSlides.includes(index)) {
      item.removeClass('hidden');
    } else {
      item.addClass('hidden');
    }
  })
})

let circleBtn = $(".circle-btn");
circleBtn.addClass('hidden');


for (let i = 0; i < slides.length; i++) {
  let buttonCircle = document.createElement("button");
  buttonCircle.setAttribute('class', 'btn circle-btn');
  buttonCircle.onclick = function () {
    slides.forEach((item, index) => {
      if (index === i) {
        item.removeClass('hidden');
        item.fadeIn();

      } else {
        item.addClass('hidden');
      }
    })
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


window.onresize = function (event) {
  if (window.screen.width >= 1249) {
    slides[1].removeClass('hidden');
    slides[2].removeClass('hidden');
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

    activeSlides = [0, 1, 3];
  }

  if (window.screen.width <= 1249 && window.screen.width > 858) {
    slides[2].addClass('hidden');
    slides[1].removeClass('hidden');
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

    activeSlides = [0, 1];
  }


  if (window.screen.width <= 858) {
    slides[1].addClass('hidden');
    slides[2].addClass('hidden');
    activeSlides = [0];
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

hookahs.on('click', function (event) {
  hookahsCard.css('display', 'flex');
  hookahsCard.addClass('animate__animated wow animate__fadeInUp');
  snacksCard.hide();
  teaCard.hide();
  barCard2.hide();
  event.preventDefault()

})

snacks.on('click', function (event) {
  hookahsCard.hide();
  snacksCard.css('display', 'flex');
  snacksCard.addClass('animate__animated wow  animate__fadeInUp');
  teaCard.hide();
  barCard2.hide();
  event.preventDefault()
})

tea.on('click', function () {
  hookahsCard.hide();
  snacksCard.hide();
  teaCard.css('display', 'flex');
  teaCard.addClass('animate__animated wow  animate__fadeInUp');
  barCard2.hide();
  event.preventDefault()
})


barCard.on('click', function () {
  hookahsCard.hide();
  snacksCard.hide();
  teaCard.hide();
  barCard2.css('display', 'flex');
  barCard2.addClass('animate__animated wow animate__fadeInUp');
  event.preventDefault()
})


let nameInput = $("#name_input");
let phoneInput = $("#phone_input");
let order = $("#order");
let orderSuccess = $("#order-success");
let loader = $(".loader");
$(phoneInput).inputmask({"mask": "+375 (99) 999-99-99"});


$('#booking_btn').on('click', function (e) {

  let hasError = false;
  $('.text-error').hide();

  if (!nameInput.val()) {
    nameInput.next().show();
    nameInput.css("border-color", "#ff0000");
    hasError = true;
  } else {
    nameInput.css("border-color", "#6224df");
  }

  if (!phoneInput.val()) {
    phoneInput.next().show();
    phoneInput.css("border-color", "#ff0000");
    hasError = true;
  } else {
    phoneInput.css("border-color", "#6224df");
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

document.getElementById('burger').onclick = function () {
  document.getElementById('header_navigation').classList.add('open');
}

document.querySelectorAll('#header_navigation *').forEach((item) => {
  item.onclick = () => {
    document.getElementById('header_navigation').classList.remove('open');
  }
})
