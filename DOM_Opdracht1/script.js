const myButton = document.querySelector('#mybutton');
const chgBgButton = document.querySelector('#chgbgbutton');

myButton.addEventListener('click', function(e){
    alert('Button Clicked.');
})


const changeColor = function(){
    const body = document.querySelector('body');
    body.classList.add('red-background');
}

const toggleColor = function(){
    const body = document.querySelector('body');
    body.classList.toggle('red-background');
}

//chgBgButton.addEventListener('click', changeColor);
chgBgButton.addEventListener('click', toggleColor);


