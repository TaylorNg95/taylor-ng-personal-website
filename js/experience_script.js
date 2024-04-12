let currentPosition = {x: 0, y: 0};
const contentDivs = document.querySelectorAll('.scroll-content');

/* let down_right_valid = 1;
let down_left_valid = 0;
let up_right_valid = 0;
let up_left_valid = 0; */

document.querySelector('#scroll-dr').addEventListener('click', function(){
        const positionChange = calcScrollPosition('down-right');
        Array.from(contentDivs).forEach(item => {
            item.style.transform = positionChange;
        })
})

document.querySelector('#scroll-dl').addEventListener('click', function(){
        const positionChange = calcScrollPosition('down-left');
        Array.from(contentDivs).forEach(item => {
            item.style.transform = positionChange;
        })
})

document.querySelector('#scroll-ur').addEventListener('click', function(){
        const positionChange = calcScrollPosition('up-right');
        Array.from(contentDivs).forEach(item => {
            item.style.transform = positionChange;
        })
})

document.querySelector('#scroll-ul').addEventListener('click', function(){
        const positionChange = calcScrollPosition('up-left');
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

// NEED TO WORK ON THE FUNCTION BELOW IN ORDER TO PREVENT CERTAIN BUTTONS FROM TIGGERING WHEN NOT APPROPRIATE - I WOUDLD HAVE THE VARIABLES UP TOP AND TOGGLE ON SWITCHES AND USE IF STATEMENTS IN THE EVENT LISTENERS

/* function setButtonValidity(position) {
    switch(position) {
        case {x: 0, y: 0}:
            down_right_valid = 1;
            down_left_valid = 0;
            up_right_valid = 0;
            up_left_valid = 0;
          break;
        case {x: -100, y: -100}:
            down_right_valid = 0;
            down_left_valid = 1;
            up_right_valid = 0;
            up_left_valid = 1;
          break;
        case {x: 0, y: -200}:
            down_right_valid = 1;
            down_left_valid = 0;
            up_right_valid = 1;
            up_left_valid = 0;
          break;
        case {x: -100, y: -300}:
            down_right_valid = 0;
            down_left_valid = 0;
            up_right_valid = 0;
            up_left_valid = 1;
          break;
        default:
            down_right_valid = 1;
            down_left_valid = 0;
            up_right_valid = 0;
            up_left_valid = 0;
    }
} */