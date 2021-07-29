// TOGGLE STYLE SWITCHER--
  
//  console.log("TEST");   


const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () => {
    // console.log("TEST"); 
    document.querySelector(".style-switcher").classList.toggle("open"); 
})
//hide style-swither when scrool 
window.addEventListener("scroll", () =>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
      document.querySelector(".style-switcher").classList.remove("open");  
    }
})

// THEME COLOR Begin .....

const alternateStyles = document.querySelectorAll(".alternate-style");
// console.log(alternateStyles); 

function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled", "true");
        }
    })
}

// THEME COLOR END .....


// ----- Theme Dark Mode Code Begin
    const dayNight = document.querySelector(".day-night");

    dayNight.addEventListener("click", () => {
        dayNight.querySelector("i").classList.toggle("fa-sun"); 
        dayNight.querySelector("i").classList.toggle("fa-moon");
        document.body.classList.toggle("dark");
    })

    window.addEventListener("load", () =>{
        if(document.body.classList.contains("dark")){
            dayNight.querySelector("i").classList.add("fa-sun");  
        }else{
          dayNight.querySelector("i").classList.add("fa-moon");  
        }
    })


// ----- Theme Dark Mode Code END