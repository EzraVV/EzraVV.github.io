let cells = document.getElementsByTagName('td')
let noughtsTurn = true
let gameIsOver = false
let symbol = noughtsTurn ? 'O' : 'X'
const subtitle = document.getElementById('subtitle')
let winner = ''
document.getElementById('resetBtn').onclick = clearBoard

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
}

function cellClicked(e) {
  let cell = e.target
  if (cell.innerHTML == '') {
    cell.innerHTML = symbol
  }
  check4Win()
  if (gameIsOver === false) {
    noughtsTurn = !noughtsTurn
    symbol = noughtsTurn ? 'O' : 'X'
    subtitle.innerHTML = noughtsTurn ? "Player 1's turn" : "Player 2's turn"
  }
  if (gameIsOver === true) {
    subtitle.innerHTML = 'Game Over - ' + winner
  }
}

function clearBoard() {
  if (gameIsOver) {
    for (let i = 0; i < cells.length; i++) {
      cells[i].innerHTML = ''
    }
    gameIsOver = false
    noughtsTurn = true
    subtitle.innerHTML = "Player 1's turn"
    winner = ''
  }
}

function stalemate() {
  let res = true
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML.trim() === '') {
      res = false
    }
  }

  return res
  // if all cells value is not ''
  // log stalemate
  // then clear table reset
}

function check4Win(Symbol) {
  // Horizontal //
  Symbol = symbol
  if (
    cells[0].innerHTML == Symbol &&
    cells[1].innerHTML == Symbol &&
    cells[2].innerHTML == Symbol
  )
    gameIsOver = true
  else if (
    cells[3].innerHTML == Symbol &&
    cells[4].innerHTML == Symbol &&
    cells[5].innerHTML == Symbol
  )
    gameIsOver = true
  else if (
    cells[6].innerHTML == Symbol &&
    cells[7].innerHTML == Symbol &&
    cells[8].innerHTML == Symbol
  )
    gameIsOver = true
  // Verical //
  if (
    cells[0].innerHTML == Symbol &&
    cells[3].innerHTML == Symbol &&
    cells[6].innerHTML == Symbol
  )
    gameIsOver = true
  else if (
    cells[1].innerHTML == Symbol &&
    cells[4].innerHTML == Symbol &&
    cells[7].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[2].innerHTML == Symbol &&
    cells[5].innerHTML == Symbol &&
    cells[8].innerHTML == Symbol
  )
    gameIsOver = true
  // Diagonal  //
  if (
    cells[0].innerHTML == Symbol &&
    cells[4].innerHTML == Symbol &&
    cells[8].innerHTML == Symbol
  )
    gameIsOver = true
  else if (
    cells[2].innerHTML == Symbol &&
    cells[4].innerHTML == Symbol &&
    cells[6].innerHTML == Symbol
  )
    gameIsOver = true

  let isStale = stalemate()

  if (gameIsOver) {
    winner = noughtsTurn ? 'Player 1 Won' : 'Player 2 Won'
  }

  if (isStale) {
    gameIsOver = true
    winner = 'Stalemate'
  }

  return gameIsOver
}
