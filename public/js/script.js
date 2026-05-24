const FORM_ID = 'add-form';
const LIST_ID = 'list';

const getListFromStorage = () => {
    return JSON.parse(localStorage.getItem('todos') || '[]');
}

const populateTodoList = () => {
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
        li.textContent = todo.text;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.dataset.id = todo.id;
        btn.textContent = 'Remove';
        btn.addEventListener('click', () => deleteItem(todo.id));
        
        li.append(btn);
        ul.append(li);
    }

    listDiv.replaceChildren(ul);
}

const deleteItem = (targetId) => {
    const list = getListFromStorage();

    const adjustedList = list.filter((item) => item.id !== targetId);

    localStorage.setItem('todos', JSON.stringify(adjustedList));

    populateTodoList();
};

const addFormEventListener = () => {
    const form = document.getElementById(FORM_ID);

    if (!form) {
        return;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const note = form.note.value.trim();
        if (!note) return;
        const todos = getListFromStorage();
        todos.push({ id: Date.now(), text: note });
        localStorage.setItem('todos', JSON.stringify(todos));
        form.reset();
    });
}


populateTodoList();
addFormEventListener();