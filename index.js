/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
  let splitTime = time.split(':')
  let input = parseInt(splitTime[0])
  if (input < 12){
    return "Good Morning"}
  else if (input >= 12 && input <= 17){
    return "Good Afternoon"}
  else if (input > 17) {
    return "Good Evening"}
}
/* Write your implementation of displayMessage() */

function displayMessage(text){
  let element = document.querySelector('h1#greeting')
  element.innerHTML = `${text}`
}
