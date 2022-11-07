// Generate a random number within a range
// The maximum is inclusive and the minimum is inclusive
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Setup mouse drawing on the grid
function setupDrawOnGrid() {
    document.querySelector('.gridContainer').addEventListener('mouseover', (e) => {
        if (! e.target.classList.contains('gridContainer')) {
            e.target.style.backgroundColor = 'transparent';
        }
    });
}

// Have the user change the dimensions of the grid
function changeGrid() {
    let squaresPerSide = prompt('How many squares per side?\nPlease enter a number between 0 and 50.');
    if (squaresPerSide > 0 && squaresPerSide <= 50) {
        document.querySelector('.gridContainer').innerHTML = '';
        createGrid(squaresPerSide);
    } else {
        squaresPerSide = alert('Please enter a number between 0 and 50.');
        changeGrid();
    }
}

// Create a new grid
function createGrid(squaresPerSide) {
    const gridContainer = document.querySelector('.gridContainer');
    let gridWidth = 960;
    let availableWidth = gridWidth - (squaresPerSide * 2);
    let squareWidth = availableWidth / squaresPerSide;
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        let div = document.createElement('div');
        div.style.width = squareWidth + 'px';
        div.style.backgroundColor = 'white';
        gridContainer.appendChild(div);

        gridContainer.style.backgroundImage = 'url("../img/' + getRandomIntInclusive(0, 3) + '.png")';

    }
    setupDrawOnGrid();
}

// Initiate the grid
function init() {
    createGrid(16);

    document.querySelector('.gridChangeBtn').addEventListener('click', (e) => {
        changeGrid();
    });
    
    document.querySelector('.newGridBtn').addEventListener('click', (e) => {
        document.querySelector('.gridContainer').innerHTML = '';
        createGrid(getRandomIntInclusive(4, 16));
    });
}

init();
