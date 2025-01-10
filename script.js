
function addTask() {
  const taskInput = document.getElementById('task');
  const dateInput =document.getElementById('date-input');
  const categoryInput = document.getElementById('category-input');
  const priorityInput = document.getElementById('priority-input');
  const taskList = document.getElementById('task-list');
  
  const newTask = document.createElement('li');
  const taskText = taskInput.value;
  const dueDate = dateInput.value;
  const taskCategory = categoryInput.value;
  const taskPriority = priorityInput.value;


  newTask.textContent = `${taskText} - Échéance : ${dueDate} - ${taskCategory} - ${taskPriority} `;

  const editButton =document.createElement('button');
  editButton.innerHTML ='<i class="fa-regular fa-pen-to-square"></li>';
  editButton.style.fontSize = '15px'
  editButton.onclick =() => {
    const newTaskTask = prompt('Modifier la tâche:', taskText);
    if (newTaskTask !== null) {
      newTask.firstChild.textContent= newTaskTask;
    }
  };


const deleteBoutton = document.createElement('button');
deleteBoutton.innerHTML ='<i class="fa-shard fa-solid fa-trash"></li>';
deleteBoutton.onclick = function() {
    taskList.removeChild(newTask);
};

setTimeout(() =>{
  newTask.classList.add('show');
}, 10)

newTask.appendChild(editButton);

newTask.appendChild(deleteBoutton);

  newTask.onclick = function() {
    newTask.classList.toggle('completed');
  };
    newTask.onclick = function (event) {
      if (event.target !== editButton && event.targent !== deleteBoutton){
        newTask.classList.toggle('completed')
      }
    }

    if(taskPriority === 'haute') {
      newTask.classList.add('priority-high');
    }else if (taskPriority === 'moyenne'){
      newTask.classList.add('priority-medium');
    }else if (taskPriority === 'basse') {
      newTask.classList.add('priority-low');
    }

  taskList.appendChild(newTask);

  taskInput.value = ''; 
  dateInput.value = '';
  categoryInput.value = 'travail';
  priorityInput.value ='basse';

}

        const searchInput =document.getElementById('search-input')
        filterTasks(searchInput.value.toLowerCase());

        searchInput.addEventListener('input', function(){
          const filter = this.value.toLowerCase();
          filterTasks(filter);
        });

        function filterTasks (filter){
          const tasks = document.getElementById('task-list').getElementsByTagName('li');
          Array.from(tasks).forEach(function(task){
            const taskText = task.textContent.toLocaleLowerCase();
            if(taskText.includes (filter)){
              task.style.display='';
            } else {
              task.style.display ='none';

            }
          });
        }
        function filterTask (status) {
          const tasks = document.querySelectorAll('#task-list li');
          tasks.forEach(task => {
            if (status ==='all'){
              task.style.display = '';
            } else if (status === 'completed' && task.classList.contains('completed')){
              task.style.display ='';
            } else if (status === 'ongoing' && !task.classList.contains('completed')){
              task.style.display ='';
            } else { 
              task.style.display ='none';
            }
          });
        }
       
