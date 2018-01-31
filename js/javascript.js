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

    //ZMIENNE DO PODPIĘCIA EVENTÓW

    var button = $('.dropbtn');
    var links_name = $('.links_name').find('a');
    var links_color = $('.links_color').find('a');
    var links_material = $('.links_material').find('a');
    var checked = $('input');
    var addedElements = $('.name_chair div');

    //ZMIENNE DO CACHOWANIA

    var name_c = $('.name_chair_choose');
    var name_n = $('.name_chair_numb');
    var color_c = $('.color_choose');
    var color_n = $('.color_numb');
    var material_c = $('.material_choose');
    var material_n = $('.material_numb');
    var transport_checkbox = $('#transport_checkbox');
    var transport_c = $('.transport_choose');
    var transport_n = $('.transport_numb');
    var picture = $('.picture');


    function showList(e) {
      e.preventDefault();
      $(this).parent().parent().next('div').toggle();
    }

    function addName(e) {
      e.preventDefault();
      var price = $(this).data('price');
      var this_name = $(this).text();

      name_c.text(this_name);
      name_n.html(price);
    }
    function addColor(e) {
      e.preventDefault();
      var price = $(this).data('price');
      var this_name = $(this).text();

      color_c.text(this_name);
      color_n.text(price);
    }
    function addMaterial(e) {
      e.preventDefault();
      var price = $(this).data('price');
      var this_name = $(this).text();

      material_c.text(this_name);
      material_n.text(price);
    }

    function addTransport(e) {
      e.preventDefault();

      if (transport_checkbox.prop('checked') === true) {
        var price = $(this).data('price');
        var this_name = $(this).data('text');

        transport_n.text(price);
        transport_c.text(this_name);
      }
      if (transport_checkbox.prop('checked') === false) {
        transport_n.empty();
        transport_c.empty();
      }
    }

    function finalPrice() {
      var val = 0;
      var tmp;
      $('.numbers label').each(function() {
        if ($(this).text().length === 0) {
          $(this).text('0');
        }
        tmp = parseInt($(this).text());
        parseInt(val);
        val += tmp;
      });
      $('.final_price').text(val);
    }

    function removeSet (){
      $(this).empty();

      if (name_c.text().length === 0) {
        name_n.empty();
      }
      if (color_c.text().length === 0) {
        color_n.empty();
      }
      if (material_c.text().length === 0) {
        material_n.empty();
      }
      if (transport_c.text().length === 0) {
        transport_n.empty();
        transport_checkbox.prop('checked', false);
      }
    }
    function changePicture() {
      if ($(this).text()=='Chair Clair') {
        picture.css("background-image", "url(../SitOnChair/images/red_chair.png)");
      }
      if ($(this).text()=='Chair Margarita') {
        picture.css("background-image", "url(../SitOnChair/images/slider/chair_PNG6875.png)");
      }
      if (($(this).text()=='Chair Selena')) {
        picture.css("background-image", "url(../SitOnChair/images/black_chair.png)");
      }
    }

    button
      .on('click', showList);

    links_name
      .on('click', addName)
      .on('click', changePicture)
      .on('click', finalPrice);

    links_color
      .on('click', addColor)
      .on('click', finalPrice);

    links_material
      .on('click', addMaterial)
      .on('click', finalPrice);

    checked
      .on('change', addTransport)
      .on('change', finalPrice);

    addedElements
      .on('click', removeSet)
      .on('click', finalPrice);

  }
  dropdown();

});
