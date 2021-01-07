import Todo from './Todo.js';

function Todos({ todos }) {
    return (
        <div>
            {todos.map(todo =>
                <Todo
                    key={todo.id}
                    todo={todo}
                />
            )}
        </div>
    );
}

export default Todos;
