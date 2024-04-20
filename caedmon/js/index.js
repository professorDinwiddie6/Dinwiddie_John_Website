gsap.registerPlugin(ScrollTrigger)

gsap.from('.yellow-box',{
    y: 400,
    opacity: 0,
    duration: 5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".container-flex",
        start: "top 50%",
        markers: false,
        scrub: true,
    }
})

gsap.from('.visit-btn',{
    duration:2.5,
    ease: "power3.out",
    x: "100%",
    scrollTrigger: {
        trigger: ".flex-container",
        start: "top 80%",
        scrub: true,
    }
})

gsap.from('.delivery-btn',{
    duration:2.5,
    ease: "back.out(1.7)",
    x: "400%",
    scrollTrigger: {
        trigger: ".flex-container",
        start: "top 80%",
        scrub: true,
    }
})

gsap.from('.review',{
    y: 1400,
    opacity: 0,
    duration: 8,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".container-flex",
        start: "top 40%",
        markers: false,
        scrub: true,
    }
})