import Todos from "./Todos.js";


function Main({ todos, handleDelete, handleUpdate }) {
    return (
        <main>
            <Todos
                todos={todos}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
            />
        </main>
    );
}

export default Main;
