gsap.defaults({ease: "none"});

const tl = gsap.timeline({repeat:3, repeatDelay:1, yoyo:true});
tl.to("h1 span", {duration: 4, text:" is so much fun you should try it some time!"})
  .to(".green", {x:100})
  .set(".green",  {text:"I am done"})

