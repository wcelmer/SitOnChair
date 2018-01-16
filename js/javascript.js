document.addEventListener('DOMContentLoaded', function(){

  //ukrywanie listy w navigacji

  var hideList = document.getElementById('list');
  hideList.addEventListener('mouseover', function(){
    console.log('działa')

    var hideElement = document.getElementById('nav-hide');
    hideElement.style.display= "block";

    hideList.addEventListener('mouseleave', function(){
    hideElement.style.display="none";
    });
  });

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
        }
      }

    //slide to prev img

    function moveBack() {
      $slideContainer.css({'margin-left': '-='+width});
      --currentSlide;
        if (currentSlide === -$slides.length+2) {
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
        }
      }


    $button_right
      .on('click', moveForward)
      .on('mouseover', pauseSlider);

    $button_left
      .on('click', moveBack)
      .on('mouseover', pauseSlider);

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();

  });

});
