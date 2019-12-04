const printTodos = function(todos) {
  console.log(todos)
  for (const todo of todos) {
    printTodo(todo);
  }
}

printTodos(todos);

document.querySelector('.add-todo').addEventListener('click', () => printTodo(addTodo))
