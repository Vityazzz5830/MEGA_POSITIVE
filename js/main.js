$('.calculatesec_mainpage_content_main_rightpart_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  dots: false,
  infinite: false,
  nextArrow: $('.calculatesec_mainpage_content_main_rightpart_slider_next')
});

$('.podryadchiksec_mainpage_content_list').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  dots: false,
  infinite: false
});

var nameInputs = document.querySelectorAll('input[data-name-input]');

$(nameInputs).on('keypress', function() {
    var that = this;

    setTimeout(function() {
        var res = /[^аА-яЯ]/g.exec(that.value);
        console.log(res);
        that.value = that.value.replace(res, '');
    }, 0);
});


window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('input[data-tel-input]'), function(input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});






$(function() {
 let header = $('.header');
 let header_list = $('.header_navmenu_list');
 let header_phones = $('.header_rightpart_phones');
 let header_messengers = $('.header_rightpart_messengers');
 let header_btn = $('.header_rightpart_orderbtn');
 let hederHeight = header.height(); // вычисляем высоту шапки
  
 $(window).scroll(function() {
   if($(this).scrollTop() > 1) {
    header.addClass('header_fixed');
    header.addClass('header_background');
    header_list.addClass('header_navmenu_swipe');
    header_phones.addClass('header_phones_swipe');
    header_messengers.addClass('header_messengers_swipe');
    header_btn.addClass('header_btn_swipe');
    $('body').css({
       'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
    });
   } else {
    header.removeClass('header_fixed');
    header.removeClass('header_background');
    header_list.removeClass('header_navmenu_swipe');
    header_phones.removeClass('header_phones_swipe');
    header_messengers.removeClass('header_messengers_swipe');
    header_btn.removeClass('header_btn_swipe');
    $('body').css({
     'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
    })
   }
 });
});