import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Main = ({
  productos,
  funcionPrueba,
  productosDos,
  conferenciaAmericana,
}) => {
  // const { producto } = productos;
  // console.log(productos);

  // funcionPrueba("ésto es una prueba");

  //Agrego la funcion de suma y resta
  //pero no puedo hacerlo con una funcion y nada mas, porque no estaria conectando el virtual dom (reac) con el dom (js). Por lo tanto tengo que usar el Hook "useState", para que haya un nexo entre los dos. Voy a seguir usando la funcion de sumar y restar, pero necesito del Hook "useState". Con los states ya renderizamos de manera automatica.

  const [contador, setContador] = useState(1);

  const add = () => {
    setContador = contador + 1;
  };

  const sub = () => {
    setContador = contador - 1;
  };

  return (
    <>
      <main>
        <h3>Nuestros productos:</h3>
        <div className="container">
          <div className="row">
            <div className="col lg={4}">
              {productos.map((producto) => (
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/4c773efd-9f0f-4f6b-8d6e-1b164ee54d2d/image.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      <ul>
                        <li>id: {producto.id} </li>
                        <li>Nombre: {producto.producto} </li>
                        <li>Precio: {producto.precio} </li>
                      </ul>
                      <div>{conferenciaAmericana}</div>
                    </Card.Text>
                    <div className="container d-flex justify-content-center">
                      <Button
                        onClick={() => sub()}
                        className="mx-2"
                        variant="primary"
                      >
                        -
                      </Button>
                      <div className="mt-2">{contador}</div>
                      <Button
                        onClick={() => add()}
                        className="mx-2"
                        variant="primary"
                      >
                        +
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>{" "}
          </div>
        </div>
        {/* tercero tengo que inyectar el codigo js al componente que quiero */}
        <div className="container">
          <div className="row">
            {productosDos.map((productosDos) => (
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>id: {productosDos.id} </li>
                      <li>Nombre: {productosDos.nombre} </li>
                      <li>Precio: {productosDos.precio} </li>
                    </ul>
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            ))}{" "}
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
