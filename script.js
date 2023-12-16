function pointerEffect() {
  var pContent = document.querySelector("#p1-content");
  var pointer = document.querySelector("#pointer");

  pContent.addEventListener("mousemove", function (detail) {
    gsap.to(pointer, {
      x: detail.x,
      y: detail.y,
    });
  });

  pContent.addEventListener("mouseenter", function () {
    gsap.to(pointer, {
      scale: 1,
      opacity: 1,
    });
  });

  pContent.addEventListener("mouseleave", function () {
    gsap.to(pointer, {
      scale: 0,
      opacity: 0,
    });
  });
}
pointerEffect();

function pointer2Effect() {
  var p4Content = document.querySelector("#page4");
  var pointer2 = document.querySelector(".pointer2");

  p4Content.addEventListener("mousemove", function (det) {
    gsap.to(pointer2, {
      x: det.x,
      y: det.y,
    });
  });

  p4Content.addEventListener("mouseenter", function () {
    gsap.to(pointer2, {
      scale: 1,
      opacity: 1,
    });
  });

  p4Content.addEventListener("mouseleave", function () {
    gsap.to(pointer2, {
      scale: 0,
      opacity: 0,
    });
  });
}
pointer2Effect();

let tl = gsap.timeline();

function p2Animation() {
  tl.from("#EM2 span", {
    y: 80,
    stagger: 0.2,
    duration: 1,
    opacity: 0,
    ease: "power2.out",
  });
}

ScrollTrigger.create({
  trigger: "#EM2",
  start: "top center",
  end: "bottom center",
  animation: tl,
  scrub: 1,
});

p2Animation();

function swiperdiv() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,

    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: true,
    },
    speed: 6000,
  });
}

swiperdiv();

var tl2 = gsap.timeline();
tl2.from("#loader h3", {
  x: 40,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
});

tl2.to("#loader h3", {
  opacity: 0,
  x: -10,
  stagger: 0.1,
  duration: 1,
});

tl2.to("#loader", {
  opacity: 0,
});

tl2.from("#p1-content h1 span", {
  y: 100,
  opacity: 0,
  stagger: 0.1,
  duration: 0.5,
  delay: -0.5,
});

tl2.to("#loader", {
  display: "none",
});

tl2.from("#p6-top h2", {
  y: 50,
  opacity: 0,
  stagger: 0.1,
  duration: 0.5,
  delay: -0.5,
});

let tl3 = gsap.timeline();

function p3Animation() {
  tl3.from("#EM3 span", {
    y: 80,
    stagger: 0.2,
    duration: 1,
    opacity: 0,
    ease: "power2.out",
  });
}

ScrollTrigger.create({
  trigger: "#EM3",
  start: "top center",
  end: "bottom center",
  animation: tl3,
  scrub: 1,
});

p3Animation();

let tl4 = gsap.timeline();

function p4Animation() {
  tl4.from("#EM4 span", {
    y: 80,
    stagger: 0.2,
    duration: 1,
    opacity: 0,
    ease: "power2.out",
  });
}

ScrollTrigger.create({
  trigger: "#EM4",
  start: "top center",
  end: "bottom center",
  animation: tl4,
  scrub: 1,
});

p4Animation();

function headerAnimation() {
  document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector("#p1-content h4");
    const header = document.querySelector("#header");
    const closeButton = document.querySelector("#sp h3");

    gsap.set(header, { display: "none", height: 0 });

    menuButton.addEventListener("click", function () {
      gsap.to(header, {
        height: "70vh",
        display: "block",
        ease: "power2.inOut",
      });
    });

    closeButton.addEventListener("click", function () {
      gsap.to(header, { height: 0, display: "none", ease: "power2.inOut" });
    });
  });
}
headerAnimation();
