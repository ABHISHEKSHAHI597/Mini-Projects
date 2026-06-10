let container = document.querySelector('.container');

get();

let text = document.querySelector('.text');

let add_btn = document.querySelector('.add');

text.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        add(text.value);
        text.value = '';
    }
})

add_btn.addEventListener("click", (event) => {
    add(text.value);
    text.value = '';
})

function add(text) {
    let todo = JSON.parse(localStorage.getItem('todo')) || [];
    if (text.trim() != '') {
        todo.push(text)
        localStorage.setItem('todo', JSON.stringify(todo))
        get()
    }
}

function get() {
    let todo = JSON.parse(localStorage.getItem('todo')) || [];

    let n = todo.length
    
    container.innerHTML = `<div class="items heading">
            <p>TODO-Work</p>
            <p class="del">Delete</p>
        </div>`
    for (let i = 0; i < n; i++) {
        container.innerHTML += `<div class="items">
            <p>${todo[i]}</p>
            <button class="btn" data-index="${i}">Delete</button>
        </div>`
    }
}

container.addEventListener('click', (event) => {

    if(event.target.classList.contains('btn')){

        let index = Number(event.target.dataset.index);

        let todo = JSON.parse(localStorage.getItem('todo')) || [];

        todo.splice(index, 1);

        localStorage.setItem('todo', JSON.stringify(todo));

        get();
    }

});