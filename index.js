const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
	let x = e.clientX;
	let y = e.clientY;
	cursor.style.top = y + "px";
	cursor.style.left = x + "px";
	cursor.style.display = "block";
});

document.addEventListener("mouseout", () => {
	cursor.style.display = "none";
});

gsap.to("#nav",{
    backgroundColor:"black",
    duration:1,
    height:"120px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11",
        scrub:1,
    }
})
gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -5%",
        end:"top -70%",
        scrub:2,
    }
})
gsap.from("#about-us img , #about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.3,
    
    scrollTrigger:{
        trigger:"#about-us img , #about-us-in",
        scroller:"body",
        start:"top 80%", 
        end:"top 78%",
        scrub:3,
    }
})
gsap.from(".card",{
    opacity:0,
    x:100,
    duration:1,
    rotate:360,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 90%", 
        end:"top 88%",
        scrub:3,
    }
})
gsap.to("#colon1",{
    x:50,
    y:50,
    duration:1.5,
    scale:1.5,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 60%", 
        end:"top 50%",
        scrub:3,
    }
})
gsap.to("#colon2",{
    x:-50,
    y:-50,
    duration:1.5,
    scale:1.5,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 60%", 
        end:"top 50%",
        scrub:3,
    }
})
gsap.to("#ball",{
    x:915,
    duration:3,
    repeat:-1,
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        marker:true,
        start:"top 65%", 
        end:"top 60%",
        scrub:3,
    }
})
   

