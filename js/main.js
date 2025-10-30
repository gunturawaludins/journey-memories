AOS.init({
  duration: 1000,
  once: true
});

const swipers = document.querySelectorAll('.swiper');
swipers.forEach(sw => {
  new Swiper(sw, {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: { el: sw.querySelector('.swiper-pagination'), clickable: true },
    navigation: {
      nextEl: sw.querySelector('.swiper-button-next'),
      prevEl: sw.querySelector('.swiper-button-prev'),
    },
  });
});
