/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(timeString) {
  let time = timeString.split(':')
  parseInt(time)
  if (time[0] < 12) {
    return "Good Morning"
  } else if (time[0] > 12 && time[0] < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }

}

function displayMessage(arg) {
  let newgreeting = document.getElementById("greeting");
  newgreeting.innerText = arg;
}