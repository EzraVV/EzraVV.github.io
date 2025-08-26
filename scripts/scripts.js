// --------- If statement example ------ //

function myFirstClick() {
  let user = 'new'
  if (user == 'new') {
    message = 'Welcome'
  } else {
    message = 'Hello Again!'
  }

  document.getElementById('welcomeMessage').innerHTML = message
  document.getElementById('myButton').onclick = mySecondClick
  document.getElementById('removeButton').onclick = removeText
}

function mySecondClick() {
  let user = 'old'
  if (user == 'new') {
    message = 'Welcome'
  } else {
    message = 'Hello Again!'
  }
  document.getElementById('welcomeMessage').innerHTML = message
  document.getElementById('removeButton').onclick = removeText
}

function removeText() {
  let thirdClick = ' '
  document.getElementById('welcomeMessage').innerHTML = thirdClick
  document.getElementById('removeButton').onclick = removeText
}
