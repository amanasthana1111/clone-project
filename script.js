function aman(){
    var a = document.querySelector(".page1cont")
var curser = document.querySelector(".curser")

a.addEventListener("mousemove",function(dets){
    gsap.to(curser,{
        x:dets.x,
        y:dets.y
    })
})
a.addEventListener("mouseenter",function(dets){
    gsap.to(curser,{
        scale:1

    })
})
a.addEventListener("mouseleave",function(dets){
    gsap.to(curser,{
        scale: 0
    })
})
}
function a(){
var a2 = document.querySelector(".page5")
var curser2 = document.querySelector(".curser2")

a2.addEventListener("mousemove",function(dets){
    gsap.to(curser2,{
        x:dets.x,
        y:dets.y
    })
})
a2.addEventListener("mouseenter",function(dets){
    gsap.to(curser2,{
        scale:1

    })
})
a2.addEventListener("mouseleave",function(dets){
    gsap.to(curser2,{
        scale: 0
    })
})
}
aman()
a()

gsap.from(".rrr ,.underline",{
    y:100,
    duration:1.5,
    delay:1,
    opacity:0,
    stagger:0.5
})

gsap.from(".rejo ",{
    y:100,
    duration:1.5,
    delay:1,
    opacity:0,
    stagger:0.5
})
gsap.from(".outer ",{
    y:100,
    duration:1.7,
    delay:5,
    opacity:0,
    stagger:0.5
})
gsap.from(".upper ",{
    y:100,
    duration:1.7,
    delay:5,
    opacity:0,
    stagger:0.5
})
gsap.from(".part2 ",{
    y:100,
    duration:1.4,
    delay:9,
    opacity:0,
    stagger:0.5
})
gsap.from(".outer-gg ",{
    y:100,
    duration:1.7,
    delay:15,
    opacity:0,
    stagger:0.5
})


