function addTask() {
  const taskInput = document.getElementById('task');
  const taskList = document.getElementById('task-list');
  const newTask = document.createElement('li')
  const taskText = taskInput.value;
  newTask.innerText = taskText;


const deletedBoutton = document.createElement('button');
deletedBoutton.textContent = 'Suprimer';
deletedBoutton.onclick = function() {
    taskList.removeChild(newTask);
};
newTask.appendChild(deletedBoutton);
  newTask.onclick = function() {
    newTask.classList.toggle('completed');
  };

  taskList.appendChild(newTask);
  taskInput.value = ''; 

}