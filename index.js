let slide_1 = $("#slide_1");
let slide_2 = $("#slide_2")
let slide_3 = $("#slide_3")
let slide_4 = $("#slide_4").hide()
let slide_5 = $("#slide_5").hide()
let slide_6 = $("#slide_6").hide()


let slideNow = 3;
let slideCount = $('#slidewrapper').children().length;
let asd = $('#slidewrapper').children()

// $(document).ready(function () {
//
// });
// || slideNow <= 0 || slideNow > slideCount

$("#next-btn").on("click", function () {
  if (slideNow < 3 ) {
    // slideNow = 4;
    console.log("axa")
  }
  else {
    console.log(slideNow)

    $('#slide_' + (slideNow - 2)).hide();
    $('#slide_' + ++slideNow).fadeIn();

  }



})

$('#prev-btn').on('click', function () {

  if (slideNow === slideCount) {
    slideNow = 4;
    $('#slide_' + (slideNow + 2)).hide();
    $('#slide_' + --slideNow).fadeIn();
    // $("#left-btn").attr('disabled', 'disabled');
    // $("#right-btn").removeAttr('disabled');
  } else {
    $('#slide_' + (slideNow + 2)).hide();
    $('#slide_' + --slideNow).fadeIn();
    console.log(slideNow)

  }


});

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
  teaCard.addClass('animate__animated wow  animate__jackInTheBox');
  barCard2.hide();
  event.preventDefault()
})


barCard.on('click', function () {
  hookahsCard.hide();
  snacksCard.hide();
  teaCard.hide();
  barCard2.css('display', 'flex');
  barCard2.addClass('animate__animated wow animate__jackInTheBox');
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
    hasError = true;
  } else {
    nameInput.css("border-color", "#6224df");
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
          orderSuccess.css('display', 'flex');
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