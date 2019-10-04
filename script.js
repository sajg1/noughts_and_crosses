var origBoard;
const humanPlayer = "0";
const aiPlayer = "X";
const winCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

// This selects all instances that are of the class "cell"
const cells = document.querySelectorAll(".cell");
startGame();


function startGame() {
  // This is so that when you hit replay after the eng of a game, it will reset the display to none. If not, the engame box will still be present
  document.querySelector(".endgame").style.display = "none";
  // A quick way to create an array of keys. Array.from creates a shallow array from an iterable object. In this case we create an array from an array of 9 keys.
  origBoard = Array.from(Array(9).keys());
  // This for loop will clear all text in each cell and remove the background color from any of the winning cells.
  for( var i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
    cells[i].style.removeProperty('background-color');
    cells[i].addEventListener('click', turnClick, false);
  }
}

function turnClick(square) {
  turn(square.target.id, humanPlayer)
}

function turn(squareId, player) {
  origBoard[squareId] =  player;
  document.getElementById(squareId).innerText = player;
}
