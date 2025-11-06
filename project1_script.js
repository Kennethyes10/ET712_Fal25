// The button navigation
// It handles switching between colors,numbers,animals and shapes sections
const btnColors = document.querySelectorAll('.btnColors');
const btnNumbers = document.querySelectorAll('.btnNumbers');
const btnAnimals = document.querySelectorAll('.btnAnimals');
const btnShapes = document.querySelectorAll('.btnShapes');
const btnHomes = document.querySelectorAll('.btnHome');


const sections = {
    home: document.querySelector('.home'),
    colors: document.querySelector('.colors'),
    numbers: document.querySelector('.numbers'),
    animals: document.querySelector('.animals'),
    shapes: document.querySelector('.shapes')
};



function hideAllSections() {
    for(let sec in sections) {
        sections[sec].style.display = 'none';
    }
}

hideAllSections();
sections.home.style.display = 'block';

// When the button is clicked
btnColors.forEach(btn => {
    btn.addEventListener('click',() => {
    hideAllSections(); 
    sections.colors.style.display = 'block';
});
});

btnNumbers.forEach(btn => {
   btn.addEventListener('click',() => {
    hideAllSections(); 
    sections.numbers.style.display = 'block';
});
});

btnAnimals.forEach(btn => {
    btn.addEventListener('click',() => {
    hideAllSections(); 
    sections.animals.style.display = 'block';
});
});

btnShapes.forEach(btn => {
    btn.addEventListener('click',() => {
    hideAllSections(); 
   sections.shapes.style.display = 'block';
});
});

btnHomes.forEach(btn => {
    btn.addEventListener('click', () => {
        hideAllSections();
        sections.home.style.display = 'block';
    });
});

//Addding alerts
//It shows alert with the name of the color,number,shape or animal when is clicked
document.querySelectorAll('.color-boxes div').forEach(color => {
    color.addEventListener('click', () => {
        alert(`This color is ${color.textContent}`);
    });
});

document.querySelectorAll('.number-boxes div').forEach(number => {
    number.addEventListener('click', () => {
        alert(`This number is ${number.textContent}`);
    });
});

document.querySelectorAll('.animal-boxes div').forEach(animal => {
    animal.addEventListener('click', () => {
        alert(`This animal is ${animal.querySelector('p').textContent}`);
    });
});

document.querySelectorAll('.shape-boxes div').forEach(shape => {
    shape.addEventListener('click', () => {
        alert(`This shape is ${shape.textContent}`);
    });
});

// Go--- to top button ---
// It displays when is scrolling and scrolls smoothly back to the top
const topBtn = document.getElementById('topBtn');

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
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
