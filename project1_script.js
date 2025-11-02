// The button navigation
const btnColors = document.querySelectorAll('.btnColors');
const btnNumbers = document.querySelectorAll('.btnNumbers');
const btnAnimals = document.querySelectorAll('.btnAnimals');
const btnShapes = document.querySelectorAll('.btnShapes');

const sections = {
    colors: document.querySelector('.colors'),
    numbers: document.querySelector('.numbers'),
    animals: document.querySelector('.Animals'),
    shapes: document.querySelector('.shapes'),

};

function hideAllSections() {
    for(let sec in sections) {
        sections[sec].style.display = 'none';
    }
}

// When the button is clicked
const btncolors = document.querySelector('.btnColors');

btnColors.addEvenListener('click',() => {
    hideAllSections(); 
    document.querySelectorAll('.colors').style.display = 'block';
});

const btnnumbers = document.querySelector('.btnColors');

btnnumbers.addEvenListener('click',() => {
    hideAllSections(); 
    document.querySelectorAll('.colors').style.display = 'block';
});

const btnanimals = document.querySelector('.btnColors');

btnanimals.addEvenListener('click',() => {
    hideAllSections(); 
    document.querySelectorAll('.colors').style.display = 'block';
});

const btnshapes = document.querySelector('.btnColors');

btnshapes.addEvenListener('click',() => {
    hideAllSections(); 
    document.querySelectorAll('.colors').style.display = 'block';
});

//Addding alerts
document.querySelectorAll('.color').forEach(color => {
    color.addEventListener('click',  () => {
        alert(`This color is ${color.textContent}`);
    });
});

document.querySelectorAll('.number').forEach(number => {
    color.addEventListener('click',  () => {
        alert(`This number is ${number.textContent}`);
    });
});

document.querySelectorAll('.animal').forEach(animal => {
    color.addEventListener('click',  () => {
        alert(`This animal is ${animaName}`);
    });
});

document.querySelectorAll('.shape').forEach(shape => {
    color.addEventListener('click',  () => {
        alert(`This shape is ${shape.textContent}`);
    });
});


