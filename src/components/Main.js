import TodoItems from './TodoItems.js';

function Main({ todos }) {
    return (
        <main>
            <TodoItems todos={todos} />
        </main>
    );
}

export default Main;
