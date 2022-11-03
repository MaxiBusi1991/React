import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Container from "react-bootstrap/Container";
import Hero from "../components/Hero";
// import ItemListContainer from "../components/ItemListContainer";
// import ProductDetailContainer from "../components/ProductDetailContainer";
import Contador from "../components/Contador";
import { useEffect } from "react";
// import Table from "../components/Tables";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";

const Layout = () => {
  //aqui va a EMPEZAR javascript
  const productos = [
    { id: "1", producto: "producto1", precio: "precio1" },
    { id: "2", producto: "producto2", precio: "precio2" },
    { id: "3", producto: "producto3", precio: "precio3" },
  ];
  //ejemplo para importar un array desde otro componente
  // console.log(conferenciaAmericana);
  // console.log(conferenciaNacional);

  //ejemplo para entender que el setTimeOut es asincrono, osea se va a ejecutar todo lo demas y cuando llegue el momento de que se cargue el settimeout lo va a hacer.

  const [api, setApi] = useState([]);

  // setTimeout(() => {
  //   console.log("hola");
  // }, 1000);

  // useEffect: Al usar este Hook, le estamos indicando a React que el componente tiene que hacer algo después de renderizarse. El render lo hace gracias a el hook "useState".
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setApi(json));
  }, []);

  // const funcionPrueba = (texto) => {
  //   console.log(texto);
  // };
  //primero creo el array de objetos
  // const productosDos = [
  //   { id: "1", nombre: "producto1", precio: "precio1" },
  //   { id: "2", nombre: "producto2", precio: "precio2" },
  //   { id: "3", nombre: "producto3", precio: "precio3" },
  // ];

  // const conferenciaAmericana = [
  //   { Nombre: "bills", Estado: "Buffalo", Puntos: "25" },
  //   { Nombre: "dolplhins", Estado: "Miami", Puntos: "22" },
  //   { Nombre: "chiefs", Estado: "Kansas", Puntos: "20" },
  //   { Nombre: "changers", Estado: "Los Ángeles", Puntos: "16" },
  // ];

  const botonApi = { backgroundColor: "green", color: "white" };
  //aqui va a TERMINAR javascript
  return (
    <>
      <Container fluid className="d-flex flex-column min-vh-100 px-0">
        <Header />
        <Hero />
        {/* <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product" element={<ProductDetail />} />
        </Routes> */}
        {/* <Main /> */}
        <ProductDetail />

        {/* 1- Para las Rutas primero tengo que instalar el pack 'react-router-dom'.
        2- Luego tengo que encerrar todo el documento que está en App.jsx dentro de una etiqueta que se llama 'BrowserRouter'.
        3- Me voy a Main y tengo que crear otros dos compenentes mas: 'Route' y 'Routes'. Los routes encierran a los route, y en cada rout voy a poner el 'path' (sendero) que es a donde se va a redirigir la pagina y tambien el 'element' que es el componente que voy a redirigir. Todo lo que esté fuera del route va a aparecer en todas la paginas, por ejemplo el navbar, el hero, el footer etc. */}
        {/* 
        <Main
        productos={productos}
        funcionPrueba={funcionPrueba}
        segundo le paso los datos al componente que quiera que vayan los props
        productosDos={productosDos}
        /> */}
        {/* <ItemListContainer /> */}
        {/* <Contador /> */}
        {/* <Table conferenciaAmericana={conferenciaAmericana} /> */}
        {/* COMIENZO DE CARD PARA API */}
        <div className="text-center">
          <h3>Productos enviados por una API</h3>
        </div>
        <Row xs={1} md={4} className="g-4">
          {api.map((a, i) => (
            <Card>
              <Card.Title>{a.title}</Card.Title>
              <Card.Img variant="top" src={a.image} />
              <Card.Body></Card.Body>
              <Card.Footer className="text-center">$ {a.price}</Card.Footer>
              <Card.Footer>
                {" "}
                <Contador />{" "}
              </Card.Footer>
              <Card.Footer>
                <div className="d-flex justify-content-center">
                  <button style={botonApi}>Ver mas..</button>
                </div>
              </Card.Footer>
            </Card>
          ))}
        </Row>
        {/* FIN DE CARD PARA API */}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;

{
  /* //los componentes siempre empiezan con Mayusculas!

//para volver a exportar otro array ya no lo puedo hacer por default. Por ende tengo que desestructurar al segundo array. Eso lo hago en el componente en donde los quiero exportar. Ejemplo: import conferenciaAmericana, {conferenciaNacional,} from "../components/Constant"; lo que va entre las llaves es lo que desestructuré!!! */
}
