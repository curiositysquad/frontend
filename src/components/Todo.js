import { useState } from "react";
import Form from "./Form";


function Todo(props) {

    const [formVisible, setFormVisible] = useState(false);

    function toggleForm() {
        setFormVisible(!formVisible)
    }

    function handleUpdate(event, todo) {
        toggleForm()
        props.handleUpdate(event, todo)
    }

    return (
        <>
            {
                formVisible ?
                    <div>
                        <Form todo={props.todo} handleSubmit={handleUpdate} />
                        <button onClick={toggleForm}>Cancel</button>
                    </div>
                    :
                    <div className="todo">
                        <h3>{props.todo.item}</h3>
                        <button onClick={() => props.handleDelete(props.todo)}>❌</button>
                        <button onClick={toggleForm}>Edit</button>
                    </div>
            }
        </>
    );
}

export default Todo;