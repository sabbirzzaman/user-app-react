import './App.css';
import { Form, Button } from 'react-bootstrap'

function App() {
    return (
        <div className='container my-5 bg-white p-5 rounded-3 shadow' style={{maxWidth: '600px'}}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add User
                </Button>
            </Form>
        </div>
    );
}

export default App;
