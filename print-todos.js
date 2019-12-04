const printTodos = function(todos) {
  console.log(todos)
  for (const todo of todos) {
    printTodo(todo);
  }
}

printTodos(todos);
// const userInput = document.querySelector('input').value
// document.querySelector('.add-todo').addEventListener('click', () => printTodo(addTodo(userInput)))
