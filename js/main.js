// const swiperOurServices = new Swiper('.swiper', {
//     loop: true,
//     grabCursor:true,
//     slidesPerView:3,
    
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },

//     breakpoints:{
//         964:{
//             slidesPerView:3,
//             centeredSlides:'auto',
//         },
//         1884:{
//             centeredSlides:'auto',
//             spaceBetween:32,
//         }
//     }

// });
const welcomeElement = document.getElementById("welcome");

welcomeElement.addEventListener("animationend", () => {
  setTimeout(() => {
    welcomeElement.style.display = "none";
  }, 1800);
});