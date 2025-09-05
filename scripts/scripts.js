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

const navbar = ` 
        <div class="navbar">
  <a href="/">Home</a>
  <a href="/blog/about.html">About Me</a>
  <div class="dropdown">
    <button class="dropbtn">Dev Human Skills
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="/blog/te-houtaewa-template.html" class="btn">Te-Houtaewa Template</a>
      <a href="/blog/identity-values.html" class="btn">Identity & Values</a>
      <a href="/blog/learning-plan.html" class="btn">Learning Plan</a>
      <a href="/blog/emotional-intelligence.html" class="btn">Emotional Intelligence</a>
      <a href="/blog/neuroplasticity.html" class="btn">Neuroplasticity</a>
      <a href="/blog/te-whare-tapa-wha.html" class="btn">Te Whare Tapa Wha</a>
    </div>
  </div>
  <div class="dropdown">
    <button class="dropbtn">Dev Tech Skills
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="/blog/html-css.html" class="btn">Margins, Borders & Padding</a>
      <a href="/blog/javascript-dom.html" class="btn">Javascript & DOM</a>
      <a href="/blog/problem-solving.html" class="btn">Problem-Solving</a>
    </div>
  </div>
</div>`

document.getElementById('navBelow').insertAdjacentHTML('afterbegin', navbar)
