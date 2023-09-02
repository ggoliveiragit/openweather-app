import React, { useState } from 'react';
import axios from 'axios';
import { Card, Form, Button, Row, Col} from 'react-bootstrap';
function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });

      console.log('Login success:', response.data);
      onLogin();
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <Card align="center" className='loginCard'> 
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-4" controlId="formBasicUser">
        <Row >
          <Col sm={3}><Form.Label >Username</Form.Label></Col>
          <Col sm={9}><Form.Control type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} /></Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
      <Row>
          <Col sm={3}><Form.Label >Password</Form.Label></Col>
          <Col sm={9}><Form.Control type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} /></Col>
        </Row>
      </Form.Group>
      <Button  variant="outline-light" type="submit">
        Submit
      </Button>
    </Form>
    </Card>


    </div>
  );
}

export default LoginForm;
