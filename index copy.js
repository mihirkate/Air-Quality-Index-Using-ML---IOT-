
// navbar button
const toggleBtn = document.querySelector('.toggle_btn')

const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function(){
  dropDownMenu.classList.toggle('open')

}




// data counting
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj1 = document.getElementById("value1");
animateValue(obj1, 0,1000, 9999);



const obj2 = document.getElementById("value2");
animateValue(obj2, 0, 11, 9999);


const obj3 = document.getElementById("value3");
animateValue(obj3, 0, 55, 9999);


const obj4 = document.getElementById("value4");
animateValue(obj4, 0, 10, 9999);

// Get the button and dropdown content elements
var button = document.querySelector(".dropbtn");
var dropdownContent = document.querySelector(".dropdown-content");

// Add a click event listener to the button
button.addEventListener("click", function() {
  // Toggle the display of the dropdown content
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
});

// Get the current page's URL
var currentPage = window.location.href;

// Get the navigation links
var homeLink = document.getElementById("home");
var aboutLink = document.getElementById("about");
var eventsLink = document.getElementById("events");

// Check if the current page matches each link and apply the "active" class
if (currentPage.includes("index copy.html")) {
  homeLink.classList.add("active");
} else if (currentPage.includes("about.html")) {
  aboutLink.classList.add("active");
} else if (currentPage.includes("events.html")) {
  eventsLink.classList.add("active");
}





