
// A function that adds an item to our todo list.
const addTodo = function(todo) {
  todos.push(todo);
}

const userInput = document.querySelector('input');
document.querySelector('.add-todo').addEventListener('click', () => printTodo(userInput.value));
const sortChoice = document.querySelector('.sort');
document.querySelector('.sort-todo').addEventListener('click', (sortChoice) => {
  let currentTodos = [];
  if (sortChoice.value === 1){
    todos.forEach(todo => todo[complete] === true ? currentTodos.push(todo) : currentTodos.unshift(todo));
  }
  printTodos(currentTodos)
})