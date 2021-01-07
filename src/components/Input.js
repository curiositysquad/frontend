function Input({
    todo,
    title,
    type,
    value,
    placeholder,
    handleChange }) {
    return (
        <>
            <label htmlFor={todo}>{title}</label>
            <input
                id={todo}
                todo={todo}
                type={type}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
            />
        </>
    );
}
export default Input;