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

// ------ RGB Text ------ //

const rgbText = document.getElementById('rgbText')
let r = 255,
  g = 0,
  b = 0
let cycle = 0

function cycleColor() {
  if (cycle === 0) {
    if (g < 255) g++
    else cycle = 1
  } else if (cycle === 1) {
    if (r > 0) r--
    else if (b < 255) b++
    else cycle = 2
  } else if (cycle === 2) {
    if (g > 0) g--
    else if (r < 255) r++
    else cycle = 0
  }

  if (rgbText) {
    rgbText.style.color = `rgb(${r}, ${g}, ${b})`
  }
}

setInterval(cycleColor, 10)

// ------ Collapsible Div ------ //

let coll = document.getElementsByClassName('collapsible')
let i

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active')
    let content = this.nextElementSibling
    if (content.style.maxHeight) {
      content.style.maxHeight = null
    } else {
      content.style.maxHeight = content.scrollHeight + 'px'
    }
  })
}

// ---------------- NAV BAR ---------------- //

fetch('/nav.html')
  .then((response) => response.text())
  .then((html) => {
    const temp = document.createElement('div')
    temp.innerHTML = html

    const navbar = temp.querySelector('.navbar')
    const target = document.getElementById('navBelow')

    if (navbar && target) {
      target.insertAdjacentElement('afterbegin', navbar)
    }
  })
  .catch((error) => {
    console.error('Failed to load navbar:', error)
  })
