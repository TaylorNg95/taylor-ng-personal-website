window.addEventListener('load', function(){
    document.querySelector('#title').style.opacity = '1';
    document.querySelector('#explore').style.opacity = '1';
})



// event listener when user clicks 'explore'

const exploreBtn = document.querySelector('#explore');

function alternateClasses(){
    if(exploreBtn.classList.contains('highlighted')){
        exploreBtn.classList.remove('highlighted');
        exploreBtn.classList.add('unhighlighted');
    } else if(exploreBtn.classList.contains('unhighlighted')){
        exploreBtn.classList.remove('unhighlighted');
        exploreBtn.classList.add('highlighted');
    }
    setTimeout(alternateClasses, 1000);
}

alternateClasses();

exploreBtn.addEventListener('click', function(){
    const animLetters = document.getElementsByClassName('animated-letter-in');
    Array.from(animLetters).forEach(letter => {
        if(letter.id === 'lastNameN'){letter.className = 'animated-letter-out-left';}
        else if(letter.id === 'lastNameG'){letter.className = 'animated-letter-out-right';}
    });
    document.querySelector('#explore').style.opacity = '0';
    document.querySelector('#title').classList.add('animated-title-down');
    
    const letterOut = document.querySelector('.animated-letter-out-left');
    letterOut.addEventListener('animationend', function(){
        window.location.href = './basicinfo.html';
    })
})