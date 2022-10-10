import React from "react";
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
  return (
    <>
      <main>
        <h3>Nuestros productos:</h3>
        <div className="container">
          <div className="row">
            <div className="col">
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
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              ))}
            </div>{" "}
          </div>
        </div>
        {/* tercero tengo que inyectar el codigo js al componente que quiero */}
        <div className="container">
          <div className="row">
            {productos.map((producto) => (
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>id: {productosDos.id} </li>
                      <li>Nombre: {productosDos.producto} </li>
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
