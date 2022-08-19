// GLOBAL VARIABLES
var stuffSearchBtn = document.getElementById("search-stuff")
var amazonKey = "4591EDE1B7CE49AEB4BDD4631503A1CC"
var excuseBtn = document.getElementById("excuse-btn")
var excuse = document.getElementById("excuse")
var displayText = document.getElementById("assigned-task")
var clearTask = document.getElementById("clearBtn");

window.addEventListener('load', () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    const nameInput = document.querySelector('#name');
    const newTodoForm = document.querySelector('#input-task');

    const username = localStorage.getItem('username') || '';

    nameInput.value = username;
    nameInput.addEventListener('change', e =>{
        localStorage.setItem('username', e.target.value);
    })

    newTodoForm.addEventListener('submit', e => {
        e.preventDefault();
        
        const todo ={
            content: e.target.elements.valInput.value,
            category: e.target.elements.category.value,
            done: false,
            createdAt: new Date().getTime()
        }
        
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));

        e.target.reset();

        DisplayTodos();

    })

    DisplayTodos();

})
function DisplayTodos () {
    const todoList = document.querySelector('#todo-list');
    
    todoList.innerHTML = '';

    todos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');
        
        const label = document.createElement('label');
        const input = document.createElement('input');
        const span = document.createElement('span');
        const content = document.createElement('div');
        const actions = document.createElement('div');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        input.type = 'checkbox';
        input.checked = todo.done;
        span.classList.add('bubble');

        if (todo.category == 'non-priority') {
            span.classList.add('non-priority');
        } 
        else {
            span.classList.add('priority');
        }

        content.classList.add('todo-content');
        actions.classList.add('actions');
        editButton.classList.add('edit');
        deleteButton.classList.add('delete');

        content.innerHTML = `<input type="text" value="${todo.content}" 
        readonly >`;
        editButton.innerHTML = 'Edit';
        deleteButton.innerHTML = 'Delete';

        label.appendChild(input);
        label.appendChild(span);
        actions.appendChild(editButton);
        actions.appendChild(deleteButton);
        todoItem.appendChild(label);
        todoItem.appendChild(content);
        todoItem.appendChild(actions);

        todoList.appendChild(todoItem);
        if (todo.done) {
			todoItem.classList.add('done');
		}
		
		input.addEventListener('change', (e) => {
			todo.done = e.target.checked;
			localStorage.setItem('todos', JSON.stringify(todos));

			if (todo.done) {
				todoItem.classList.add('done');
			} else {
				todoItem.classList.remove('done');
			}

			DisplayTodos()

		})

		editButton.addEventListener('click', (e) => {
			const input = content.querySelector('input');
			input.removeAttribute('readonly');
			input.focus();
			input.addEventListener('blur', (e) => {
				input.setAttribute('readonly', true);
				todo.content = e.target.value;
				localStorage.setItem('todos', JSON.stringify(todos));
				DisplayTodos()

			})
		})

		deleteButton.addEventListener('click', (e) => {
			todos = todos.filter(t => t != todo);
			localStorage.setItem('todos', JSON.stringify(todos));
			DisplayTodos()
		})


    })
}




// Amazon search API
function searchStuff(e) {
    e.preventDefault()
    var inputStuff = document.getElementById("input-stuff")

    fetch("https://api.rainforestapi.com/request?api_key=" + amazonKey + "&type=search&amazon_domain=amazon.com&search_term=" + inputStuff.value)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            var getImageURL = data.search_results[0].image
            var getLinkURL = data.search_results[0].link
            var searchImage = document.getElementById("search-image")
            var clickImage = document.getElementById("click-image")
            searchImage.setAttribute("src", getImageURL)
            clickImage.setAttribute("href", getLinkURL)
        })

}

// Excuse API
excuseBtn.addEventListener('click', function() {
    fetch("https://excuser.herokuapp.com/v1/excuse")
.then((res) => res.json())
.then((data) => {
    console.log(data[0].excuse)
    excuse.textContent=data[0].excuse
})
})


stuffSearchBtn.addEventListener('click', searchStuff)
