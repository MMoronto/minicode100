const container = document.getElementById('container');
const radiusCB = document.querySelectorAll('.radius input');
const itemsEl = document.getElementById('items');
const colorsEl = document.getElementById('colors');

const colorsObj = {
  'purplish': ['purple', 'violet', 'lavender'],
  'redish': ['red'],
  'greenish': ['green'],
  'brownish': ['brown'],
  'blueish': ['blue']
}

let colors = [...colorsObj.purplish];
let items = 15;
let radiusArr = ['100%', '0%', '0%', '0%'];

radiusCB.forEach((checkbox, idx) => {
    checkbox.addEventListener('change', (e) => {
        radiusArr[idx] = e.target.checked ? '100%' : '0%';
        createTitles();
    });
});

itemsEl.addEventListener('change', (e) => {
    items = +e.target.value;
    createTiles();
});

colorsEl.addEventListener('change', (e) => {
    colors = [...colorsObj[e.target.value]];
    createTiles();
});

function createTitles() {
    // Clear everything
    container.innerHTML = '';

    const { innerWidth: width, innerHeight: height } = window;
    const radius = radiusArr.reduce((acc, el) => acc+=`${el} `, '');
    const itemsRow = items;
    const itemsCol = items;
    const rowSize = width / itemsRow;
    const cilSize = height / itemsCol;

    for(let i=0; i< itemsRow; i++) {
        const parentEl = document.createElement('div');
        for(let j=0; j<itemsCol; j++) {
            const size = Math.floor(Math.max(rowSize, colSize));
            const el = document.createElement('div');
            el.classList.add('element');
            el.style.width = `${size}px`;
            el.style.height = `${size}px`;
        }
        container.appendChild(parentEl);
    }
}
