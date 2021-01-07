import { useState } from 'react';
import Input from './Input.js';

function Form(props) {
    const [formState, setFormState] = useState({
        todo: ''
    });

    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.id]: event.target.value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.handleSubmit(event, formState);
    }
    return (
        <form onSubmit={handleSubmit}>
            <Input
                handleChange={handleChange}
                name="Todo"
                placeholder="Add Todo"
                type="text"
                value={formState.title}
                id="todo"
            />

            <input type="submit" value="add a notice" />
        </form>
    );
}

export default Form;
