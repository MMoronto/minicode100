const app = document.getElementById('app');
const animation = document.getElementById('animation');
const BLOCKS_NR = 20;
const blocks = [];
const b_width = Math.ceil(window.innerWidth / BLOCKS_NR);
const b_height = Math.ceil(window.innerHeight / BLOCKS_NR);

createBlocks('random');

animation.addEventListener('change', (e) => {
    const animation = e.target.value;
    cleanUp();
    createBlocks(animation)
});

function createBlocks(animation) {
    for(let i=0; i<BLOCKS_NR; i++) {
        const row = [];
        for(let j=0; j<BLOCKS_NR; j++) {
            const block = document.createElement('div');
            block.classList.add('block');
            block.style.width = b_width + 'px';
            block.style.height = b_height + 'px';

            switch(animation) {
                case 'fall': {}

                case 'random': {}

                case 'oval': {}

                case 'middle': {}
            }

            block.style.backgroundPosition = `${-b_width * j}px ${-b_height * i}px`;
            row.push(block);
            app.appendChild(block);
        }
        blocks.push(row);
    }

    setTimeout(() => {animateBlocks(animation) }, 1000);
}

function animateBlocks(animation) {}

function cleanUp() {}

