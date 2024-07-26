var main = document.getElementById("main");
var cursor = document.getElementById("cursor");

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
        duration: 1,
        ease: 'elastic.out(1,0.2)'
    });


    var elementBelowCursor = document.elementFromPoint(event.clientX, event.clientY);
    

    if (elementBelowCursor.closest('#page1')) {
        cursor.style.backgroundColor = "#c7b4b4"; 
    } else if (elementBelowCursor.closest('#page2')) {
        cursor.style.backgroundColor = "#726d6d";
    } else if (elementBelowCursor.closest('#page3')) {
        cursor.style.backgroundColor = "#c7b8b8"; 
    } else {
        cursor.style.backgroundColor = "#c7b4b4"; 
    }
});
