// =====================Menu animation===================================//

function showSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display ="flex"
}
function hideSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display ="none"
}


var animation = gsap.timeline()

animation.from("nav a",{
    y:-10,
    opacity:0,
    duration:0.3,
    delay:0.2,
    stagger:0.2
})



// ============================================front page=============================================//

var pageOneAnimation = gsap.timeline()

pageOneAnimation.from("#page1 .h1",{
    y:-10,
    opacity:0,
    duration:0.3,
    delay:0.5,
    stagger:0.2
})

pageOneAnimation.from("#page1 #Apply",{
    x:-100,
    opacity:0,
    scale:2,
    duration:0.3,
    delay:0.4,
    stagger:0.2
})

pageOneAnimation.from("#page1 #image1",{
    x:-500,
    opacity:0,
    duration:0.3,
    delay:0.3,
    stagger:0.1
})



// =================================================page2======================================================//

var Appybutton =document.querySelector("#Apply")

Appybutton.addEventListener("click",()=>{
  
    window.scrollBy({
        top: 800,  // Adjust the value to scroll down more or less
        behavior: 'smooth'  // Smooth scrolling
    });
})

const Servocebutton =document.querySelector("nav ul li a #service")

console.log(Servocebutton);






//=======================================page2scrollanimation==============================================//
// gsap.registerPlugin(ScrollTrigger);

// gsap.from(".box2", {
//   scrollTrigger: {
//     trigger: "#box2",  // The element that triggers the animation
//     start: "top 90%",  // When the top of .box2 reaches 90% of the viewport height
//     end: "top 50%",    // When the element reaches 50% of the viewport height
//     toggleActions: "play none none reverse",  // Plays the animation when scrolling down, reverses it when scrolling up
//     scrub: false,      // Animation will not be tied to scroll position, it will just trigger
//     markers: true      // Optional: Adds visual markers for start and end points (for development)
//   },
//   y: 100,        // Start position: 100px lower than its final position
//   opacity: 0,    // Start with opacity 0
//   duration: 1,   // Animation duration of 1 second
//   ease: "power1.out"  // Smooth easing for the animation
// });


gsap.registerPlugin(ScrollTrigger);

// Select all elements with the class 'box2'
document.querySelectorAll('.box2').forEach(box => {
  gsap.from(box, {
    scrollTrigger: {
      trigger: box,  // Use the current box as the trigger
      start: "top 80%",  // When the top of the box reaches 90% of the viewport height
      end: "top 30%",    // When the box reaches 50% of the viewport height
      toggleActions: "play none none reverse",  // Plays on scroll down, reverses on scroll up
      scrub: false,      // Animation is not tied to scroll position
    //   markers: true      // Optional: Visual markers for debugging
    },
    y: 100,        // Start 100px lower than the final position
    opacity: 0,    // Start with opacity 0
    duration: 1,   // Duration of 1 second
    ease: "power1.out"  // Smooth easing
  });
});


// ==============================================page3=====================================================//
function toggleReadMore(){
    let dots = document.querySelector("#dots")
        let moreText = document.querySelector("#more")
    let btnText = document.querySelector(".btn")

    if(dots.style.display === "none"){
        dots.style.display = "inline";
        btnText.textContent ="Read More";
        moreText.style.display ="none";
    }
    else {
        dots.style.display = "none"; 
        btnText.textContent = "Read Less"; 
        moreText.style.display = "inline"; 
    }
}

// =============================================page4=====================================================//
function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the form data
    var data = JSON.parse(e.postData.contents);
    
    // Append the data to the spreadsheet
    sheet.appendRow([data.name, data.email, data.message]);
    
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' })).setMimeType(ContentService.MimeType.JSON);
  }