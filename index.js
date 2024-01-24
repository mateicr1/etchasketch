const container = document.querySelector("#container");
const buttons = document.querySelector('#buttons');
const colors = ['red', 'blue', 'green', 'pink', 'purple', 'yellow', 'orange', 'indigo', 'violet'];
let gridSize = 16;
let penColor = "black";
let rainbowPenMode = false;
let drawMode = true;

function createGrid(gridSize) {
    for (let i=0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${400 / gridSize}px`;
        square.style.height = `${400 / gridSize}px`;
    
        // drawing
        square.addEventListener('mouseover', () => {
            if (drawMode) {
                if (rainbowPenMode) {
                    square.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                }
                else {
                    square.style.backgroundColor = penColor;
                }
            }
            else {
                return;
            }
            });

        container.appendChild(square);
    }
}

createGrid(gridSize);



// Clear grid button
const clearGridBtn = document.createElement('button');
clearGridBtn.textContent = "Clear grid";
buttons.appendChild(clearGridBtn);
clearGridBtn.addEventListener('click', clearGrid);

function clearGrid() {
    const squares = document.querySelectorAll(".square");

    squares.forEach(square => {
        square.style.backgroundColor='white';
    });
}



// Change grid button
const changeGridBtn = document.createElement('button');
changeGridBtn.textContent = "Grid size";
buttons.appendChild(changeGridBtn);
changeGridBtn.addEventListener('click', changeGrid);

function changeGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        container.removeChild(square);
    });
    const gridSize = window.prompt("enter grid size");


    createGrid(gridSize);
}

// Pen color button
const penColorBtn = document.createElement('button');
penColorBtn.textContent = "Pen color";
buttons.appendChild(penColorBtn);
penColorBtn.addEventListener('click', penColorFunc);

function penColorFunc() {
    const newPenColor = window.prompt("enter new pen color");
    penColor = newPenColor;
    console.log(penColor);
    rainbowPenMode = false;
}

// Rainbow pen color button
const rainbowPenBtn = document.createElement('button');
rainbowPenBtn.textContent = "Rainbow pen";
buttons.appendChild(rainbowPenBtn);
rainbowPenBtn.addEventListener('click', rainbowPenModeFunc);

function rainbowPenModeFunc() {
    if (rainbowPenMode === false) {
        rainbowPenMode = true;
    }
    else {
        rainbowPenMode = false;
    }
}

container.addEventListener('click', () => {
    if (drawMode === true) {
        drawMode = false;
    }
    else {
        drawMode = true;
    }
});