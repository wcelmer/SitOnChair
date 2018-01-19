document.addEventListener('DOMContentLoaded', function(){

  //ukrywanie listy w navigacji

  var $hidenList = $('#list-show');
  var $hideElement = $('#nav-hide');

  function showNav() {
    $hideElement.css('display', 'block');
  }
  function hideNav() {
    $hideElement.css('display', 'none');
  }

  $hidenList
    .on('mouseover', showNav)
    .on('mouseleave', hideNav);

  $(function() {

    //slider settings
    var width = 400;
    var animationSpeed = 1200;
    var pause = 3500;
    var currentSlide = 1;

    //DOM elements
    var $slider = $('.slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    //Buttons

    var $button_left = $('.description').find('#left_switch');
    var $button_right = $('.description').find('#right_switch');


    //slider auto function

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {

                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }

    //silder pause
    function pauseSlider() {
        clearInterval(interval);
    }

    // slide to next img

    function moveForward() {
      $slideContainer.css({'margin-left': '-='+width});
      ++currentSlide;
        if (currentSlide === $slides.length) {
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
        } else if (currentSlide == 0) {
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
        }
      }

    //slide to prev img

    function moveBack() {
      $slideContainer.css({'margin-left': '-='+width});
      --currentSlide;
        if (currentSlide === -$slides.length+2) {
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
        } else if (currentSlide == 0) {
          currentSlide = 3;
          $slideContainer.css('margin-left', -400);
        }
      }


    $button_right
      .on('click', moveForward)
      .on('mouseover', pauseSlider)
      .on('mouseleave', startSlider);

    $button_left
      .on('click', moveBack)
      .on('mouseover', pauseSlider)
      .on('mouseleave', startSlider);

    $slideContainer
      .on('mouseenter', pauseSlider)
      .on('mouseleave', startSlider);

    startSlider();

  });

});
