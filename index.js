
        const taskList = document.getElementById('task-list');
        const newTaskInput = document.getElementById('new-task');

        // Загрузка задач из localStorage
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        // Отображение задач
        function renderTasks() {
            taskList.innerHTML = '';
            tasks.forEach((task, index) => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span class="${task.completed ? 'completed' : ''}" onclick="toggleComplete(${index})">${task.text}</span>
                    <button onclick="removeTask(${index})">Удалить</button>
                `;
                taskList.appendChild(li);
            });
        }


        function addTask() {
            const taskText = newTaskInput.value.trim();
            if (taskText !== '') {
                tasks.push({ text: taskText, completed: false });
                newTaskInput.value = '';
                updateLocalStorage();
                renderTasks();
            }
        }


        function toggleComplete(index) {
            tasks[index].completed = !tasks[index].completed;
            updateLocalStorage();
            renderTasks();
        }

        function removeTask(index) {
            tasks.splice(index, 1);
            updateLocalStorage();
            renderTasks();
        }

        function updateLocalStorage() {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }

        // Инициализация
        renderTasks();