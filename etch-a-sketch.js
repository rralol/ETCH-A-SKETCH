function changeCell(e) {
    if (colorMode) {
        document.getElementById(e.target.id).style.backgroundColor = "rgb("+getRandomInt(255)+","+getRandomInt(255)+","+getRandomInt(255)+")";
        document.getElementById(e.target.id).style.opacity = 1;
    }
    else {
        document.getElementById(e.target.id).style.backgroundColor = "black";
        document.getElementById(e.target.id).style.opacity = Number(document.getElementById(e.target.id).style.opacity) + 0.1;
    }
}

function changeMode() {
    if (colorMode) {
        colorMode = false;
    }
    else {
        colorMode = true;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random()*Math.floor(max));
}

function removeGrid() {
    const gridCells = document.getElementsByClassName('box');
    while (gridCells.length > 0) {
        gridCells[0].parentNode.removeChild(gridCells[0]);
    }
}

function changeGrid() {
    removeGrid();
    createGrid(document.getElementById('gridsize').value);
}

function attatchGridListeners() {
    const gridCells = document.querySelectorAll('.box');
    gridCells.forEach(cell => cell.addEventListener('mouseover', changeCell));
}

function createGrid(size) {
    document.getElementById('container').style = "grid-template: repeat("+size+", 1fr ) / repeat("+size+", 1fr)";
    for(let i = 0; i < (size*size); i++) {
        const grid = document.createElement('div');
        grid.className = 'box';
        grid.id = 'box'+i;
        container.appendChild(grid);
    }
    attatchGridListeners();
}

let colorMode = false;

const container = document.querySelector('#container');
//Add listners to Buttons
document.getElementById("create").addEventListener('click', changeGrid);
document.getElementById("mode").addEventListener('click', changeMode);
//Create initial grid
createGrid(4,4);