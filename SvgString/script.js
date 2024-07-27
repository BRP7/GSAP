var main = document.getElementById("main");
var cursor = document.getElementById("cursor");
var image = document.getElementById("img");

// Calculate page boundaries
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");

var rectPage1 = page1.getBoundingClientRect();
var rectPage2 = page2.getBoundingClientRect();
var rectPage3 = page3.getBoundingClientRect();

main.addEventListener("mousemove", function(event) {
    gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.5,
        ease: 'power2.out' 
    });


    var elementBelowCursor = document.elementFromPoint(event.clientX, event.clientY);
    

    if (elementBelowCursor.closest('#page1')) {
        cursor.style.backgroundColor = "#c7b4b4"; 
    } else if (elementBelowCursor.closest('#page2')) {
        cursor.style.backgroundColor = "#111";
    } else if (elementBelowCursor.closest('#page3')) {
        cursor.style.backgroundColor = "#c7b8b8"; 
    } else {
        cursor.style.backgroundColor = "#c7b4b4"; 
    }
});

image.addEventListener('mouseenter',function(){
    cursor.innerHTML = "View More";
    gsap.to(cursor,{
        scale:2
    }
    )
})
image.addEventListener('mouseenter',function(){
    cursor.innerHTML = "";
    gsap.to(cursor,{
        scale:1
    }
    )
})
