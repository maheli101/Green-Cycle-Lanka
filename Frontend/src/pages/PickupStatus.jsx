import React from 'react';
import { Form, Button } from 'react-bootstrap';

const RequestForm = () => {
  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px' }}>
      <h3 style={{ color: '#4A90E2' }}>Request Details</h3>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" defaultValue="Anu Ranasinghe" />
        </Form.Group>

        <Form.Group controlId="formBasicType">
          <Form.Label>Type</Form.Label>
          {/* Assuming multiple selection isn't needed as it's not in the image */}
          <Form.Control as="select">
            <option>Plastic</option>
            <option>Metal</option>
            <option>Glass</option>
            <option>Paper</option>
          </Form.Control>
        </Form.Group>

        {/* Additional form groups for Amount and Address */}
        {/* Style this text with appropriate color */}
        <p style={{ color: '#0000FF' }}>We Are Processing Your Request</p>

        {/* Text with link to view details */}
        {/* This should link to user account details page */}
        View Pickup Request Details In Your User Account

        {/* Go To User Account button */}
        {/* This should navigate to the user account page */}
        <Button variant="primary" className="rounded-pill">Go To User Account</Button>

        {/* Ok button */}
        <Button variant="success" className="rounded-pill">Ok</Button>
      </Form>
    </div>
  );
};

export default RequestForm;
