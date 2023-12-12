import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavbarMK1 = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Link />
        <Navbar.Brand href="/">home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/basiccomponent">2.1</Nav.Link>
          <Nav.Link href="/sample01">2.2</Nav.Link>
          <Nav.Link href="/sample02">2.3</Nav.Link>
          <Nav.Link href="/sample03">2.4</Nav.Link>
          <Nav.Link href="/lesstext">3.1</Nav.Link>
          <Nav.Link href="/stepcounter">3.2</Nav.Link>
          <Nav.Link href="/myteam">3.3</Nav.Link>
          <Nav.Link href="/posts_static">4.1</Nav.Link>
          <Nav.Link href="/posts_api">4.2</Nav.Link>
          <Nav.Link href="/products_from_class">4.3</Nav.Link>
          <Nav.Link href="/formsample">form</Nav.Link>
          <Nav.Link href="/icecream">iceCream</Nav.Link>
          <Nav.Link href="/foodcart">foodCart</Nav.Link>
          <Nav.Link href="/itemcart">itemCart</Nav.Link>
          <Nav.Link href="/bankcard">bankCard</Nav.Link>
          <Nav.Link href="/robotselector">robots</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarMK1;
