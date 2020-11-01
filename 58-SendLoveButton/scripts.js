const love_btns = document.querySelectorAll('.love');

love_btns.forEach(love_btn => {
    love_btn.addEventListener('mousedown', (e) => {
        love_btn.style.background = '#fff';
        love_btn.style.color = '#7273F';
        love_btn.querySelector('.text').innerHTML = '<span class="grey-text">Sent to:</span> MOBOLA';

        createHearts(love_btn.querySelector('.icon-container'));
    });

    love_btn.addEventListener('mouseup', (e) => {});
})

function createHearts(container) {}
