// $(document).ready(function(){
//     $("#mobile-button").click(function(){
//         $("#mobile-menu").slideDown("slow");
//     });
//     $("#close-menu").click(function(){
//         $("#mobile-menu").slideUp("slow");
//     });
// });


gsap.registerPlugin(ScrollTrigger);

// const animations = ['#about-text', '#portfolio-text', '#experience-text'];

// const anim = animations.forEach(el => {
//     gsap.from(el, {
//         scrollTrigger: {
//             trigger: el,
//             toggleActions: "play none none none",
//             start: "20px 80%",
//             markers: true,
//         },
//         y: 200,
//         opacity: 0,
//         duration: 2
//     })
// });

gsap.from('#chosilog', {
    scrollTrigger: {
        trigger: '.food-container',
        toggleActions: "play none none none",
        start: "top 80%",
    },
    y: 200,
    opacity: 0,
    duration: 2,
    delay: .25,
});
gsap.from('#kaldereta', {
    scrollTrigger: {
        trigger: '.food-container',
        toggleActions: "play none none none",
        start: "top 80%",
    },
    y: 200,
    opacity: 0,
    duration: 2,
    delay: .5,
});
gsap.from('#chicharo', {
    scrollTrigger: {
        trigger: '.food-container',
        toggleActions: "play none none none",
        start: "top 80%",
    },
    y: 200,
    opacity: 0,
    duration: 2,
    delay: .75,
});
gsap.from('#custom', {
    scrollTrigger: {
        trigger: '.food-container',
        toggleActions: "play none none none",
        start: "top 80%",
    },
    y: 200,
    opacity: 0,
    duration: 2,
    delay: 1,
});
gsap.from('#blog-content-l', {
    scrollTrigger: {
        trigger: '.blog-container',
        toggleActions: "play none none none",
        start: "top 80%",
    },
    xPercent: -100,
    opacity: 0,
    duration: 2,
});
gsap.from('#blog-content-r', {
    scrollTrigger: {
        trigger: '.blog-container',
        toggleActions: "play none none none",
        start: "top 80%",
    },
    xPercent: 100,
    duration: 2,
    opacity: 0,
});
gsap.from('#blog-img-r', {
    scrollTrigger: {
        trigger: '.blog-container',
        toggleActions: "play none none none",
        start: "top 80%",
    },
    xPercent: 100,
    opacity: 0,
    duration: 2,
    delay: .25,
});
gsap.from('#blog-img-l', {
    scrollTrigger: {
        trigger: '.blog-container',
        toggleActions: "play none none none",
        start: "top 80%",
    },
    xPercent: -100,
    opacity: 0,
    duration: 2,
    delay: .25,
});
gsap.from('#review-1', {
    scrollTrigger: {
        trigger: '.testimonials-container',
        toggleActions: "play none none none",
        start: "top 80%",
    },
    y: 200,
    opacity: 0,
    duration: 2,
});
gsap.from('#review-2', {
    scrollTrigger: {
        trigger: '.testimonials-container',
        toggleActions: "play none none none",
        start: "top 80%",
    },
    y: 200,
    opacity: 0,
    duration: 2,
    delay: .25,
});
gsap.from('#review-3', {
    scrollTrigger: {
        trigger: '.testimonials-container',
        toggleActions: "play none none none",
        start: "top 80%",
    },
    y: 200,
    opacity: 0,
    duration: 2,
    delay: .5,
});
gsap.from('#blue-section-text', {
    scrollTrigger: {
        trigger: '.blue-section',
        toggleActions: "play none none none",
        start: "top 80%",
    },
    y: 200,
    opacity: 0,
    duration: 2,
    delay: .5,
});



