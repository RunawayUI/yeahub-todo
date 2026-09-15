const h1 = document.createElement('h1');
h1.textContent = 'TO-DO LIST';

const scriptLink = document.querySelector('body > script');
scriptLink.before(h1);

const todoContainer = document.createElement('div');
todoContainer.classList.add('todo-container');
scriptLink.before(todoContainer);

const todoForm = document.createElement('form');
todoForm.classList.add('todo-form');
todoForm.setAttribute('action', '#');
todoForm.innerHTML = `
  <label for="task-name">Задача</label>
  <input type="text" name="task-name" id="task-name" required>

  <label for="deadline">Дедлайн</label>
  <input type="date" name="deadline" id="deadline" required>

  <label for="person-in-charge">Ответственный</label>
  <input type="text" name="person-in-charge" id="person-in-charge" required>

  <button type="submit" id="submit-btn">Добавить</button>
`;
todoContainer.appendChild(todoForm);

const taskList = document.createElement('ul');
taskList.classList.add('task-list')
todoContainer.appendChild(taskList);

const taskName = document.getElementById('task-name');
const deadline = document.getElementById('deadline');
const personInCharge = document.getElementById('person-in-charge');

todoForm.addEventListener('submit', (event) => {
  if (!taskName.value || !deadline.value || !personInCharge.value) {
    event.preventDefault();
    alert('Заполните все поля!');
  } else {
    event.preventDefault();

    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
      <input type="checkbox" name="task-checkbox">
      <div><p><b>Задача:</b></p> ${taskName.value}</div>
      <div><p><b>Дедлайн:</b></p> ${deadline.value}</div>
      <div><p><b>Ответственный:</b></p> ${personInCharge.value}</div>
    `;
    
    taskList.appendChild(taskItem);
    toggleTaskCompletion(taskItem);
    clearInputs(todoForm);
  }
});

function toggleTaskCompletion(element) {
  const checkbox = element.querySelector('input');

  checkbox.addEventListener('change', () => {
    element.classList.toggle('completed');
  })
}

function clearInputs(form) {
  const inputs = form.querySelectorAll('input');

  inputs.forEach(input => {
    input.value = '';
  });
}

