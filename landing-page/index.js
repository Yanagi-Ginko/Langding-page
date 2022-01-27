

// --- Animations --- //
AOS.init();


// --- Logo  --- //
gsap.from(".logo", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
});

// --- Nav-menu --- //
gsap.from(".menu-list .menu-items", {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
  stagger: 0.3,
});


// --- heading --- //
gsap.from(".descript-heading", {
  opacity: 0,
  y: 20,
  delay: 2.4,
  duration: 1,
});

// --- info ---  //
gsap.from(".info-text", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
});

// --- Buttons --- //
gsap.from(".btn-wrapper", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
});

// --- Image --- //
gsap.from(".img-wrapper img", {
  opacity: 0,
  y: 20,
  delay: 3,
  duration: 1,
});
