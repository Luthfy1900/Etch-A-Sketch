
const myDiv = document.querySelector('#container');
const sizeButton = document.querySelector('#size');
const myButton = document.querySelector('#reset-btn');
//creating a div for the boxes
const childDiv = document.createElement('div');
childDiv.classList.add('my_son');
myDiv.appendChild(childDiv);

// Function to create the rows and cols 
function myGrids(cols, rows) {
    for (let i = 0; i < (cols * rows); i++) {
        const squares = document.createElement('div'); // new div to store the new boxes
        childDiv.style.gridTemplateColumns = `repeat(${cols}, 1fr)`; // column creation with repeatation attribute
        childDiv.style.gridTemplateRows = `repeat(${rows}, 1fr)`; // row creation with repeatation attribute
        childDiv.appendChild(squares).classList.add('boxes');
    }
}
myGrids(16, 16);

function fillBox(evt) {
    evt.preventDefault(); // we tell the browser that we handle that event, not the computer
    this.classList.add('filled');
}

function startDrawing(evt) {
    evt.preventDefault(); // we tell the browser that we handle that event, not the computer
    const squares = document.querySelectorAll('.boxes');
    squares.forEach(boxes => boxes.addEventListener('mouseover', fillBox));
}

function stopDrawing(evt) {
    evt.preventDefault(); // we tell the browser that we handle that event, not the computer
    const squares = document.querySelectorAll('.boxes');
    squares.forEach(boxes => boxes.removeEventListener('mouseover', fillBox));
}

function clearGrid() {
    const squares = document.querySelectorAll('.boxes');
    squares.forEach(boxes => boxes.classList.remove('filled'));
}
// adding the eventListeners to the parent div of the squares 
childDiv.addEventListener('mousedown', startDrawing);
childDiv.addEventListener('mouseup', stopDrawing);


myButton.onclick = clearGrid;

function reSize() {

    sizeButton.textContent = 'GRID SIZE'
    sizeButton.addEventListener('click', () => {
        let user = prompt('Enter The Size You Want')
        if (user === null || user < 1) {
            clearGrid();
            myGrids(16, 16);
        } else {
            clearGrid();
            myGrids(user, user);
        }
    })
}
reSize()