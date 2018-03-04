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
  cells[i].addEventListener('click', render)
}

for (let i = 0; i<colors.length; i++) {
  colors[i].addEventListener('click', chooseColor)
}

colorWheel.addEventListener('blur', function (){
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
      let newDiv = addDiv()
      newRow.appendChild(newDiv)
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
function addDiv() {
  const newDiv = document.createElement("div");
  newDiv.classList.add('cell')
  return newDiv
}

function render() {
  event.target.style.backgroundColor = paintColor
}

function chooseColor() {
  paintColor = event.target.style.backgroundColor
  colorIndicator.style.backgroundColor = paintColor
}
