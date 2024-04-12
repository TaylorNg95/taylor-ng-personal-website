let currentPosition = {x: 0, y: 0};
const contentDivs = document.querySelectorAll('.scroll-content');

document.querySelector('#scrollBtn1').addEventListener('click', function(){
    const positionChange = scrollDiagonally('down-right');
    Array.from(contentDivs).forEach(item => {
      item.style.transform = positionChange;
    })
})

document.querySelector('#scrollBtn2').addEventListener('click', function(){
  const positionChange = scrollDiagonally('down-left');
  Array.from(contentDivs).forEach(item => {
    item.style.transform = positionChange;
  })
})

document.querySelector('#scrollBtn3').addEventListener('click', function(){
  const positionChange = scrollDiagonally('up-right');
  Array.from(contentDivs).forEach(item => {
    item.style.transform = positionChange;
  })
})

document.querySelector('#scrollBtn4').addEventListener('click', function(){
  const positionChange = scrollDiagonally('up-left');
  Array.from(contentDivs).forEach(item => {
    item.style.transform = positionChange;
  })
})


function scrollDiagonally(direction) {
    /* const content = document.querySelector('#sc-1'); */
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
    /* content.style.transform = transformValue; */
}