document.querySelector('#scrollBtn1').addEventListener('click', function(){
    scrollDiagonally('down-right');
})

document.querySelector('#scrollBtn2').addEventListener('click', function(){
  scrollDiagonally('down-left');
})

document.querySelector('#scrollBtn3').addEventListener('click', function(){
    scrollDiagonally('up-right');
})

document.querySelector('#scrollBtn4').addEventListener('click', function(){
    scrollDiagonally('up-left');
})

let currentPosition = {x: 0, y: 0};

function scrollDiagonally(direction) {
    const content = document.querySelector('#sc-1');
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
}