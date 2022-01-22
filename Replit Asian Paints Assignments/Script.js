const change = document.getElementById('change_button');
const reset = document.getElementById('reset_button');

reset.addEventListener('click', resetGrid);
change.addEventListener('click', changeColor);

function resetGrid() {
    const blocks = Array.from(document.querySelectorAll('.grid-item'));
    blocks.forEach((x) => {
        x.style.backgroundColor = "transparent";
    })
};

function changeColor(){
    const blockId = document.getElementById('block_id');
    const colourId = document.getElementById('colour_id');

    if(blockId.value > 9 || blockId.value < 1){
        alert('Please Enter ID Between 1 to 9 Only')
    }
    if(!colourId.value){
        alert("Please Enter Colour ID");
    }
    if(!blockId.value){
        alert("Please Enter Block ID")
    }

    resetGrid();
    
    const blocks = document.getElementById(blockId.value);
    blocks.style.backgroundColor = colourId.value;
    
    blockId.value = "";
}