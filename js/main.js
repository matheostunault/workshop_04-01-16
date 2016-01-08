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
      loop: true
    });        
  });