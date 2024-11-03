import React from "react";

import { Container, Row, Col } from 'react-bootstrap';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Container fluid>
        <Row>
          <Col md={2}>
            <Sidebar />
          </Col>
          <Col md={10}>
            <h2>Welcome to the Dashboard</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
