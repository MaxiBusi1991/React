import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Container from "react-bootstrap/Container";
import Hero from "../components/Hero";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";

const Layout = () => {
  return (
    <>
      <Container fluid className="d-flex flex-column min-vh-100 px-0">
        <Header />
        <Main />
        <Hero />
        <ItemListContainer />
        <ItemDetailContainer />
        <Footer />
      </Container>
    </>
  );
};

export default Layout;

//los componentes siempre empiezan con Mayusculas!
