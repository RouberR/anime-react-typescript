import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Account } from "./Account";

export const HeaderMenu = () => {
  return (
    <Navbar variant="dark">
      <Container className="Navbar">
        <Navbar.Brand as={NavLink} to="/">
          So what ANIME?
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/search">
            Search Anime
          </Nav.Link>
          <Nav.Link as={NavLink} to="/my-top">
            My Top
          </Nav.Link>
          <Nav.Link as={NavLink} to="/top-anime">
            Top Anime
          </Nav.Link>
        </Nav>
        <Account />
      </Container>
    </Navbar>
  );
};
