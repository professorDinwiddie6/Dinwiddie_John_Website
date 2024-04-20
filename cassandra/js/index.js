gsap.registerPlugin(scrolltrigger);

gsap.from('header', {
    opacity:0,
    y: -50,
    duration: 1,
    ease: "power4.out",
})

gsap.from('nav a', {
    opacity:0,
    y: -50,
    duration: 1,
    ease: "power4.out",
    stagger: 0.2,
})

gsap.from('social-icons img', {
    opacity:0,
    y: -50,
    duration: 1,
    ease: "power4.out",
    stagger: 0.2,
})
