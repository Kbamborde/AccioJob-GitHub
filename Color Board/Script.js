const colors = ['#ff7f50','#87cefa','#da70d6','#32cd32','#6495ed','#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0']

const container = document.getElementById('container');

const smallSquares = 810;

for (let i = 0; i < smallSquares; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
    
    square.addEventListener('mouseover',()=>setColor(square));
    square.addEventListener('mouseout',()=>removeColor(square));
}

function setColor(element){
    const color = randomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 3px ${color}`

}

function removeColor(element){
    element.style.background= '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function randomColor(){
    const index = Math.floor(Math.random()*colors.length);
    return colors[index];
}