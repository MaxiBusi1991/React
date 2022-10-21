import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardItems({ product }) {
  const [contador, setContador] = useState(1);

  const add = () => {
    setContador(contador + 1);
  };

  const sub = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };
  //agrego estilos en linea. Primero creo una variable, que en realidad termina siendo un objeto. Luego la agrego en la etiqueta que quiera usando la propiedad style. No pongo dos llaves en el style porque ya el objeto tiene una llave incluida!
  const botonSumar = { backgroundColor: "red" };
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/4c773efd-9f0f-4f6b-8d6e-1b164ee54d2d/image.jpg"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            <ul>
              <li>id: {product.id} </li>
              <li>Nombre: {product.product} </li>
              <li>Precio: {product.precio} </li>
            </ul>
            <div></div>
          </Card.Text>
          <div className="container d-flex justify-content-center">
            <Button
              disabled={contador > 1 ? false : true}
              onClick={() => sub()}
              className="mx-2"
              variant="primary"
            >
              -
            </Button>
            <div className="mt-2">{contador}</div>
            <Button
              disabled={contador < 10 ? false : true}
              onClick={() => add()}
              className="mx-2"
              variant="primary"
              style={botonSumar}
            >
              +
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardItems;
