/* // THIS WAS THE PREVIOUS CODE IN ORDE TO SCROLL DIAGONALLY

let currentPosition = {x: 0, y: 0};
const contentDivs = document.querySelectorAll('.scroll-content');

document.querySelector('#scroll-dr').addEventListener('click', function(event){
    event.preventDefault();
    const positionChange = calcScrollPosition('down-right');
    Array.from(contentDivs).forEach(item => {
        item.style.transform = positionChange;
    })
    this.style.display = 'none';
    document.querySelector('#scroll-ul').style.display = 'inline';
    document.querySelector('#scroll-dl').style.display = 'inline';
})

document.querySelector('#scroll-ul').addEventListener('click', function(event){
    event.preventDefault();
    const positionChange = calcScrollPosition('up-left');
    Array.from(contentDivs).forEach(item => {
        item.style.transform = positionChange;
    })
    this.style.display = 'none';
    document.querySelector('#scroll-dr').style.display = 'inline';
})

document.querySelector('#scroll-dl').addEventListener('click', function(event){
    event.preventDefault();
    const positionChange = calcScrollPosition('down-left');
    Array.from(contentDivs).forEach(item => {
        item.style.transform = positionChange;
    })
    this.style.display = 'none';
    document.querySelector('#scroll-dr').style.display = 'inline';
    document.querySelector('#scroll-ur').style.display = 'inline';
})

document.querySelector('#scroll-ur').addEventListener('click', function(event){
    event.preventDefault();
    const positionChange = calcScrollPosition('up-right');
    Array.from(contentDivs).forEach(item => {
        item.style.transform = positionChange;
    })
})

document.querySelector('#scroll-top').addEventListener('click', function(){
    const positionChange = calcScrollPosition('top');
    Array.from(contentDivs).forEach(item => {
      item.style.transform = positionChange;
    })
  })

function calcScrollPosition(direction){
    let transformValue;

    switch(direction) {
        case 'down-right':
            currentPosition.x -= 100;
            currentPosition.y -= 100;
            break;
        case 'down-left':
            currentPosition.x += 100;
            currentPosition.y -= 100;
            break;
        case 'up-right':
            currentPosition.x -= 100;
            currentPosition.y += 100;
            break;
        case 'up-left':
            currentPosition.x += 100;
            currentPosition.y += 100;
            break;
        default:
            currentPosition.x = 0;
            currentPosition.y = 0;
    }
    transformValue = `translate(${currentPosition.x}%, ${currentPosition.y}%)`;
    return transformValue;
}

// how to prevent # from showing up when the back arrow is clicked? */

function toggleScrollArrow(){
    const arrow = document.querySelector('.sc-down');
    arrow.classList.toggle('expanded');
    setTimeout(toggleScrollArrow, 500);
}

toggleScrollArrow();

let currentPosition = {x: 0, y: 0};
const contentDivs = Array.from(document.querySelectorAll('.scroll-content'));
contentDivs.pop();

const scrollDownBtn = document.querySelector('#sc-down');
scrollDownBtn.addEventListener('click', function(){
    if(currentPosition.y > -300){
        const positionChange = calcScrollPosition();
        contentDivs.forEach(item => {
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