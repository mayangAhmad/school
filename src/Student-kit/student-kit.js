function reveal() {
    var reveals = document.querySelectorAll("h1.class1-left, h4.class1-left, .others-detail, .others-detail1, .cinnamon1, .report-detail");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

document.addEventListener('DOMContentLoaded', function() {
   
    $('.room, .laundry, .drying-area, .bathroom').hide();

    $('#roombutton').click(function() {
        $('.room').show().siblings('.laundry, .drying-area, .bathroom').hide();

    $('html, body').animate({
        scrollTop: $('.room').offset().top + ($('.room').outerHeight() - $(window).height()) / 2
    }, 500);
});

    $('#laundrybutton').click(function() {
        $('.laundry').show().siblings('.room, .drying-area, .bathroom').hide();

    $('html, body').animate({
        scrollTop: $('.laundry').offset().top + ($('.laundry').outerHeight() - $(window).height()) / 2
    }, 500);
});

    $('#dryingbutton').click(function() {
        $('.drying-area').show().siblings('.laundry, .room, .bathroom').hide();

    $('html, body').animate({
        scrollTop: $('.drying-area').offset().top + ($('.drying-area').outerHeight() - $(window).height()) / 2
    }, 500);
});

    $('#bathroombutton').click(function() {
        $('.bathroom').show().siblings('.laundry, .drying-area, .room').hide();

    $('html, body').animate({
        scrollTop: $('.bathroom').offset().top + ($('.bathroom').outerHeight() - $(window).height()) / 2
    }, 500);
});

$(document).ready(function() {
    $('.general-content, .mahallah-content, .traffic-content').hide();

    $('.cinnamon1-image').click(function() {
        showAndScroll('.general-content');
    });

    $('.cinnamon2-image').click(function() {
        showAndScroll('.mahallah-content');
    });

    $('.cinnamon3-image').click(function() {
        showAndScroll('.traffic-content');
    });

    function showAndScroll(targetSelector) {
        $(targetSelector).show().siblings('.general-content, .mahallah-content, .traffic-content, .room-content').hide();

        $('html, body').animate({
            scrollTop: $(targetSelector).offset().top + ($(targetSelector).outerHeight() - $(window).height()) / 2
        }, 500);
    }
});
});
