import React from "react";

const Main = ({ productos, funcionPrueba, productosDos }) => {
  // const { producto } = productos;
  // console.log(productos);

  funcionPrueba("ésto es una prueba");
  return (
    <>
      <main>
        <h3>Nuestros productos:</h3>
        <div>
          {productos.map((producto) => (
            <ul>
              <li>id: {producto.id} </li>
              <li>Nombre: {producto.producto} </li>
              <li>Precio: {producto.precio} </li>
            </ul>
          ))}{" "}
        </div>
        {/* tercero tengo que inyectar el codigo js al componente que quiero */}
        <div>
          {productosDos.map((productoDos) => (
            <div>
              <ul>
                <li>id: {productoDos.id}</li>
                <li>Nombre: {productoDos.nombre}</li>
                <li>Precio: {productoDos.precio}</li>
              </ul>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Main;
