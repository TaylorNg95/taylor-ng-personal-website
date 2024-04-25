// Animation for arrows that point to EXPLORE button

const arrows = document.querySelectorAll('.arrow');

let arrowIndex = 0;
let visibilityDuration = 500;

function toggleVisibility(){
    arrows.forEach(arrow => {
        arrow.classList.add('hide');
    });
    arrows[arrowIndex].classList.remove('hide');
    if(arrowIndex + 1 === arrows.length){arrowIndex = 0;}
    else {arrowIndex++};
}

const arrowInterval = setInterval(toggleVisibility, 500);

// Interactivity when user clicks EXPLORE button

const exploreBtn = document.querySelector('#explore');

exploreBtn.addEventListener('click', function(){
    clearInterval(arrowInterval);
    arrows.forEach(arrow => {
        arrow.classList.add('hide');
    })

    const windowElement = document.querySelector('#index-body');
    
    windowElement.style.overflow = 'hidden';
    windowElement.style.animation = 'zoomOutLandingPage 1.5s forwards';

    document.querySelector('#lNameN').className = 'anim-letter-out-left';
    document.querySelector('#lNameG').className = 'anim-letter-out-right';

    document.querySelector('#title').classList.add('anim-title-out-down');
    this.style.visibility = 'hidden';

    // QUESTION: Is below the best way to redirect to the new page after the animation has finished??
    
    const letterOut = document.querySelector('.anim-letter-out-left');
    letterOut.addEventListener('animationend', function(){
        window.location.href = './aboutme.html';
    })
})