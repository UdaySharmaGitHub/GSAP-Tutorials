// gsap.to('#box1',{
//     x:1200,
//     rotate:360,
//     duration:1.5,
//     delay:1
// })
// gsap.to('#box2',{
//     x:1200,
//     duration:1.5,
//     backgroundColor:"yellow",
//     delay:2.5
// })
// gsap.to('#box3',{
//     x:1200,
//     duration:1.5,
//     scale:0.5,
//     borderRadius:"50%",
//     delay:4
// })


// to Avoid the code we use the Timeline
let tl = gsap.timeline()
tl.from('h1',{
    y:-20,
    duration:1,
    opacity:0,
    delay:0.3,
})
tl.from('h3',{
    y:-20,
    duration:1,
    opacity:0,
    stagger:0.3
})
tl.to('#box1',{
    x:1200,
    rotate:360,
    duration:1.5,
    })
tl.to('#box2',{
    x:1200,
    duration:1.5,
    backgroundColor:"yellow",
})
tl.to('#box3',{
    x:1200,
    duration:1.5,
    scale:0.5,
    borderRadius:"50%",
})