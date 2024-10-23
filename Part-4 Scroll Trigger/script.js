gsap.from('#page1 #box',{
    scale:0,
    duration:2,
    rotate:360
})
gsap.from('#page2 #box',{
    scale:0,
    duration:2,
    delay:0.2,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers :true,
        start:"top 70%",
        end:"top 30%",
        scrub:2 // for smoothness
    }
})
gsap.from('#page3 #box',{
    scale:0,
    delay:0.2,
    duration:2,
    rotate:360,
    scrollTrigger:{
        trigger:"#page3 #box",
        scroller:"body",
        markers :true
    }
})