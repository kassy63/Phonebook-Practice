import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  // const searchByName = (event) => {
  //   event.preventDefault();
  //   dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  // };
  const searchByNameOrPhone = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_CONTACTS", payload: { keyword } });
  };

  return (
    // <Form onSubmit={searchByName} className="search-form">
    <Form onSubmit={searchByNameOrPhone} className="mt-4 mb-3">
      <Row>
        <Col lg={10}>
          <Form.Control
            type="text"
            placeholder="이름 또는 전화번호"
            onChange={(event) => setKeyword(event.target.value)}
          />
        </Col>
        <Col lg={2}>
          <Button variant="primary" type="submit">
            찾기
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
