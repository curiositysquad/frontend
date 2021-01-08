function Input({
    todo,
    item,
    title,
    type,
    value,
    placeholder,
    handleChange }) {
        console.log(value)
    return (
        <>
            <label htmlFor={todo}>{title}</label>
            <input
                // id={todo}
                todo={todo}
                type={type}
                value={item}
                onChange={handleChange}
                placeholder={placeholder}
            />
        </>
    );
}
export default Input;