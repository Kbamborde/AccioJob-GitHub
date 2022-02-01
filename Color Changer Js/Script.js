const button = document.getElementById('btn');
const body = document.querySelector('body');
const colors = ['red','green','blue','yellow','grey','pink','purple'];

body.style.backgroundColor = 'violet';
button.addEventListener("click", changeBackground);

function changeBackground(){
    const colorIndex = parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex]
}