let swiperOurServices = new Swiper('.main-our-services__content', {
    loop: true,
    grabCursor:true,
    slidesPerView:'auto',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        964:{
            slidesPerView:3,
            centeredSlides:'auto',
        },
        1884:{
            centeredSlides:'auto',
            spaceBetween:32,
        }
    }

});
const welcomeElement = document.getElementById("welcome");

welcomeElement.addEventListener("animationend", () => {
  setTimeout(() => {
    welcomeElement.style.display = "none";
  }, 1800);
});