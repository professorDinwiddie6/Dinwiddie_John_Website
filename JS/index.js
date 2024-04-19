gsap.registerPlugin(ScrollTrigger);

gsap.from('.card', {
    y: 400,
    opacity: 0,
    ease: "power4.inout",
    duration: 10,
    stagger: .25,
    scrollTrigger: {
        trigger: ".container-flex",
        start: "top 80%",
        scrub: .5,
        end: "bottom 80%",
    }
});

gsap.from('.image', {
    xPercent: -145,
    duration: 7,
    opacity: 0,
    ease: "power4.inout",
    scrollTrigger: {
        markers: true,
        trigger: ".flex-container",
        start: "bottom 10%",
    }

})

gsap.from('.image2', {
    xPercent: 190,
    duration: 7,
    opacity: 0,
    ease: "power4.inout",
    scrollTrigger: {
        markers: true,
        trigger: ".flex-container",
        start: "bottom 10%",
    }
})