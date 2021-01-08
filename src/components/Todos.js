import Todo from './Todo.js';



function Todos({ todos, handleDelete, handleUpdate }) {
    return (
        <div>
            {todos.map(todo =>
                <Todo
                    key={todo.id}
                    todo={todo}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                />
            )}
        </div>
    );
}

export default Todos;