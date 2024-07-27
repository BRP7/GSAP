var main = document.getElementById("main");
var cursor = document.getElementById("cursor");
var image = document.getElementById("overlay");

// Calculate page boundaries
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");

var rectPage1 = page1.getBoundingClientRect();
var rectPage2 = page2.getBoundingClientRect();
var rectPage3 = page3.getBoundingClientRect();


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

main.addEventListener("mousemove", function(event) {
    gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.5,
        ease: 'power2.out' 
    });


    var elementBelowCursor = document.elementFromPoint(event.clientX, event.clientY);
    

    if (elementBelowCursor.closest('#page1')) {
        console.log(elementBelowCursor.closest('#page1'));
        cursor.style.backgroundColor = "#c7b4b4"; 
    } 
     if (elementBelowCursor.closest('#page2')) {
        console.log(elementBelowCursor.closest('#page2'));
        cursor.style.backgroundColor = "#111";
    } 
     if (elementBelowCursor.closest('#page3')) {
        cursor.style.backgroundColor = "#c7b8b8"; 
        console.log(elementBelowCursor.closest('#page3'));
    } else {
        console.log("else");
        cursor.style.backgroundColor = "#c7b4b4"; 
    }
});

image.addEventListener('mouseenter',function(){
    cursor.textContent = "View More";
    gsap.to(cursor,{
        scale: 2, 
        duration: 1.5,
        color:"#111",
    }
    )
})
image.addEventListener('mouseleave',function(){
    cursor.innerHTML = "";
    gsap.to(cursor,{
        scale:1
    }
    )
})
