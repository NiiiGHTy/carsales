var swiper = new Swiper(".f", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop:true,
  grabCursor : true,
  centeredSlides : true,
  
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0 : {
      slidesPerView: 1
      
    },
    768: {
      slidesPerView: 2,
   
    },
    991: {
      slidesPerView: 3,
    
    },
  },
});