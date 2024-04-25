// how to prevent # from showing up when the back arrow is clicked? */

/* function toggleScrollArrow(){
    const arrow = document.querySelector('.sc-down');
    arrow.classList.toggle('expanded');
    setTimeout(toggleScrollArrow, 500);
}

toggleScrollArrow();

let currentPosition = {x: 0, y: 0};
const scrollDownBtn = document.querySelector('#sc-down');

scrollDownBtn.addEventListener('click', function(){
    if(currentPosition.y > -300){
        const positionChange = calcScrollPosition();
        Array.from(document.querySelectorAll('.exp-section')).forEach(item => {
            item.style.transform = positionChange;
        })
        scrollDownBtn.style.display = 'none';
        setTimeout(function(){scrollDownBtn.style.display = '';}, 1000);
    }
})

function calcScrollPosition(){
    let transformValue;
    currentPosition.y -= 120;
    transformValue = `translate(0, ${currentPosition.y}%)`;
    return transformValue;
} */


/* const element = document.querySelector('.scroll-left-animation');
const elementPosition = element.getBoundingClientRect().top;
console.log(elementPosition);

function checkPosition() {
    const viewportHeight = window.innerHeight;
    if (elementPosition - viewportHeight <= 0) {
        element.classList.add('slide-in');
        window.removeEventListener('scroll', checkPosition);
    }
}

window.addEventListener('scroll', checkPosition); */

/* function viewportTop(){
    const topOfViewPort = window.scrollY;
    console.log(topOfViewPort);
}

window.addEventListener('scroll', viewportTop);

function getDivViewportTop(element){
    const rect = element.getBoundingClientRect();
    return rect.top + window.scrollY;
} */

const navHeight = document.querySelector('nav').offsetHeight;
const footerHeight = document.querySelector('footer').offsetHeight;
const scrollableAmount = document.documentElement.scrollHeight - window.innerHeight - navHeight - footerHeight;
const threshold1 = scrollableAmount / 3;
const threshold2 = scrollableAmount * 2 / 3;

const jumpUpButton = document.querySelector('#jump-to-top');

window.addEventListener('scroll', function(){
    const amountScrolled = window.scrollY;
    if(amountScrolled < threshold1){
        const unScrollPercent = (threshold1 - amountScrolled) / threshold1;
        const offset = unScrollPercent * 100;
        const exp2 = document.querySelector('#exp-2');
        exp2.style.left = '-' + offset + '%';
    } else if(amountScrolled >= threshold1 && amountScrolled < threshold2){
        const unScrollPercent = (threshold2 - amountScrolled) / (threshold2 - threshold1);
        const offset = unScrollPercent * 100;
        const exp3 = document.querySelector('#exp-3');
        exp3.style.left = offset + '%';
    } else if(amountScrolled >= threshold2){
        const unScrollPercent = (scrollableAmount - amountScrolled) / (threshold2 - threshold1);
        const offset = unScrollPercent * 100;
        const exp4 = document.querySelector('#exp-4');
        exp4.style.left = '-' + offset + '%';
        jumpUpButton.classList.toggle('hide');
    }

/* 1.25 is used so that the 'Jump to Top' button only appears when Dartmouth is really shown */
    if(amountScrolled >= (1.25 * threshold2)){
        jumpUpButton.classList.remove('hide');
    } else{
        jumpUpButton.classList.add('hide');
    }
})

jumpUpButton.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})