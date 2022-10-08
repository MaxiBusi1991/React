import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="mx-0">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="./img/balonfa.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            NFLManía
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
