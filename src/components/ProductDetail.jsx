import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import Contador from "./Contador";

const ProductDetail = ({ api }) => {
  return (
    <Container className="pt-5">
      <Card className="border-0">
        <Row>
          <Col>
            <Card.Img variant="top" src={api.image} />
          </Col>
          <Col className="pt-5">
            <Card.Title>{api.title}</Card.Title>
            <Card.Text as="h3">Precio: $ {api.price}</Card.Text>
            <Col className="d-flex justify-content-around">
              <Button variant="primary">Comprar!</Button>
              <Contador />
            </Col>

            <Card.Text>{api.description}</Card.Text>
          </Col>
        </Row>
        <Card.Body></Card.Body>
      </Card>
    </Container>
  );
};

export default ProductDetail;

//Si quiero evitar usar otra etiqueta puedo utilizar  as=" " . Lo que hace es decirle al componente que quiere que lo haya dentro lo muestre con la etiqueta que yo elija.
