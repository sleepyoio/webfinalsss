var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto", // Automatically adjusts slides per view based on screen size
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 2,
      slideShadows: true,
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      thresholdDelta: 70,
    },

    autoplay: {
      delay: 3000, // Delay between slides (in milliseconds)
      disableOnInteraction: false, // Keep autoplay active even when interacting with the swiper
    },



    spaceBetween: 20, // Adjust space between slides for responsiveness
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });