var t1 =gsap.timeline();

t1.from("#nav h2",{
    y:30,
    opacity:0,
    duration:1,
    delay:1
})

t1.from("#nav #part2 h4",{
    y:30,
    opacity:0,
    duration:1,
    stagger:1
})

t1.from("#main h1",{
    y:30,
    opacity:0,
    duration:1,
})