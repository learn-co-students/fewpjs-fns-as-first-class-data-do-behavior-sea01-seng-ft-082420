/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  let result;
  const time = parseInt(timeString.split(':').join(''));
  if (time < 1200) {
    result = 'Good Morning';
  } else if (time > 1200 && time < 1700) {
    result = 'Good Afternoon';
  } else if (time > 1700) {
    result = 'Good Evening';
  }
  return result;
}

/* Write your implementation of displayMessage() */

function displayMessage(str) {
  document.getElementById('greeting').innerText = str
}
