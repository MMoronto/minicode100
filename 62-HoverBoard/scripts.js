const container = document.getElementById('container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71' ];
const SQUARES_NR = 500;

for(let i=0; i<SQUARES_NR; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventLister('mouseover', () => {});

    square.addEventLister('mouseout', () => {});

    container.appendChild(square);
}

function setColorToEl(element) {}

function removeColorFromEl(element) {}

function getRandomColor() {}
