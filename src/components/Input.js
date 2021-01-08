function Input({
    name,
    todo,
    value,
    type,
    placeholder,
    handleChange }) {
    return (
        <>
            <label htmlFor={name}>{todo}</label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
            />
        </>
    );
}

export default Input;