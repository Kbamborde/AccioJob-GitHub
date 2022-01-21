const form = document.getElementById('form');
const input = document.getElementById('input');
const todoUl = document.getElementById('todos');

const todo = JSON.parse(localStorage.getItem("todos"));

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    addTodo();
});

function addTodo(todo){
    let todoText = input.value;

    if(todo){
        todoText = todo.text;
    }

    if(todoText){
        const todoEl = document.createElement('li');

        if(todo && todo.isCompleted){
            todoEl.classList.add("completed");
        }
        todoEl.innerText = todoText;

        todoEl.addEventListener("click", ()=>{
            todoEl.classList.toggle("completed");
            updateLs();
        });

        todoEl.addEventListener("contextmenu",(e)=>{
            e.preventDefault();
            todoEl.remove();
            updateLs();
        });

        todoUl.appendChild(todoEl);
        input.value = "";
        updateLs();
    }
}

function updateLs(){
    const todoELs = document.querySelectorAll("li");
    const todo = [];

    todoELs.forEach(todoEl =>{
        todo.push({
            text:todoEl.innerText,
            isCompleted: todoEl.classList.contains("completed")
        })
    })

    localStorage.setItem("todos",JSON.stringify(todo))
}