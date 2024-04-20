gsap.registerPlugin(ScrollTrigger);

gsap.from('.col-4',{
    y: 400,
    duration: 2,
    opacity: 0,
    ease: "bounce.out",
    stagger: .15,
    scrollTrigger: {
        trigger:'.flex-container',
        start: "top 80%",
    }
});
gsap.from('.col-5',{
    y: 400,
    duration: 2,
    opacity: 0,
    ease: "bounce.out",
    stagger: .15,
    scrollTrigger: {
        trigger:'.flex-container',
        start: "top 80%",
    }
});

gsap.to('.centered', {
    duration:2.5,
    ease: "bounce.out",
    y: -100
});


