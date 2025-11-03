// The button navigation
const btnColors = document.querySelector('.btnColors');
const btnNumbers = document.querySelector('.btnNumbers');
const btnAnimals = document.querySelector('.btnAnimals');
const btnShapes = document.querySelector('.btnShapes');

const sections = {
    colors: document.querySelector('.colors'),
    numbers: document.querySelector('.numbers'),
    animals: document.querySelector('.animals'),
    shapes: document.querySelector('.shapes'),

};

function hideAllSections() {
    for(let sec in sections) {
        sections[sec].style.display = 'none';
    }
}

// When the button is clicked
btnColors.addEventListener('click',() => {
    hideAllSections(); 
    document.querySelector('.colors').style.display = 'block';
});

btnNumbers.addEventListener('click',() => {
    hideAllSections(); 
    document.querySelector('.colors').style.display = 'block';
});

btnAnimals.addEventListener('click',() => {
    hideAllSections(); 
    document.querySelector('.colors').style.display = 'block';
});

btnShapes.addEventListener('click',() => {
    hideAllSections(); 
    document.querySelector('.colors').style.display = 'block';
});

//Addding alerts
document.querySelectorALL('.color-boxes div').forEach(color => {
    color.addEventListener('click', () => {
        alert(`This color is ${color.textContent}`);
    });
});

document.querySelectorALL('.number-boxes div').forEach(number => {
    color.addEventListener('click', () => {
        alert(`This number is ${number.textContent}`);
    });
});

document.querySelectorALL('.animal-boxes div').forEach(animal => {
    color.addEventListener('click', () => {
        alert(`This animal is ${animalName}`);
    });
});

document.querySelectorALL('.shape-boxes div').forEach(shape => {
    color.addEventListener('click', () => {
        alert(`This shape is ${shape.textContent}`);
    });
});

const topBtn = document.getElementById('topBtn');
window.onscroll = function () {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


