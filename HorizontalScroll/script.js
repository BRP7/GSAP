var t1 =gsap.timeline();

t1.from("#nav h2",{
    y:-20,
    opacity:0,
    duration:0.5,
    delay:0.5
})

t1.from("#nav #part2 h4",{
    y:-20,
    opacity:0,
    duration:0.5,
    stagger:1
})

t1.from("#main h1",{
    y:-20,
    opacity:0,
    duration:0.5,
    scale:2
})

