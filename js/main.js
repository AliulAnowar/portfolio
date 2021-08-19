/*------ NAVIGATION MENU HOME SECTION ----------*/
(() =>{

   const hamburgerBtn = document.querySelector(".hamburger-btn"),
   navManu = document.querySelector(".nav-menu"),
   closeNavBtn = navManu.querySelector(".close-nav-menu");

   hamburgerBtn.addEventListener("click", showNavMenu);
   closeNavBtn.addEventListener("click", hideNavMenu);
   
 
   function showNavMenu(){
	navManu.classList.add("open");
	// bodyScrollingToggle();
   }

   function hideNavMenu(){
	navManu.classList.remove("open"); 
	fadeOutEffect(); 
	// bodyScrollingToggle(); 
   }
   function fadeOutEffect(){
	   document.querySelector(".fade-out-effect").classList.add("active");
	   setTimeout(() =>{
		document.querySelector(".fade-out-effect").classList.remove("active");
	   },300)
   }
// Document Attached at EventLister
   document.addEventListener("click", (event) =>{
	if(event.target.classList.contains('link-item')){
// make sure event.target.hash has data value before overwritting default--
		if(event.target.hash !== ""){
// prevent default ancher click behaviour
			event.preventDefault();
			const hash = event.target.hash;
			// console.log(hash);
// DeActivate exiting active section
document.querySelector(".section.active").classList.add("hide");
document.querySelector(".section.active").classList.remove("active");
// active new section ........
document.querySelector(hash).classList.add("active");
document.querySelector(hash).classList.remove("hide");
// DeActivate exiting ACTIVE navigation manu 'link-item'--
navManu.querySelector(".active").classList.add("outer-shadow", "hover-in-shawod");
navManu.querySelector(".active").classList.remove("active", "inner-shadow");
//IF Active new Navigation Menu 'link-item' class

if(navManu.classList.contains("open")){
// Active Navigation Menu 'link-item'
event.target.classList.add("active", "inner-shadow");
event.target.classList.remove("outer-shadow", "hover-in-shawod");
// HIDE NAVIGATION MENU
hideNavMenu();
console.log("Active new Navigation Menu 'link-item' class");
}else{
let newItems = navManu.querySelectorAll(".link-item");
newItems.forEach((item) =>{
	if(hash === item.hash){
		//Active new Navigation Menu 'link-item' class
	item.classList.add("active", "inner-shadow");
	item.classList.remove("outer-shadow", "hover-in-shawod");
		
	}
})
fadeOutEffect();
}
// ADD HASH TAG (#) to url
	window.location.hash = hash;
	
		}
	}
   })



})();

/*-----------------TEXT ANIMATION BEGIN-----------------*/

(() =>{
	const textDisplay = document.getElementById('text2')
const phrases = ['M&E', 'MIS', '.NET', 'NODE/REACT','SQL/Mysql']
let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop () {
  isEnd = false
  textDisplay.innerHTML = currentPhrase.join('')

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i === phrases.length) {
        i = 0
      }
    }
  }
  const spedUp = Math.random() * (80 -50) + 50
  const normalSpeed = Math.random() * (300 -200) + 200
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}

loop()

})();


/*-----------------TEXT ANIMATION END-----------------*/




/*-----------------ABOUT Section Tabs-----------------*/

(() =>{
	// console.log("hellow Aliul");
	const aboutSection = document.querySelector(".about-section"),
	tabsContainer = document.querySelector(".about-tabs");
	tabsContainer.addEventListener("click", (event) =>{
		// console.log(event.target);
/* if event target contains "tab-items" and not Contain active class ---*/		
	   if(event.target.classList.contains("tab-item") && 
	   !event.target.classList.contains("active")){
		// console.log("event.target contails 'tab-items' class and not contain 'active' class");
		// console.log(event.target)
		const target = event.target.getAttribute("data-target");
		// console.log(target);
		tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
		event.target.classList.add("active","outer-shadow");
 	 	// deactivate existing active 'tab contain'
		aboutSection.querySelector(".tab-content.active").classList.remove("active");
		// active new tab content
		aboutSection.querySelector(target).classList.add("active");
		
		
	   }
	})
})();

/*-------------Testimonial Slide---------------*/

(() =>{

	const sliderContainer = document.querySelector(".teasti-slider-container"),
	slides = sliderContainer.querySelectorAll(".teasti-item"),
	slideWidht = sliderContainer.offsetWidth,
	prevbtn = document.querySelector(".teasti-slider-nav .prev"),
	nextbtn = document.querySelector(".teasti-slider-nav .next");
	let slideIndex = 0;
	// set weight of all slides
	slides.forEach((slide) =>{
	// console.log(slide);	
	slide.style.width = slideWidht + "px";
	})
	//  set weight to sliderController 

	sliderContainer.style.width = slideWidht * slides.length + "px";
	nextbtn.addEventListener("click", () =>{
		if(slideIndex === slides.length-1){
			slideIndex = 0;
		}else{
			slideIndex++;
		}

		sliderContainer.style.marginLeft = - (slideWidht * slideIndex) + "px";	
		// console.log(slideIndex);
	})

	prevbtn.addEventListener("click", () =>{
		if(slideIndex === slides.length-1 ){
		
			slideIndex = 0;
		}else{
			slideIndex++;
		}
		sliderContainer.style.marginLeft = - (slideWidht * slideIndex) + "px";
	})
//  console.log(slideWidht);	

})();

//  hide all sections except HOME

(() =>{

	const sections = document.querySelectorAll(".section");
	sections.forEach((section) =>{
		if(!section.classList.contains("active")){
			section.classList.add("hide");
		}
	})


})();
