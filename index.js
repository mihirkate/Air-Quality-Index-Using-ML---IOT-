
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



