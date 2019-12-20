function changeOpacity(e) {
    document.getElementById(e.target.id).style.opacity = Number(document.getElementById(e.target.id).style.opacity) + 0.1;
}

const container = document.querySelector('#container');

for(let i = 0; i < 16; i++) {
    const grid = document.createElement('div');
    grid.className = 'box';
    grid.id = 'box'+i;
    container.appendChild(grid);
}

const gridCells = document.querySelectorAll('.box');
gridCells.forEach(cell => cell.addEventListener('mouseover', changeOpacity));