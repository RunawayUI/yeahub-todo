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
  <input type="text" name="task-name" required>

  <label for="deadline">Дедлайн</label>
  <input type="date" name="deadline" required>

  <label for="person-in-charge">Ответственный</label>
  <input type="text" name="person-in-charge" required>

  <button type="submit">Добавить</button>
`;
todoContainer.appendChild(todoForm);



