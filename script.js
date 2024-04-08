window.addEventListener('load', function(){
    document.querySelector('#title').style.opacity = '1';
})



// event listener when user clicks 'explore'

const exploreBtn = document.querySelector('#explore');

exploreBtn.addEventListener('click', function(){
    const animLetters = document.getElementsByClassName('animated-letter-in');
    Array.from(animLetters).forEach(letter => {
        letter.className = 'animated-letter-out';
    });
    document.querySelector('#title').style.opacity = '0';
    
    const letterOut = document.querySelector('.animated-letter-out');
    letterOut.addEventListener('animationend', function(){
        window.location.href = './basicinfo.html';
    })
})