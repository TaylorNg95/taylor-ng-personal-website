window.addEventListener('load', function(){
    const title = document.querySelector('#title');
    title.style.opacity = '1';
})



// event listener when user clicks 'explore'

const exploreBtn = document.querySelector('#explore');

exploreBtn.addEventListener('click', function(){
    const animLetters = document.getElementsByClassName('animated-letter-in');
    Array.from(animLetters).forEach(letter => {
        letter.className = 'animated-letter-out';
    });
})