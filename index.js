/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let time1 = time.split(":");
  let hh = parseInt(time1[0]);
  let mm = parseInt(time1[1]);
   if (hh < 12){
     return"Good Morning";
   }
   else if (hh > 17){
     return"Good Evening";
   }
   else{
     return"Good Afternoon";
   }

}
/* Write your implementation of displayMessage() */
function displayMessage(content){
let element = document.getElementById('greeting');
element.innerText = `${content}`;
}
