
// document.body.addEventListener ("scroll", () => {
//     gsap.to(".square", {x:400});
//     gsap.to (".square2", {x:-100});
// })
// document.body.addEventListener ("click", () => {
//     gsap.to ("background", {})
// })
// const secColors = ["lightskyblue", "lightgreen", "lightsalmon"]
// gsap.set(".slides", {backgroundColor:gsap.utils.wrap(secColors)})

const secColors = ["#87CEFA", "#90EE90", "#FFA07A"]
const sections = gsap.utils.toArray(".slides")

sections.forEach(function(section,index){
    //console.log(section, secColors[index])
    ScrollTrigger.create({
        trigger: section,
        start: "top 200px",
        end: "+=100%",
        //markers: true,
        
        onToggle: self => {
            if (self.isActive) {
                gsap.to("body", {
                    backgroundColor: secColors[index],
                    overwrite: "auto",
                });
                // gsap.to(".square", {
                //     backgroundColor: "red",
                //     immediateRender:false,
                // });
            }
        }
        //toggleActions:"restart none none reverse"
    })
})

gsap.to(".square", {
    x: 700,
    rotation: "360",
    duration: 3,
    scrollTrigger: {
        trigger: ".square",
        start: "top 30%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        //markers: true
    },
});

gsap.to(".square2", {
    x: -700,
    rotation: "-360",
    duration: 3,
    scrollTrigger: {
        trigger: ".square2",
        start: "top 30%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        //markers: true
    },
});

gsap.to(".triangle", {
    opacity: 0.5,
    scale: 3,
    duration: 1,
    scrollTrigger: {
        trigger: ".triangle",
        start: "top 30%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        //markers: true
    },
});
gsap.to(".triangle2", {
    opacity: 0.5,
    scale: 5,
    duration: 1,
    scrollTrigger: {
        trigger: ".triangle2",
        start: "top 30%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        //markers: true
    },
});
gsap.to(".circle", {
    ease: "power2.inOut",
    backgroundColor: "orange",
    scale: 3,
    duration: 1,
    scrollTrigger: {
        trigger: ".circle",
        start: "top 50%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
        //markers: true
    },
});
gsap.to(".circle2", {
    ease: "power2.inOut",
    backgroundColor: "orange",
    scale: 3,
    duration: 1,
    scrollTrigger: {
        trigger: ".circle2",
        start: "top 50%",
        end: "bottom 60%",
        toggleActions: "reverse none none play",
        //markers: true
    },
});

// ScrollTrigger.create ({
//     trigger: ".square",
//     start: "top 280px",
//     end: "+=20%",
//     markers: true,
//     toggleActions:"restart none none reverse",
//     onToggle: self => {
//         if (self.isActive) {
//             animation:gsap.to(".square", {
//                 duration: 2,
//                 backgroundColor: "red",
//                 rotate: "360",
//                 //immediateRender:false,
//             });
//         }
//     }
// })


//references used:
//Greensock Beginners Tutorials: https://youtube.com/playlist?list=PLSkIx8U0TMvgH2PEokYLIxofdb1L9cJjz&si=zCDfVrgkTOoFihzH
//GSAP forum changing background color using ToggleActions: https://gsap.com/community/forums/topic/35917-changing-body-background-color-toggleactions/
