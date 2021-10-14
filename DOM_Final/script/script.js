const setBackgroundColor = function(addColor) {
    const body = document.querySelector('body');
    body.classList.add(addColor);
    // remove other classes
    const otherColors = document.querySelectorAll("nav ul li");
    Array.from(otherColors).forEach(function(color){
       if (color.className != addColor) {
            body.classList.remove(color.className);
        }
    });
}

const setColorTitle = function(text) {
    text = text.charAt(0).toUpperCase() + text.slice(1);
    document.querySelector('.color-name').innerHTML = text;
}

const setRadioButton = function(text) {
    radiobtn = document.getElementById('radio-' + text);
    radiobtn.checked = true;  
}

const addClickEvent = function() {
    const allColors = document.querySelectorAll("nav ul li");
    Array.from(allColors).forEach(function(color){
        color.addEventListener('click', function() {
            setBackgroundColor(color.className); 
            setColorTitle(color.className);
            setRadioButton(color.className);
        }); 
    });

}

const addChangeEvent = function() {
    const radios = document.querySelectorAll('input[type=radio][name="selectedColor"]');
    Array.from(radios).forEach(function(radio) {
        radio.addEventListener('change', function() {
            setBackgroundColor(radio.value);
            setColorTitle(radio.value);    
            setRadioButton(radiovalue);
        });
    });
}

document.addEventListener('keydown', (event) => {
    const radios = document.querySelectorAll('input[type=radio][name="selectedColor"]');
    const radio = Array.from(radios)[event.key - 1];
    setBackgroundColor(radio.value);
    setColorTitle(radio.value);    
    setRadioButton(radio.value);
});

const menu = document.querySelector(".dropdown");
const menuContent = document.querySelector(".dropdown-content");
menu.addEventListener('mouseenter', function() {
    menuContent.style.height = "220px";
    menu.style.width = "100%";
});

menu.addEventListener('mouseleave', function() {
    menuContent.style.height = "0px";
    menu.style.width = "40px";
    
});

addClickEvent();
addChangeEvent();