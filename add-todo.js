
// A function that adds an item to our todo list.
const addTodo = function(todo) {
  todos.push(todo);
}

const userInput = document.querySelector('input').value
document.querySelector('.add-todo').addEventListener('click', () => printTodo(addTodo(userInput)))