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

const originalPosition = {x: 0, y: 0}
let newPosition = {x: 0, y: 0};

function scrollDiagonally(direction) {
    const contentDivs = document.querySelectorAll('.scroll-content');
    let currentPosition;
    let counter = 0;
    let transformValue;

    contentDivs.forEach(cdiv => {
      console.log(cdiv);
      counter++;

      if(originalPosition === newPosition){
        currentPosition = {x: 0, y: 0};
      } else {currentPosition = newPosition}

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
      cdiv.style.transform = transformValue;

      if(originalPosition === newPosition && counter !== contentDivs.length){
        currentPosition = {x: 0, y: 0};
      } else {currentPosition = newPosition} // This happens at the end

    });
    newPosition.x = currentPosition.x;
    newPosition.y = currentPosition.y;
}