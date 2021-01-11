import Form from './Form.js';
import './styles/Aside.css'

function Aside(props) {
    return (
        <aside className="Aside">
            {/* <h1>Aside</h1> */}
            <Form handleSubmit={props.handleSubmit}/>
        </aside>
    );
}

export default Aside;
