//  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

//  const smoother = ScrollSmoother.create({
//  content: "#wrapper",
//  smooth: 3,
//  effects: true
// });

//  smoother.effects(".aboutpgim", { speed: "auto", lag: 0.1 });
//  smoother.effects(".ourbuninpgim img", { speed: "auto", lag: 0.2});


gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
const smoother = ScrollSmoother.create({
	content: "#wrapper",
	smooth: 3,
	effects: true
});
smoother.effects(".comp-img img", { speed: "auto" });
var win = $(this);
if(win.width()>1025){

	const tl = gsap.timeline({ 
		scrollTrigger: {
			trigger: '.visionMission',
			scrub:1,
            // markers:true,
			toggleActions: 'restart none none none',
			pin:true,
			start: '0',
			end:'100%'
		}
	});

	tl.to('.visionIns', {duration:10,y:-700,})
	// const t2 = gsap.timeline({ 
	// 	scrollTrigger: {
	// 		trigger: '.indVmb',
	// 		scrub:4,
    //         // markers:true,
	// 		toggleActions: 'restart none none none',
	// 		pin:false,
	// 		start: '0',
	// 		end:'100%',
	// 		onEnter: myEnterFunc,
	// 		onEnterBack: myEnterFunc,
	// 		onLeave: myEnterFunc,
	// 		onLeaveBack: myLeaveFunc
	// 	}
	// });

	// 
	const t5 = gsap.timeline({ 
		scrollTrigger: {
			trigger: '.ch-right-text',
			scrub:1,
            markers:false,
			toggleActions: 'restart none none none',
			pin:true,
			start: '0',
			end:'100%'
		}
	});

	t5.to('.ch-left-text', {duration:10,y:-1000,})
	

}




