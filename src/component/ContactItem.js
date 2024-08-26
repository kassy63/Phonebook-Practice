import React from "react";
import { Col, Row } from "react-bootstrap";

const ContactItem = ({ item }) => {
  return (
    <Row className="mb-3">
      <Col lg={1}>
        <img
          width={50}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg"
          alt="avatar"
        />
      </Col>
      <Col lg={11}>
        <Col className="mb-2">{item.name}</Col>
        <Col>{item.phoneNumber}</Col>
      </Col>
    </Row>
  );
};

export default ContactItem;
