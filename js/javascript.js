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


  // DROPDOWN

  function dropdown() {

    var button = $('.dropbtn');
    var links_name = $('.links_name').find('a');
    var links_color = $('.links_color').find('a');
    var links_material = $('.links_material').find('a');
    var checked = $('input');
    var amount = $('.numbers div');

    function showList(e) {
      e.preventDefault();
      $(this).parent().parent().next('div').toggle();
    }

    function addName(e) {
      e.preventDefault();
      var price = $(this).data('price');
      var this_name = $(this).text();

      $('.name_chair_choose').text(this_name);
      $('.name_chair_numb').text(price);
    }
    function addColor(e) {
      e.preventDefault();
      var price = $(this).data('price');
      var this_name = $(this).text();

      $('.color_choose').text(this_name);
      $('.color_numb').text(price);
    }
    function addMaterial(e) {
      e.preventDefault();
      var price = $(this).data('price');
      var this_name = $(this).text();

      $('.material_choose').text(this_name);
      $('.material_numb').text(price);
    }
    function addTransport(e) {
      e.preventDefault();

      var price = $(this).data('price');
      var this_name = $(this).data('text');

      $('.transport_numb').text(price);
      $('.transport_choose').text(this_name);
    }
    function finalPrice() {
      var total = 0;
      $('.numbers div').each(function() {
        total += ($(this).text());
      });
      $('.final_price').text(total);
    }


    button
      .on('click', showList);

    links_name
      .on('click', addName);

    links_color
      .on('click', addColor);

    links_material
      .on('click', addMaterial);

    checked
      .on('change', addTransport);

    amount
      .on('click', finalPrice)
      .on('click', function() {
        console.log('działa');
      });

  }
  dropdown();

});
