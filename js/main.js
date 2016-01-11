  $(document).ready(function () {
    //initialize swiper when document ready  
    var mySwiper1 = new Swiper ('.swiper-container-1', {
      // Optional parameters
      direction: 'horizontal',   
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      loop: true
    });

    var mySwiper2 = new Swiper ('.swiper-container-2', {
      // Optional parameters
      direction: 'horizontal',
      autoplay: 4000,
      spaceBetween: 400,
      effect: 'fade',
      loop: true
    });     

    var mySwiper3 = new Swiper ('.swiper-container-3', {
      // Optional parameters
      direction: 'horizontal',
      pagination: '.swiper-pagination',
      loop: true
    });   

    $('#Container').mixItUp();     
  });