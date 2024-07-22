var t1 = gsap.timeline();

t1.from("#nav h2", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    delay: 0.5
})

t1.from("#nav #part2 h4", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    stagger: 1
})

t1.from("#main h1", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    scale: 2
})

gsap.to("#page2 h1", {
    transform: "translate(-150%)",
    scrollTrigger: {
        trigger: "#page2",//tigger must be applied on parent
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin: true
    }

})

var path = `M 10 300 Q 95 300 180 300`;
var finalPath = `M 10 300 Q 95 300 180 300`;

var string = document.getElementById("string");
string.addEventListener("mouseenter", function (dets) {
    path = `M 10 300 Q ${dets.x} ${dets.y} 180 300`;
    gsap.to("svg path", {
        attr: {
            d: path
        },
        duration: 0.2,
        ease: "power3.out",

    })
})
string.addEventListener("mouseleave", function () {
    gsap.to("svg path", {
        attr: {
            d: finalPath
        },
        duration: 1.5,
        ease: "elastic.out(1,0.2)",

    })
})