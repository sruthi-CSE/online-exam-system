import React, { useState } from "react";
import { Container, Form, Button } from 'react-bootstrap';
import { login } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if(login(username,password)){
      navigate('/dashboard');
    }
    else{
      setError('Invalid username or password');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Form className="p-4 border rounded shadow-sm" style={{width: '300px' }}>
        <h2 className="mb-4 text-center">Login</h2>
        {error && <Alert variant="danger">{error}</Alert>} 
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter username"
            value={username}
            onChange={{e} => setUsername(e.target.value)} />
        </Form.Group> 
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={{e} => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
