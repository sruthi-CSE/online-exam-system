import React from "react";
import { ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <ListGroup variant="flush">
        <ListGroup.Item>
            <Link to="/dashboard">Dashboard</Link>
        </ListGroup.Item>
        <ListGroup.Item>
            <Link to ="/exam">Exam</Link>
        </ListGroup.Item>
    </ListGroup>
  );
};

export default Sidebar;
