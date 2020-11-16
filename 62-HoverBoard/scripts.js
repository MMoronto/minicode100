const container = document.getElementById('container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71' ];
const SQUARES_NR = 500;

for(let i=0; i<SQUARES_NR; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventLister('mouseover', () => {
        setColorToEl(square);
    });

    square.addEventLister('mouseout', () => {
        removeColorFromEl(square);
    });

    container.appendChild(square);
}

function setColorToEl(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColorFromEl(element) {}

function getRandomColor() {}
