const FORM_ID = 'add-form';
const LIST_ID = 'list';

const URL = `${window.location.origin}/todo/api`;

const getListFromStorage = () => {
    return JSON.parse(localStorage.getItem('todos') || '[]');
}

const fetchTodos = async () => {
    try {
        const response = await fetch(`${URL}/list`);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        const data = await response.json();
        localStorage.setItem('todos', JSON.stringify(data.todo));
      } catch (error) {
        console.error(error.message);
      }
}

const deleteApi = async (createdAt) => {
    try {
        const response = await fetch(`${URL}/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ createdAt }),
        });
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
      } catch (error) {
        console.error(error.message);
      }
}

const populateTodoList = async () => {
    const listDiv = document.querySelector(`#${LIST_ID}`);

    if (!listDiv) return;

    const todos = getListFromStorage();
    
    if (todos.length === 0) {
        listDiv.innerHTML = '<p>Your list is empty</p>';
        return;
    }

    const ul = document.createElement('ul');

    for (const todo of todos) {
        const li = document.createElement('li');
        li.textContent = todo.value;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.dataset.id = todo.id;
        btn.textContent = 'Remove';
        btn.addEventListener('click', () => deleteItem(todo.createdAt));
        
        li.append(btn);
        ul.append(li);
    }

    listDiv.replaceChildren(ul);
}

const deleteItem = (createdAt) => {
    const list = getListFromStorage();

    const adjustedList = list.filter((item) => item.createdAt !== createdAt);

    localStorage.setItem('todos', JSON.stringify(adjustedList));

    populateTodoList();
    deleteApi(createdAt)
};

(async () => {
  await fetchTodos();
  populateTodoList();
})();