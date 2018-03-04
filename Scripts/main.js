// Assigning variables
let cells = document.querySelectorAll('.cell')
let colors = document.querySelectorAll('.color-palette div')
console.log(colors[0])
let paintColor = 'white'

// Adding Event Listeners
for (let i = 0; i<cells.length; i++) {
  cells[i].addEventListener('click', render)
}

for (let i = 0; i<colors.length; i++) {
  colors[i].addEventListener('click', chooseColor)
}


// Functions
function render() {
  console.log(paintColor)
  event.target.classList.add(paintColor)
  console.log(event.target)
}

function chooseColor() {
  paintColor = event.target.className
    console.log(paintColor)
}
