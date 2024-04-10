// Fade in TITLE and EXPLORE button when landing page loads

window.addEventListener('load', function(){
    document.querySelector('#title').classList.remove('hide');
    document.querySelector('#explore').classList.remove('hide');
})

// Interactivity when user clicks EXPLORE button

const exploreBtn = document.querySelector('#explore');

exploreBtn.addEventListener('click', function(){
    const windowElement = document.querySelector('#zoomWindow');
    
    windowElement.style.overflow = 'hidden';
    windowElement.style.animation = 'zoomLandingPage 1.5s forwards';

    document.querySelector('#lNameN').className = 'anim-letter-out-left';
    document.querySelector('#lNameG').className = 'anim-letter-out-right';

    this.style.visibility = 'hidden';
    document.querySelector('#title').classList.add('anim-title-out-down');

    // QUESTION: Is below the best way to redirect to the new page after the animation has finished??
    
    const letterOut = document.querySelector('.anim-letter-out-left');
    letterOut.addEventListener('animationend', function(){
        window.location.href = './basicinfo.html';
    })
})