// Scroll To Listen

window.addEventListener("scroll",()=>{
	let scrollHeight = window.pageYOffset
	if(scrollHeight==0)
	{
		container_1()
	}
})

// Scroll Animation for DeskTop BreakPoint
let scrollAni = gsap.timeline({
	defaults: {
	  duration: 0.5
	}
  });
  
  function container_1() {
	scrollAni.from(".secondary-title-ani", {
	  y: 50,
	  stagger: .2,
	  opacity: 0
	})
	scrollAni.from(".primary-title-ani", {
		y: 50,
		stagger: .2,
		opacity: 0,
	  }, "-=1.8")
	  .to("#Opaque_Ring", {
		strokeDasharray: "10 1000",
		ease: "power3.out"
	  }, '-=0.7')
	gsap.from(".nexgtv", {
	  opacity: 0,
	  duration: 1,
	  y: 700
	});
	gsap.from('.award-img', {
	  opacity: 0,
	  duration: 1,
	  y: 100
	});
	let container1 = document.getElementsByClassName("container-1")[0]
	let container2 = document.getElementsByClassName("container-2")[0]
	let container3 = document.getElementsByClassName("container-3")[0]
	let container4 = document.getElementsByClassName("container-4")[0]
	let container5 = document.getElementsByClassName("container-5")[0]
	let container6 = document.getElementsByClassName("container-6")[0]
	let container7 = document.getElementsByClassName("container-7")[0]

	let svg = document.querySelectorAll("svg")
	container1.classList.add("display-none")
	console.log(container1)
  }
  
  function container_2() {
	tl.from(".secondary-title-ani-2", {
	  y: 50,
	  stagger: .2,
	  opacity: 0
	})
	tl.from(".primary-title-ani-2", {
		y: 50,
		stagger: .2,
		opacity: 0,
	  }, "-=1.8")
	  .to("#Opaque_Ring", {
		strokeDasharray: "35% 1000",
		ease: "power3.out"
	  }, '-=0.7')
	gsap.from('.veme1', {
	  opacity: 0,
	  duration: 1,
	  y: -200
	});
	gsap.from('.veme2', {
	  opacity: 0,
	  duration: 1,
	  y: 200
	});

  }

  function container_3() {
		tl.from(".secondary-title-ani-3", {
		  y: 50,
		  stagger: .2,
		  opacity: 0
		})
		tl.from(".primary-title-ani-3", {
			y: 50,
			stagger: .2,
			opacity: 0,
		  }, "-=1.8")
		  .to("#Opaque_Ring", {
			strokeDasharray: "70% 1000",
			ease: "power3.out"
		  }, '-=0.7')
		gsap.from('.veme2', {
		  opacity: 0,
		  duration: 1,
		  y: -200
		});
		gsap.from('.veme1', {
		  opacity: 0,
		  duration: 1,
		  y: 200
		});
		
}
function container_4() {
	tl.from(".secondary-title-ani-4", {
		y: 50,
		stagger: .2,
		opacity: 0
	  })
	  tl.from(".primary-title-ani-4", {
		  y: 50,
		  stagger: .2,
		  opacity: 0,
		}, "-=1.8")
		.to("#Opaque_Ring", {
		  strokeDasharray: "70% 1000",
		  ease: "power3.out"
		}, '-=0.7')
		gsap.from('.pizza12', {
			opacity: 0,
			duration: 1,
			y: 200
		  });
		  gsap.from('.pizza3', {
			opacity: 0,
			duration: 1,
			y: -500
		  });
		  gsap.from('.pizza4', {
			opacity: 0,
			duration: 1,
			y: -100
		  });
		  gsap.from('.pizza5', {
			opacity: 0,
			duration: 1,
			y: 100
		  });
		  gsap.from('.pizza1', {
			opacity: 0,
			duration: 1,
			y: -100
		  });
}