// Set Initial Count:-->
let count = 0;

// Select Value and button:-->

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(item=>{
    item.addEventListener("click",(e)=>{
        const styles = e.target.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else {
            count = 0;
        }
        if(count > 0) {
            value.style.color = "green"
        }
        if(count < 0) {
            value.style.color = "red"
        }
        value.textContent = count;
    })
})