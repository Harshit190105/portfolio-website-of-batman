

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
function firstpageAnim(){
    var tl = gsap.timeline();
    tl.from("#nav", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: "power2.inOut",
    })
    .to(".boundingelem", {
        y: 0,
        ease: "Expo.easeInOut",
        duration: 1.5,
        delay: -1,
        stagger: 0.2,
    })
        .from("#herofooter", {
           y: -10,
           opacity: 0,
           duration: 1.5,
           delay: -1,
           ease: "Expo.easeInOut",

          
        });
        
}



function circlemousefollower(){
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#minicircle").style.transform = "translate(" + dets.clientX + "px, " + dets.clientY + "px)";
    })

}
circlemousefollower();
firstpageAnim();

document.querySelectorAll(".elem").forEach(function(elem){
    let img = elem.querySelector("img");
    var rotate = 0;
    var diffrotate = 0;
    elem.addEventListener("mouseleave", function(dets){
        gsap.to(elem.querySelector("img"),{
            opacity: 0,
        });
    });
    elem.addEventListener("mousemove", function(dets){
        var diff = dets.clientY - elem.getBoundingClientRect().top;
            diffrotate = dets.clientX - rotate;
            rotate = dets.clientX;
           
      gsap.to(elem.querySelector("img"),{
        opacity: 1,
        ease: "power3.inOut",
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrotate/20),
        duration: 0.1,
       });
        
      });
});