const taskList = document.getElementById('taskList');
const input = document.getElementById('taskInput');

window.onload = () => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => addToList(task));
};

function save() {
    const tasks = [];
    taskList.querySelectorAll('li').forEach(li => {
        tasks.push(li.firstChild.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function add() {
    const taskText = input.value.trim();
    if (taskText === "") return;

    addToList(taskText);
    input.value = "";
    save();
}

function addToList(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    li.onclick = () => {
        li.classList.toggle("done");
        save();
    };

    const btn = document.createElement("button");
    btn.textContent = "Удалить";
    btn.classList.add("delete-btn");
    btn.onclick = (e) => {
        e.stopPropagation();
        li.remove();
        save();
    };

    li.appendChild(btn);
    taskList.appendChild(li);
}

