gsap.registerPlugin(ScrollTrigger);

gsap.from('#hero',{
    x: -600,
    duration: 3,
    ease: "power4.out",
 })
 gsap.from('#nav',{
    y: -200,
    duration: 3,
    ease: "power4.out",
 })
 gsap.from('#def',{
    x: -400,
    duration: 3,
    opacity: 0,
    ease: "power4.out",
    scrollTrigger: {
        trigger: '.def',
        start: "top 70%",
    }
})
gsap.from('.def_img',{
    x: 400,
    duration: 3,
    opacity: 0,
    ease: "power4.out",
    scrollTrigger: {
        trigger: '.def',
        start: "top 50%",
    }
})
gsap.from('#info',{
    y: 600,
    duration: 3,
    opacity: 0,
    ease: "power4.out",
    scrollTrigger: {
        trigger: '.information',
        start: "top 90%",
    }
})
gsap.from('#menu',{
    x: 600,
    duration: 3,
    opacity: 0,
    ease: "power4.out",
    scrollTrigger: {
        trigger: '#men',
        start: "top 90%",
    }
})
gsap.from('#one',{
    x: -600,
    duration: 3,
    opacity: 0,
    ease: "power4.out",
    scrollTrigger: {
        trigger: '#menu',
        start: "top 80%",

    }
})
gsap.from('#two',{
    x: 600,
    duration: 3,
    opacity: 0,
    ease: "power4.out",
    scrollTrigger: {
        trigger: '#menu',
        start: "top 80%",
    }
})
gsap.from('#three',{
    x: -600,
    duration: 3,
    opacity: 0,
    ease: "power4.out",
    scrollTrigger: {
        trigger: '#one',
        start: "top 80%",
    }
})
gsap.from('#four',{
    x: 600,
    duration: 3,
    opacity: 0,
    ease: "power4.out",
    scrollTrigger: {
        trigger: '#one',
        start: "top 80%",
    }
})
gsap.from('#five',{
    x: -600,
    duration: 3,
    opacity: 0,
    ease: "power4.out",
    scrollTrigger: {
        trigger: '#three',
        start: "top 80%",
    }
})
gsap.from('#six',{
    x: 600,
    duration: 3,
    opacity: 0,
    ease: "power4.out",
    scrollTrigger: {
        trigger: '#three',
        start: "top 80%",
    }
})
gsap.from('.skiptheline',{
    x: 600,
    duration: 3,
    opacity: 0,
    ease: "power4.out",
    scrollTrigger: {
        trigger: '.orange',
        start: "top 80%",
    }
})
gsap.from('#rev',{
    x: 600,
    duration: 3,
    opacity: 0,
    ease: "power4.out",
    scrollTrigger: {
        trigger: '#trig',
        start: "top 80%",
    }
})
gsap.from('#Chelsea',{
    x: -600,
    duration: 3,
    opacity: 0,
    ease: "power4.out",
    scrollTrigger: {
        trigger: '#rev',
        start: "top 80%",
    }
})
gsap.from('#Jodie',{
    y: 600,
    duration: 3,
    opacity: 0,
    ease: "power4.out",
    scrollTrigger: {
        trigger: '#rev',
        start: "top 80%",
    }
})
gsap.from('#Alvin',{
    x: 600,
    duration: 3,
    opacity: 0,
    ease: "power4.out",
    scrollTrigger: {
        trigger: '#rev',
        start: "top 80%",
    }
})

