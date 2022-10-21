import React, { useState } from "react";
import CardItems from "./CardItems";

const Main = ({ productos, productosDos, conferenciaAmericana }) => {
  // const { producto } = productos;
  // console.log(productos);

  // funcionPrueba("ésto es una prueba");

  //Agrego la funcion de suma y resta
  //pero no puedo hacerlo con una funcion y nada mas, porque no estaria conectando el virtual dom (reac) con el dom (js). Por lo tanto tengo que usar el Hook "useState", para que haya un nexo entre los dos. Voy a seguir usando la funcion de sumar y restar, pero necesito del Hook "useState". Con los states ya renderizamos de manera automatica.

  return (
    <>
      <main>
        <h3>Nuestros productos:</h3>
        <div className="container">
          <div className="row">
            <div className="col lg={4}">
              {productos.map((producto) => (
                <CardItems product={producto} />
              ))}
            </div>{" "}
          </div>
        </div>
        {/* tercero tengo que inyectar el codigo js al componente que quiero */}
        {/* <div className="container">
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
        </div> */}
      </main>
    </>
  );
};

export default Main;
