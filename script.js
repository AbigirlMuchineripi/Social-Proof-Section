
let  i = 0;
const target = 10000;
const increment = 250;
const h1 = document.getElementById('main-card__section1-title');

function updateCount() {
    if (i <= target) {
        h1.textContent = `${i}+ satisfied customers`;
        i += increment;
        setTimeout(updateCount, 100); 
    }
}

window.onload = function() {
        updateCount();    
};