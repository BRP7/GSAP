// function loading() {
//     var t1=gsap.timeline();
    
//     t1.to("#yellow1",{
//         top:"-100%",
//         delay:0.5,
//         duration:1,
//         ease:"expo.out"
//     })
//     t1.from("#loader #yellow2",{
//         top:"100%",
//         delay:0.5,
//         duration:0.5,
//         ease:"expo.out"
//     },"anim")
//     t1.to("#loader h1",{
//         color:"black",
//         duration:0.5,
//         delay:0.5
//     },"anim")
//     t1.to("#loader",{
//         opacity:0,
    
//     }) 
//     // t1.to("#loader",{
//     //     display:none,
    
//     // }) 
// }
// loading();
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

// let elem=document.querySelectorAll(".elem");
// let page2=document.querySelector("#page2");
// elem.forEach((elem)=>{
//     elem.addEventListener("mouseenter",function () {
//         let bgimg =elem.getAttribute("data-img");
//         console.log(bgimg);
//         page2.style.backgroundImage=`url(${bgimg})`;
//     })
// })


/*function loading() {
    var t1 = gsap.timeline();
    
    t1.to("#yellow1", {
        top: "-100%",
        delay: 0.5,
        duration: 1,
        ease: "expo.out"
    });
    t1.from("#loader #yellow2", {
        top: "100%",
        delay: 0.5,
        duration: 0.5,
        ease: "expo.out"
    }, "anim");
    t1.to("#loader h1", {
        color: "black",
        duration: 0.5,
        delay: 0.5
    }, "anim");
    t1.to("#loader", {
        opacity: 0,
    });
}

// Call the loading function to initiate the loader animation
loading();

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let elem = document.querySelectorAll(".elem");
let page2 = document.querySelector("#page2");

elem.forEach((elem) => {
    elem.addEventListener("mouseenter", function () {
        let bgimg = elem.getAttribute("data-img");
        page2.style.backgroundImage = `url(${bgimg})`;
    });
});

// Basic GSAP animation for testing
gsap.from(".elem", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
});

// More animations can be added as needed


// console.log("Script is running!");

// const locoScroll = new LocomotiveScroll({
    //     el: document.querySelector("#main"), // Replace with your container selector
    //     smooth: true,
    // });
    // console.log(document.querySelector("#page2")); // Check if #page2 exists
    
    
    // // gsap.to('.moving', {
        // //     y: 100,
        // //     // scrollTrigger: {
            // //     //     trigger: '.moving',
            // //     //     start: 'top center',
            // //     //     end: 'bottom center',
            // //     //     scrub: 1,
            // //     // },
            // // });
            
            // console.log("Animation applied!");

            */
//            document.addEventListener('DOMContentLoaded', () => {
          
//     // Your script code here
//     console.log("Script is running!");
//     function loading() {
//     var t1=gsap.timeline();
    
//     t1.to("#yellow1",{
//         top:"-100%",
//         delay:0.5,
//         duration:1,
//         ease:"expo.out"
//     })
//     t1.from("#loader #yellow2",{
//         top:"100%",
//         delay:0.5,
//         duration:0.5,
//         ease:"expo.out"
//     },"anim")
//     t1.to("#loader h1",{
//         color:"black",
//         duration:0.5,
//         delay:0.5
//     },"anim")
//     t1.to("#loader",{
//         opacity:0,
    
//     }) 
//     // t1.to("#loader",{
//     //     display:none,
    
//     // }) 
// }
// loading();

//     const scroll = new LocomotiveScroll({
//         el: document.querySelector('#main'),
//         smooth: true
//     });
    
//     let elem=document.querySelectorAll(".elem");
//     let page2=document.querySelector("#page2");
//     elem.forEach((elem)=>{
//         elem.addEventListener("mouseenter",function () {
//             let bgimg =elem.getAttribute("data-img");
//             console.log(bgimg);
//             page2.style.backgroundImage=`url(${bgimg})`;
//         })
//     })

//     // gsap.to('.moving', {
//     //     y: 100,
//     // });

//     console.log("Animation applied!");

    
// });

// document.addEventListener('DOMContentLoaded', () => {
//     console.log("Script is running!");

//     function loading() {
//         console.log("Loading function started");
//         var t1 = gsap.timeline();

//         t1.to("#yellow1", {
//             top: "-100%",
//             delay: 0.5,
//             duration: 1,
//             ease: "expo.out"
//         });

//         t1.from("#loader #yellow2", {
//             top: "100%",
//             delay: 0.5,
//             duration: 0.5,
//             ease: "expo.out"
//         }, "anim");

//         t1.to("#loader h1", {
//             color: "black",
//             duration: 0.5,
//             delay: 0.5
//         }, "anim");

//         t1.to("#loader", {
//             opacity: 0,
//         });

//         console.log("Loading function completed");
//     }

//     loading();

//     const scroll = new LocomotiveScroll({
//         el: document.querySelector('#main'),
//         smooth: true
//     });

//     let elem = document.querySelectorAll(".elem");
//     let page2 = document.querySelector("#page2");

//     elem.forEach((elem) => {
//         elem.addEventListener("mouseenter", function () {
//             let bgimg = elem.getAttribute("data-img");
//             console.log(bgimg);
//             page2.style.backgroundImage = `url(${bgimg})`;
//         })
//     });

//     console.log("Animation applied!");
// });


// window.onload = function() {
//     console.log("Window loaded!");

//     function loading() {
//         console.log("Loading function started");
//         var t1 = gsap.timeline();

//         t1.to("#yellow1", {
//             top: "-100%",
//             delay: 0.5,
//             duration: 1,
//             ease: "expo.out"
//         });

//         t1.from("#loader #yellow2", {
//             top: "100%",
//             delay: 0.5,
//             duration: 0.5,
//             ease: "expo.out"
//         }, "anim");

//         t1.to("#loader h1", {
//             color: "black",
//             duration: 0.5,
//             delay: 0.5
//         }, "anim");

//         t1.to("#loader", {
//             opacity: 0,
//         });

//         console.log("Loading function completed");
//     }

//     loading();

//     const scroll = new LocomotiveScroll({
//         el: document.querySelector('#main'),
//         smooth: true
//     });

//     let elem = document.querySelectorAll(".elem");
//     let page2 = document.querySelector("#page2");

//     elem.forEach((elem) => {
//         elem.addEventListener("mouseenter", function () {
//             let bgimg = elem.getAttribute("data-img");
//             console.log(bgimg);
//             page2.style.backgroundImage = `url(${bgimg})`;
//         })
//     });

//     console.log("Animation applied!");
// };


// document.addEventListener('DOMContentLoaded', function () {
//     console.log("DOM content loaded!");

//     function loading() {
//         console.log("Loading function started");
//         var t1 = gsap.timeline();

//         t1.to("#yellow1", {
//             top: "-100%",
//             delay: 0.5,
//             duration: 1,
//             ease: "expo.out"
//         });

//         t1.from("#loader #yellow2", {
//             top: "100%",
//             delay: 0.5,
//             duration: 0.5,
//             ease: "expo.out"
//         }, "anim");

//         t1.to("#loader h1", {
//             color: "black",
//             duration: 0.5,
//             delay: 0.5
//         }, "anim");

//         t1.to("#loader", {
//             opacity: 0,
//         });

//         console.log("Loading function completed");
//     }

//     loading();

//     const scroll = new LocomotiveScroll({
//         el: document.querySelector('#main'),
//         smooth: true
//     });

//     let elem = document.querySelectorAll(".elem");
//     let page2 = document.querySelector("#page2");

//     elem.forEach((elem) => {
//         elem.addEventListener("mouseenter", function () {
//             let bgimg = elem.getAttribute("data-img");
//             console.log("Mouse entered .elem. Image URL:", bgimg);
//             page2.style.backgroundImage = `url(${bgimg})`;
//         });
//     });

//     console.log("Animation applied!");
// });


// document.addEventListener('DOMContentLoaded', function () {
//     console.log("DOM content loaded!");

//     function loading() {
//         console.log("Loading function started");
//         var t1 = gsap.timeline();

//         t1.to("#yellow1", {
//             top: "-100%",
//             delay: 0.5,
//             duration: 1,
//             ease: "expo.out"
//         });

//         t1.from("#loader #yellow2", {
//             top: "100%",
//             delay: 0.5,
//             duration: 0.5,
//             ease: "expo.out"
//         }, "anim");

//         t1.to("#loader h1", {
//             color: "black",
//             duration: 0.5,
//             delay: 0.5
//         }, "anim");

//         t1.to("#loader", {
//             opacity: 0,
//         });

//         console.log("Loading function completed");
//     }

//     loading();

//     const scroll = new LocomotiveScroll({
//         el: document.querySelector('#main'),
//         smooth: true
//     });

//     document.addEventListener("mouseenter", function (event) {
//         const target = event.target;
//         if (target.classList.contains("elem")) {
//             let bgimg = target.getAttribute("data-img");
//             console.log("Mouse entered .elem. Image URL:", bgimg);
//             document.querySelector("#page2").style.backgroundImage = `url(${bgimg})`;
//         }
//     });

//     console.log("Animation applied!");
// });



// document.addEventListener('DOMContentLoaded', function () {
//     console.log("DOM content loaded!");

//     function loading() {
//         console.log("Loading function started");
//         var t1 = gsap.timeline();

//         t1.to("#yellow1", {
//             top: "-100%",
//             delay: 0.5,
//             duration: 1,
//             ease: "expo.out"
//         });

//         t1.from("#loader #yellow2", {
//             top: "100%",
//             delay: 0.5,
//             duration: 0.5,
//             ease: "expo.out"
//         }, "anim");

//         t1.to("#loader h1", {
//             color: "black",
//             duration: 0.5,
//             delay: 0.5
//         }, "anim");

//         t1.to("#loader", {
//             opacity: 0,
//         });

//         console.log("Loading function completed");
//     }

//     loading();

//     const scroll = new LocomotiveScroll({
//         el: document.querySelector('#main'),
//         smooth: true
//     });

//     const container = document.querySelector(".elem"); // Replace with the actual container element
//     container.addEventListener("mouseenter", function (event) {
//         const target = event.target;
//         if (target && target.classList.contains("elem")) {
//             let bgimg = target.getAttribute("data-img");
//             console.log("Mouse entered .elem. Image URL:", bgimg);
//             document.querySelector("#page2").style.backgroundImage = `url(${bgimg})`;
//         }
//     });

//     console.log("Animation applied!");
// });


document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM content loaded!");

    function loading() {
        console.log("Loading function started");
        var t1 = gsap.timeline();

        t1.to("#yellow1", {
            top: "-100%",
            delay: 0.5,
            duration: 1,
            ease: "expo.out"
        });

        t1.from("#loader #yellow2", {
            top: "100%",
            delay: 0.5,
            duration: 0.5,
            ease: "expo.out"
        }, "anim");

        t1.to("#loader h1", {
            color: "black",
            duration: 0.5,
            delay: 0.5
        }, "anim");

        t1.to("#loader", {
            opacity: 0,
        });

        console.log("Loading function completed");
    }

    loading();

    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });

    const elemList = document.querySelectorAll(".elem");

    elemList.forEach((elem) => {
        elem.addEventListener("mouseenter", function () {
            let bgimg = elem.getAttribute("data-img");
            console.log("Mouse entered .elem. Image URL:", bgimg);
            document.querySelector("#page2").style.backgroundImage = `url(${bgimg})`;
        });
    });

    console.log("Animation applied!");
});
