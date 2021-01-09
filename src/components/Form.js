import { useState } from 'react';
import Input from './Input.js';

function Form(props) {
    const [formState, setFormState] = useState(
        props.todo || { item: "" }
    );

    function handleChange(event) {
        const updated = { ...formState, item: event.target.value }
        setFormState(updated)

    }

    function handleSubmit(event) {
        event.preventDefault();
        props.handleSubmit(event, formState);
    }
    return (
        <form onSubmit={handleSubmit}>
            <Input
                handleChange={handleChange}
                name="todo"
                // placeholder="Todo"
                type="text"
                value={formState.item}
                id="todo"
            />

            <input type="submit" value={props.todo ? 'Edit todo' : 'Add todo'} />
        </form>
    );
}

export default Form;
