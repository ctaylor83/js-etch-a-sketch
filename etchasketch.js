const container = document.getElementById("container");
const newGridBtn = document.getElementById("new-grid");

function createGrid(size) {
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener("mouseover", changeColor);
        container.appendChild(square);
    }
}

function changeColor(e) {
    const currentColor = e.target.style.backgroundColor;
    if (currentColor === "") {
        e.target.style.backgroundColor = `rgb(230, 230, 230)`;
    } else {
        const rgbValues = currentColor.match(/\d+/g);
        const newRgbValues = rgbValues.map((value) => Math.max(value - 25, 0));
        e.target.style.backgroundColor = `rgb(${newRgbValues[0]}, ${newRgbValues[1]}, ${newRgbValues[2]})`;
    }
}

function newGrid() {
    let gridSize = parseInt(prompt("Enter the number of squares per side (max: 100):"));
    if (isNaN(gridSize) || gridSize < 1) {
        gridSize = 16;
    } else if (gridSize > 100) {
        gridSize = 100;
    }
    createGrid(gridSize);
}

newGridBtn.addEventListener("click", newGrid);
createGrid(16);
