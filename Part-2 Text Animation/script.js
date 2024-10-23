gsap.from('h1',{
    opacity:0,
    color:"red",
    y:40,   // also known as translateY properties
    duration:1,
    delay:1,
    //  stagger: (+/- Stagger_direction) Speed_of_stagger
    stagger:0.5, // sobko 1 by 1 chalta hai with the properties
})
gsap.from('h2',{
    opacity:0,
    color:"red",
    y:40,   // also known as translateY properties
    duration:1,
    delay:1,
    //  stagger: (+/- Stagger_direction) Speed_of_stagger
    stagger:-0.5, // sobko 1 by 1 (Reverse Order) chalta hai with the properties
})

// Repeat Properties in GSAP

gsap.to('#box',{
    x:1200,
    y:200,
    duration:2,
    rotation:360,
    // repeat:1,  // repeat Only one times
    repeat:-1, // repeat:-1 Infinitly
    // Yoyo Property its reverse Repeat the element
    yoyo:true, // reverse the element
})