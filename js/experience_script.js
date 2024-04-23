// how to prevent # from showing up when the back arrow is clicked? */

function toggleScrollArrow(){
    const arrow = document.querySelector('.sc-down');
    arrow.classList.toggle('expanded');
    setTimeout(toggleScrollArrow, 500);
}

toggleScrollArrow();

let currentPosition = {x: 0, y: 0};
const scrollDownBtn = document.querySelector('#sc-down');

scrollDownBtn.addEventListener('click', function(){
    if(currentPosition.y > -300){
        const positionChange = calcScrollPosition();
        Array.from(document.querySelectorAll('.exp-section')).forEach(item => {
            item.style.transform = positionChange;
        })
        scrollDownBtn.style.display = 'none';
        setTimeout(function(){scrollDownBtn.style.display = '';}, 1000);
    }
})

function calcScrollPosition(){
    let transformValue;
    currentPosition.y -= 120;
    transformValue = `translate(0, ${currentPosition.y}%)`;
    return transformValue;
}