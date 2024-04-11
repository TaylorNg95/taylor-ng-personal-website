document.querySelector('#scrollBtn1').addEventListener('click', function(){
    scrollDiagonally('#sc-1', 'down-right');
    scrollDiagonally('#sc-2', 'down-right');
    scrollDiagonally('#sc-3', 'down-right');
})

document.querySelector('#scrollBtn2').addEventListener('click', function(){
    scrollDiagonally('#sc-1', 'down-left');
    scrollDiagonally('#sc-2', 'down-left');
    scrollDiagonally('#sc-3', 'down-left');
})

document.querySelector('#scrollBtn3').addEventListener('click', function(){
    scrollDiagonally('#sc-1', 'up-right');
    scrollDiagonally('#sc-2', 'up-right');
    scrollDiagonally('#sc-3', 'up-right');
})

document.querySelector('#scrollBtn4').addEventListener('click', function(){
    scrollDiagonally('#sc-1', 'up-left');
    scrollDiagonally('#sc-2', 'up-left');
    scrollDiagonally('#sc-3', 'up-left');
})

let currentPosition = {x: 0, y: 0};

function scrollDiagonally(scrollContent, direction) {
    const content = document.querySelector(scrollContent);
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
    content.style.transform = transformValue;

    /* switch(direction) {
        case 'down-right': transformValue = 'translate(-100%, -100%)'; break;
        case 'down-left': transformValue = 'translate(100%, -100%)'; break;
        case 'up-right': transformValue = 'translate(-100%, 100%)'; break;
        case 'up-left': transformValue = 'translate(100%, 100%)'; break;
        default: transformValue = 'translate(0, 0)'
    }

    content.style.transform = transformValue; */

    /* var content1 = document.querySelector('.port-content1');
    content1.classList.toggle('scroll-tl-br');
    var content2 = document.querySelector('.port-content2');
    content2.classList.toggle('scroll-tl-br');
    var content1 = document.querySelector('.port-content3');
    content1.classList.toggle('scroll-tl-br'); */
}

/* function scrollDiagonally2() {
    var content1 = document.querySelector('.port-content1');
    content1.classList.add('scroll-tr-bl');
    var content2 = document.querySelector('.port-content2');
    content2.classList.add('scroll-tr-bl');
    var content3 = document.querySelector('.port-content3');
    content3.classList.add('scroll-tr-bl');
} */