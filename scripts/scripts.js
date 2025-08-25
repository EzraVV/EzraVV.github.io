// --------- If statement example ------ //

function myFirstClick() {
  let user = 'new'
  if (user == 'new') {
    message = 'Welcome'
  } else {
    message = 'Hello Again!'
  }
  let myButton = document.getElementById('myButton')
  myButton.addEventListener('click', function () {
    user = 'old'
  })
  document.getElementById('welcomeMessage').innerHTML = message
  document.getElementById('myButton').onclick = mySecondClick
}

function mySecondClick() {
  let user = 'old'
  if (user == 'new') {
    message = 'Welcome'
  } else {
    message = 'Hello Again!'
  }
  document.getElementById('welcomeMessage').innerHTML = message
}

const coffee = ['latte', 'flat white', 'long black']
