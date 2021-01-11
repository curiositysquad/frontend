import { useState } from 'react';
import Input from './Input.js';
import './styles/Form.css'

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
            <h1>What is your main focus for today?</h1>
            <Input
                handleChange={handleChange}
                name="todo"
                placeholder=""
                type="text"
                value={formState.item}
                id="todo"
            />

            <input className="Button" type="submit" value={props.todo ? 'Edit' : '+'} />
        </form>
    );
}

export default Form;
