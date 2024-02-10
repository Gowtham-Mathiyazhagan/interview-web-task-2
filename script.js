// selection 
let container1 = document.getElementsByClassName("container-1")[0];
let container2 = document.getElementsByClassName("container-2")[0];
let container3 = document.getElementsByClassName("container-3")[0];
let container4 = document.getElementsByClassName("container-4")[0];
let container5 = document.getElementsByClassName("container-5")[0];
let container6 = document.getElementsByClassName("container-6")[0];
let container7 = document.getElementsByClassName("container-7")[0];
console.log(container1)
let svg = document.querySelector("svg");

// Scroll To Listen
window.addEventListener("scroll", () => {
  let scrollHeight = window.pageYOffset;
  if (scrollHeight == 0) {
    container_1();
  } else if (scrollHeight === 100) {
    container_2();
  } else if (scrollHeight === 200) {
    container_3();
  } else if (scrollHeight === 300) {
    container_4();
  } else if (scrollHeight === 400) {
    container_5();
  } else if (scrollHeight === 500) {
    container_6();
  } else if (scrollHeight === 600) {
    container_7();
  }
});

// Scroll Animation for DeskTop BreakPoint
let scrollAni = gsap.timeline({
  defaults: {
    duration: 0.5,
  },
});

function container_1() {
  scrollAni.from(".secondary-title-ani", {
    y: 50,
    stagger: 0.2,
    opacity: 0,
  });
  scrollAni
    .from(
      ".primary-title-ani",
      {
        y: 50,
        stagger: 0.2,
        opacity: 0,
      },
      "-=1.8"
    )
    .to(
      "#Opaque_Ring",
      {
        strokeDasharray: "10 1000",
        ease: "power3.out",
      },
      "-=0.7"
    );
  gsap.from(".nexgtv", {
    opacity: 0,
    duration: 1,
    y: 700,
  });
  gsap.from(".award-img", {
    opacity: 0,
    duration: 1,
    y: 100,
  });
  
//   container1.classList.remove("display-none");
//   container2.classList.add('display-none')
//   container3.classList.add('display-none')
//   container4.classList.add('display-none')
//   container5.classList.add('display-none')
//   container6.classList.add('display-none')
//   container7.classList.add('display-none')

//   svg.classList.add("con1")
}

function container_2() {
  tl.from(".secondary-title-ani-2", {
    y: 50,
    stagger: 0.2,
    opacity: 0,
  });
  tl.from(
    ".primary-title-ani-2",
    {
      y: 50,
      stagger: 0.2,
      opacity: 0,
    },
    "-=1.8"
  ).to(
    "#Opaque_Ring",
    {
      strokeDasharray: "35% 1000",
      ease: "power3.out",
    },
    "-=0.7"
  );
  gsap.from(".veme1", {
    opacity: 0,
    duration: 1,
    y: -200,
  });
  gsap.from(".veme2", {
    opacity: 0,
    duration: 1,
    y: 200,
  });
  
  container2.classList.remove("display-none");
  container1.classList.add('display-none')
  container3.classList.add('display-none')
  container4.classList.add('display-none')
  container5.classList.add('display-none')
  container6.classList.add('display-none')
  container7.classList.add('display-none')

  svg.classList.add("con2")
}

function container_3() {
  tl.from(".secondary-title-ani-3", {
    y: 50,
    stagger: 0.2,
    opacity: 0,
  });
  tl.from(
    ".primary-title-ani-3",
    {
      y: 50,
      stagger: 0.2,
      opacity: 0,
    },
    "-=1.8"
  ).to(
    "#Opaque_Ring",
    {
      strokeDasharray: "70% 1000",
      ease: "power3.out",
    },
    "-=0.7"
  );
  gsap.from(".veme2", {
    opacity: 0,
    duration: 1,
    y: -200,
  });
  gsap.from(".veme1", {
    opacity: 0,
    duration: 1,
    y: 200,
  });
}
function container_4() {
  tl.from(".secondary-title-ani-4", {
    y: 50,
    stagger: 0.2,
    opacity: 0,
  });
  tl.from(
    ".primary-title-ani-4",
    {
      y: 50,
      stagger: 0.2,
      opacity: 0,
    },
    "-=1.8"
  ).to(
    "#Opaque_Ring",
    {
      strokeDasharray: "70% 1000",
      ease: "power3.out",
    },
    "-=0.7"
  );
  gsap.from(".pizza12", {
    opacity: 0,
    duration: 1,
    y: 200,
  });
  gsap.from(".pizza3", {
    opacity: 0,
    duration: 1,
    y: -500,
  });
  gsap.from(".pizza4", {
    opacity: 0,
    duration: 1,
    y: -100,
  });
  gsap.from(".pizza5", {
    opacity: 0,
    duration: 1,
    y: 100,
  });
  gsap.from(".pizza1", {
    opacity: 0,
    duration: 1,
    y: -100,
  });
}
function container_5() {
  tl.from(".secondary-title-ani-5", {
    y: 50,
    stagger: 0.2,
    opacity: 0,
  });
  tl.from(
    ".primary-title-ani-5",
    {
      y: 50,
      stagger: 0.2,
      opacity: 0,
    },
    "-=1.8"
  ).to(
    "#Opaque_Ring",
    {
      strokeDasharray: "70% 1000",
      ease: "power3.out",
    },
    "-=0.7"
  );
  gsap.from(".karavan3", {
    opacity: 0,
    duration: 1,
    x: 200,
  });
  gsap.from(".karavan2", {
    opacity: 0,
    duration: 1,
    y: 200,
  });
  gsap.from(".karavan1", {
    opacity: 0,
    duration: 1,
    y: -300,
  });
  gsap.from(".karavan4", {
    opacity: 0,
    duration: 1,
    y: 300,
  });
  gsap.from(".karavan5", {
    opacity: 0,
    duration: 1,
    y: -300,
  });
}

function container_6() {
  tl.from(".secondary-title-ani-6", {
    y: 50,
    stagger: 0.2,
    opacity: 0,
  });
  tl.from(
    ".primary-title-ani-7",
    {
      y: 50,
      stagger: 0.2,
      opacity: 0,
    },
    "-=1.8"
  ).to(
    "#Opaque_Ring",
    {
      strokeDasharray: "70% 1000",
      ease: "power3.out",
    },
    "-=0.7"
  );
  gsap.from(".hand", {
    opacity: 0,
    duration: 1,
    y: 700,
  });
}

function container_7() {
  scrollAni.from(".secondary-title-ani-7", {
    y: 50,
    stagger: 0.2,
    opacity: 0,
  });
  scrollAni
    .from(
      ".primary-title-ani-7",
      {
        y: 50,
        stagger: 0.2,
        opacity: 0,
      },
      "-=1.8"
    )
    .to(
      "#Opaque_Ring",
      {
        strokeDasharray: "10 1000",
        ease: "power3.out",
      },
      "-=0.7"
    );
  gsap.from(".award-img", {
    opacity: 0,
    duration: 1,
    y: 100,
  });
  gsap.from(".melltoo-2", {
    opacity: 0,
    duration: 1,
    y: -200,
  });
  gsap.from(".melltoo-1", {
    opacity: 0,
    duration: 1,
    y: 200,
  });
}
