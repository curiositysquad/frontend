import { useState, useEffect } from 'react';
import Input from './Input.js';

function Form(props) {
    const [formState, setFormState] = useState({
        item: '',
    });

    useEffect(() => {
        if (props.todo) {
            setFormState({
                item: props.todo.item
            });
        }
    }, [props.todo]);

    function handleChange(event) {
        setFormState({ item: event.target.value });
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
