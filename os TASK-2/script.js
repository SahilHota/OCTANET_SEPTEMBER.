
const taskInput = document.getElementById('taskInput');
const labelInput = document.getElementById('labelInput');
const deadlineInput = document.getElementById('deadlineInput');
const categoryInput = document.getElementById('categoryInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const tasksContainer = document.getElementById('tasksContainer');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    const label = labelInput.value.trim();
    const deadline = deadlineInput.value.trim();
    const category = categoryInput.value;

    if (taskText !== '') {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.innerHTML = `
            <h2>Task:</h2>
            <p>${taskText}</p>
            <h2>Label:</h2>
            <p>${label}</p>
            <h2>Deadline:</h2>
            <p>${deadline}</p>
            <h2>Category:</h2>
            <p>${category}</p>
        `;
        tasksContainer.appendChild(taskDiv);
        taskInput.value = '';
        labelInput.value = '';
        deadlineInput.value = '';
    }
});
