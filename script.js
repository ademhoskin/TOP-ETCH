const areaBtn = document.createElement('button');
areaBtn.textContent = 'Change Area';
document.body.appendChild(areaBtn);

areaBtn.addEventListener('click', (e) => {
    let gridValueUpdated = parseInt(prompt('Enter a number between 1 and 100'));
    while (gridValueUpdated < 1 || gridValueUpdated > 100) {
        gridValue = parseInt(prompt('Enter a number between 1 and 100'));
    }
    gridRemover();
    gridBuilder(gridValueUpdated);
});

// create container div
const container = document.createElement('div');
container.setAttribute('class', 'container');
container.style.display = 'flex';
container.style.flexFlow = 'row wrap';
document.body.appendChild(container);
container.style.width = '800px';
container.style.height = '800px';

// function to reinstantiate grid
const gridRemover = () => {
    const grid = document.querySelector('.container');
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    };
};

// default grid is 16x16
const gridBuilder = (gridValue = 16) => {
    for(let r = 0; r < gridValue; r++){
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        row.style.display = 'flex';
        row.style.width = '800px';
        row.style.height = `${800/gridValue}px}`;
        row.style.flexFlow = 'row wrap';
        document.querySelector('.container').appendChild(row);
        for (let i = 0; i < gridValue ; i++) {
            const square = document.createElement('div');
            square.setAttribute('class', 'square');
            square.style.boxSizing = 'border-box';
            square.style.width = `${800/gridValue}px`;
            square.style.height = `${800/gridValue}px`;
            square.style.border = '1px solid black';
            square.style.backgroundColor = 'white';
            row.appendChild(square);
        };
    };
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        }
    );
});

};
gridBuilder();
