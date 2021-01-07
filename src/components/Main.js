import TodoItems from './TodoItem'

function Main({ todos }) {
    return (
        <main>
            <TodoItems todos={todos} />
        </main>
    );
}

export default Main;