import TodoList from './TodoList.js';

function Main({ todos }) {
    return (
        <main>
            <TodoList
                todos={todos}
            />


        </main>
    );
}

export default Main;
