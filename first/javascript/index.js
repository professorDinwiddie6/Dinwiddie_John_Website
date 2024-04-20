// $(document).ready(function(){
//     $("#mobile-button").click(function(){
//         $("#mobile-menu").slideDown("slow");
//     });
//     $("#close-menu").click(function(){
//         $("#mobile-menu").slideUp("slow");
//     });
// });


gsap.registerPlugin(ScrollTrigger);

// const animFadeUp = (trigger, el, delay) => {
//     let tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: trigger,
//             toggleActions: "play none none none",
//             start: "top 80%",
//         },
//     })
//     tl.from(el, {
//         y: 200,
//         opacity: 0,
//         duration: 2,
//         delay: delay,
//     });
// }

// animFadeUp('#chosilog', '#chosilog', 0 );
// animFadeUp('#kaldereta', '#kaldereta', 0.25 );
// animFadeUp('#chicharo', '#chicharo', 0 );
// animFadeUp('#custom', '#custom', 0.25 );

// gsap.from('#chosilog', {
//     scrollTrigger: {
//         trigger: '.food-container',
//         toggleActions: "play none none none",
//         start: "top 80%",
//     },
//     y: 200,
//     opacity: 0,
//     duration: 2,
//     delay: .25,
// });

gsap.from({
    y: 200,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#fade-trigger-1",
        toggleActions: "play none none none",
        start: "top 80%",
    }, 
});


// const fadeAnims = gsap.utils.toArray('.fade--anim');

// fadeAnims.forEach(anim => {
//     gsap.from(anim, { 
//         y: 200,
//         opacity: 0,
//         duration: 2,
//         scrollTrigger: {
//             trigger: anim,
//         }
//     });
// });


// ScrollTrigger.batch(".menu--item", {
//     onEnter: elements => {
//         gsap.from(elements, {
//             autoAlpha: 0,
//             y: 60,
//             stagger: 0.15,
//             duration: 1,
//             delay: .25,
//         });
//     },
//     once: true
//   });

// const AnimFadeUp = gsap.utils.toArray('.fade--up');
// AnimFadeUp.forEach((el) => {
//     gsap.from(el, {
//         scrollTrigger: {
//             start: 'top 80%',
//             end: 'bottom top',
//             trigger: el,
//             toggleClass: 'active'
//         }
//     });
// });





