import Form from './Form.js';
import './styles/Aside.css'

function Aside(props) {
    return (
        <aside className="Aside">
            <h1>What is your main focus for today?</h1>
            <Form handleSubmit={props.handleSubmit} />
        </aside>
    );
}

export default Aside;
