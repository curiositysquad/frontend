import Form from './Form.js';
import './styles/Aside.css'
import DateTime from './DateTime'

function Aside(props) {
    return (
        <aside className="Aside">
            <DateTime />
            {/* <h1>What is your main focus for today?</h1> */}
            <Form handleSubmit={props.handleSubmit} />
        </aside>
    );
}

export default Aside;
