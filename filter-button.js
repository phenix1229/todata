const filterOption = document.querySelector('.filter').value;

document.querySelector('.filter-todo').addEventListener('click', () => {
    if (filterOption === 1){
        currentTodos.push(...justNotComplete(todos));
        refreshTodos()
    // } else if (filterOption === 2){
    //     const currentTodos = [];
    //     todos.forEach(todo => {
    //         if (todo.complete === false){
    //             currentTodos.push(todo);
    //         }
    //     })
        // printTodos(currentTodos)
    }
}
)