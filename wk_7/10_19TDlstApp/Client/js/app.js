const todoUL = document.getElementById('todoUL');
const titleTextBox = document.getElementById('titleTextBox');
const priorityTextBox = document.getElementById('priorityTextBox');
const dateCreatedTextBox = docuument.getElementById('dateCreatedTextBox');
const saveTaskButton = document.getElementById('saveTaskButton');

saveTaskButton.addEventListener('click', ()=> {
        const title = titleTextBox.value;
        const priority = priorityTextBox.value;
        const dateCreated = dateCreatedTextBox.value;

        fetch('http://localhost:3000/todos', {
            method: "POST",
            headers: {
                
                "Content-Type": 'applicaton/json'

            },
            body: JSON.stringify({
                title: title,
                priority: priority,
                //           dateCreated
                dateCreated: dateCreated

            })
        }).then(response => response.json())
        .then(result => {
            if(result.success) {
                fetchAllTasks()
            }
        })
})

function fetchAllTasks() {
    todoUL.innerHTML = ''
    fetch("http://localhost:3000/todos")
    .then(response => response.json())
    .then(tasks => {
        let taskItems = tasks.map(task => {
            return `
                    <li><label>${task.title}<label>
                    <button onclick="deleteTask('${task.taskId}')">Delete</button>
                    </li>
            `
        })

        todoUL.insertAdjacentHTML('beforeend', taskItems.join(''))
    })
}

fetchAllTasks();