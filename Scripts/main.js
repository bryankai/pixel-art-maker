// INITIALIZING
let cellGrid = document.querySelector('.cellGrid')
let gridHeight = 15
let gridWidth = 20
createGrid()
// Assigning variables
let cells = document.querySelectorAll('.cell')
let colors = document.querySelectorAll('.color-palette div')
let colorIndicator = document.getElementById('colorIndicator')
let colorWheel = document.querySelector('input')
let paintColor = 'white'


// Adding Event Listeners
for (let i = 0; i<cells.length; i++) {
  cells[i].addEventListener('mousedown', render)
  // Need to use mousedown, mouseneter, and mouseup
  // If i click, change that cells
  // If key is pressed, then do mouseenter
  // also do mouseup?
}

for (let i = 0; i<colors.length; i++) {
  colors[i].addEventListener('click', chooseColor)
}

colorWheel.addEventListener('change', function (){
  paintColor=event.target.value
  colorIndicator.style.backgroundColor = paintColor
})

// Functions
function createGrid() {
  // Creates the grid based on the gridHeight and gridWidth dimensions stated above
  for (let i=0; i<gridHeight; i++) {
    let newRow = addRow()
    cellGrid.appendChild(newRow)
    for (let j=0; j<gridWidth; j++) {
      let newCell = addCell()
      newRow.appendChild(newCell)
    }
  }
}

// Create a row
function addRow() {
  const newRow = document.createElement("div");
  newRow.classList.add('row')
  return newRow
}

//Create a div
function addCell() {
  const newCell = document.createElement("div");
  newCell.classList.add('cell')
  return newCell
}

function render() {
  event.target.style.backgroundColor = paintColor
}

function chooseColor() {
  paintColor = event.target.style.backgroundColor
  colorIndicator.style.backgroundColor = paintColor
}
