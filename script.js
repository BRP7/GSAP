var t1 = timeline.gsap();

t1.to("#nav h2",{
    y:30,
    opacity:1,
    duration:1,
    delay:1
})

t1.to("#nav #part2 h4",{
    y:30,
    opacity:1,
    duration:1,
    stagger:"true"
})

t1.to("h1",{
    y:30,
    opacity:1,
    duration:1,
})