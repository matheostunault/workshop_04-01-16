  $(document).ready(function () {

  	// swiper
    var mySwiper1 = new Swiper ('.swiper-container-1', {
      direction: 'horizontal',   
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      loop: true
    });

    var mySwiper2 = new Swiper ('.swiper-container-2', {
      direction: 'horizontal',

      autoplay: 4000,
      effect: 'fade',
      loop: true
    });     

    var mySwiper3 = new Swiper ('.swiper-container-3', {
      direction: 'horizontal',
      slidesPerView: 3,
      slidesGroupe: 3,
      spaceBetween: 50,
      pagination: '.swiper-pagination',
      paginationClickable: true,
      loop: true,
      breakpoints: {
	    // when window width is <= 320px
	    1023: {
	      slidesPerView: 1,
      	  slidesGroupe: 1

	    },
	    // when window width is <= 480px
	    1279: {
	      slidesPerView: 2,
     	  slidesGroupe: 2

	    }
	    // // when window width is <= 640px
	    // 640: {
	    //   slidesPerView: 3,
     //  	  slidesGroupe: 3

	    // }
	  }
	})
      


    // mixItUp
    $('#Container').mixItUp();   

    // sticky menu 
    var homeHeight 	= $('#home').innerHeight();
    var navHeight 	= $('#navigation').innerHeight();
 	$(window).scroll(function () {
 		if ($(this).scrollTop() > homeHeight) { 
 			$('#service').css({
     			"padding-top"	: 100 + navHeight + "px"  
     		});
 			$('#navigation').addClass("fixNavigation");
 		} 
 		else {
     		$('#service').css({
     			"padding-top"	: "100px" 
     		});
     		$('#navigation').removeClass("fixNavigation");
 		} 
 	})
  });
