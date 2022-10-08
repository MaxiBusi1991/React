import React from "react";
import Card from "react-bootstrap/Card";

const Hero = () => {
  return (
    <Card className="text-white border-0">
      <Card.Img src="./img/futbol-americano.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Mundo NFL</Card.Title>
        <Card.Text>Todo tipo de indumentaria Oficial de la NFL.</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Hero;
