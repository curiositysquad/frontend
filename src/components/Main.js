import Todo from './Todo.js';

function Main({ todos }) {
    return (
        <main>
            <Todo todos={todos} />
        </main>
    );
}

export default Main;
