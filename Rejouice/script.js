function cursorEffect(){
    let pageCon =  document.querySelector(".page-content");
let cursor = document.querySelector(".cursor");

pageCon.addEventListener("mousemove",function(dets){
//     //  console.log(dets.target;X)
//     cursor.style.left = dets.x + "px";
//     cursor.style.top = dets. y+ "px";
       gsap.to(cursor,{
        x:dets.x,
        y:dets.y
       }) 
})
pageCon.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
pageCon.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })   
})

}
cursorEffect();

gsap.from(".elem h1,.elem .sidediv h6,.elem .line",{
    y:120,
    stagger:0.2,
    duration:1,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"top 47%",
        end:"top 46%",
        scrub:2
    }
})