// swiper
window.addEventListener("load", () => {
  const el = document.querySelector('[data-js="swiper"]');
  if (!el) return;

  new Swiper(el, {
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 1000,
    slidesPerView: 1,
  });
});
