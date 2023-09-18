var a= document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    a.style.left=dets.x+30+"px";
    a.style.top=dets.y+"px";
    blur.style.left=dets.x-200+"px";
    blur.style.top=dets.y-200+"px";


})


gsap.to("#nav",{
     backgroundColor:"black",
    duration:1,
    height:"120px",
    scrollTrigger:{
       trigger:"#nav",
       scroller:"body",
    //    markers:true,
       start:"top -10%",
       end:"top -11%",
       scrub:2,
    }
    
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -80%",
        scrub:2,
    }
})

var h4all=document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        a.style.scale=3
        a.style.border= "0.1px solid white";
        a.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        a.style.scale=1
        a.style.border= "0px solid rgb(62, 120, 4)";
        a.style.backgroundColor="rgb(62, 120, 4)"
    })
})
gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:1,
    duration:2,
    stagger:0.4,
    scrollTrigger:{
          trigger:"#about-us",
          scroller:"body",
    }
})
gsap.from("#img1",{
    x:-70,
    y:-70,
    scrollTrigger:{
        trigger:"#img1",
        scroller:"body",
        start:"top 50%",
        end:"top 50%",
        scrub:4,
    }

})
gsap.from("#img2",{
    x:70,
    y:70,
    scrollTrigger:{
        trigger:"#img2",
        scroller:"body",
        start:"top 30%",
        end:"top 30%",
        scrub:4,
    }

})