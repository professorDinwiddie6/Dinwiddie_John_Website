
gsap.registerPlugin(ScrollTrigger)

gsap.from('.card', {
    y: 400,
    opacity: 0,
    duration: 5,
    ease:"power4.out",
    stagger: .15,
    scrollTrigger: {
        trigger: ".container-flex",
        start: "top 80%",
        markers: true,
    }
});

gsap.from ('#image', {
    xPercent: -400,
    duration: 5,
    opacity: 0,
    ease: "power4.out"

});

gsap.from ('text',{
    xPercent:100,
    duration: 5,
    opacity: 0,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "flex-container",
        start: "top 80%",
        markers: true,
    }
});

gsap.from ('.scale--anim', {
    scale: 100,
    duration: 1,
    ease: "power4.out",
});