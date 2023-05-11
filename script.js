const areaBtn = document.createElement('button');
areaBtn.textContent = 'Change Area';
document.body.appendChild(areaBtn);

areaBtn.addEventListener('click', (e) => {
    let gridValue = parseInt(prompt('Enter a number between 1 and 100'));
    while (gridValue < 1 || gridValue > 100) {
        gridValue = parseInt(prompt('Enter a number between 1 and 100'));
    }
    return gridValueUpdated;
});

//DEFAULT GRID


const container = document.createElement('div');
container.setAttribute('class', 'container');
container.style.display = 'flex';
container.style.flexFlow = 'row wrap';
document.body.appendChild(container);

const gridBuilder = (gridValue = 22) => {
    for(let r = 0; r < gridValue; r++){
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        row.style.display = 'flex';
        row.style.flexFlow = 'row wrap';
        row.style.width = '800px';
        row.style.height = '0px';
        document.querySelector('.container').appendChild(row);
        for (let i = 0; i < gridValue ; i++) {
            const square = document.createElement('div');
            square.setAttribute('class', 'square');
            square.style.width = `calc(800px / {gridValue}**2)`;
            square.style.height = `calc(800px / {gridValue}**2)`;
            square.style.border = '1px solid black';
            square.style.padding = '1em';
            square.style.backgroundColor = 'white';
            document.querySelector('.container').appendChild(square);
        };
    };
};
gridBuilder();

const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black';
    }
    );
});



