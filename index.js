/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  let splitTime = timeString.split(':').join('');
  console.log(typeof splitTime); //string
  let parseTime = parseInt(splitTime);
  console.log(typeof parseTime); //number
  // let splitTime = timeString.split(":");
  // console.log("hit the greet")
  if (parseTime < 1200){
    greeting = "Good Morning";
  } else if (parseTime < 1700){
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
  return greeting
}
/* Write your implementation of displayMessage() */
function displayMessage(greeting){
  document.getElementById("greeting").innerText = greeting
  // updateGreet = greeting;
  // console.log(updateGreet);
}
// let content = document.getElementById("greeting").innerText
