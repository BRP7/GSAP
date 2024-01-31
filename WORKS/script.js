var t1=gsap.timeline();

t1.to("#yellow1",{
    top:"-100%",
    delay:0.5,
    duration:1,
    ease:"expo.out"
})
t1.from("#loader #yellow2",{
    top:"100%",
    delay:0.5,
    duration:0.5,
    ease:"expo.out"
},"anim")
t1.to("#loader h1",{
    color:"black",
    duration:0.5,
    delay:0.5
},"anim")
t1.to("#loader",{
    opacity:0,

})