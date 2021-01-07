import { useState } from "react";
import Form from "./Form";


//  add props when ready
function Todo(props) {

    const [formVisible, setFormVisible] = useState(false);

    function toggleForm() {
        setFormVisible(!formVisible)
    }

    function handleUpdate(event, form) {
        toggleForm()
        props.handleUpdate(event, form)
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
                    <div className="form">
                        <h3>{props.todo.item}</h3>

                        <button onClick={() => props.handleDelete(props.todo)}>❌</button>
                        <button onClick={toggleForm}>Edit</button>
                    </div>
            }
        </>
    );
}

export default Todo;