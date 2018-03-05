////// CREATING GRID /////
let cellGrid = document.querySelector('.cellGrid')
let gridHeight = 15
let gridWidth = 20
createGrid()

////// VARIABLE DECLARATION  /////
let cells = document.querySelectorAll('.cell')
let colors = document.querySelectorAll('.color-palette div')
let colorIndicator = document.getElementById('colorIndicator')
let colorWheel = document.querySelector('input')
let paintColor = 'white'
let paintToggle = false
colorIndicator.style.backgroundColor = paintColor

///// EVENT LISTENERS /////
// GRID
cellGrid.addEventListener('click', togglePaint)
cellGrid.addEventListener('mouseover', painting)

// COLOR PALETTE
for (let i = 0; i<colors.length; i++) {
  colors[i].addEventListener('click', chooseColor)
}
colorWheel.addEventListener('change', function (){
  paintColor=event.target.value
  colorIndicator.style.backgroundColor = paintColor
})

///// FUNCTIONS /////
// GRID CREATION //
function createGrid() {
  // Creates the grid based on the gridHeight and gridWidth dimensions stated above
  for (let i=0; i<gridHeight; i++) {
    let newRow = addRow()
    cellGrid.appendChild(newRow)
    for (let j=0; j<gridWidth; j++) {
      let newCell = addCell()
      newCell.style.backgroundColor = 'white'
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

// Create a div
function addCell() {
  const newCell = document.createElement("div");
  newCell.classList.add('cell')
  return newCell
}

// PAINTING FUNCTIONS //
function togglePaint(event) {
  if (event.target.classList.contains('cell')) {
    paintToggle = !paintToggle
    event.target.style.backgroundColor = paintColor
  }
}

function painting(event) {
  if (event.target.classList.contains('cell')) {
    if (paintToggle) {
      event.target.style.backgroundColor = paintColor
    }
  }
}

// CHOOSE A COLOR //
function chooseColor() {
  paintToggle = false
  paintColor = event.target.style.backgroundColor
  colorIndicator.style.backgroundColor = paintColor
}
