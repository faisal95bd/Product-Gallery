$('.gallery-parent').each(function () {
  let thumbs = $(this).children('.gallery-thumbs'),
    top = $(this).children('.gallery-top');

  let galleryThumbs = new Swiper(thumbs, {

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

    spaceBetween: 10,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      0: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
    },
  });
  let galleryTop = new Swiper(top, {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });

  // change carousel item height
  // gallery-top
  // if(window.matchMedia("(max-width: 1024px)").matches){
  let productCarouselTopWidth = top.outerWidth();
  top.css('height', productCarouselTopWidth);

  // gallery-thumbs
  let productCarouselThumbsItemWith = thumbs.find('.swiper-slide').outerWidth();
  thumbs.css('height', productCarouselThumbsItemWith);
  // }

  // else {
  //   top.css('width', '380px');
  //   thumbs.css('height', '85px');
  // }

});