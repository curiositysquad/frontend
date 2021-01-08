import { useState, useEffect } from 'react';
import Input from './Input.js';

function Form(props) {
    const [formState, setFormState] = useState({
        item: '',
    });

    useEffect(() => {
        if (props.todo) {
            setFormState({
                item: props.todo.item,
                id: props.todo.id
            })
        }
    }, [props.todo])

    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.id]: event.target.value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (props.todo) formState.id = props.todo.id
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
