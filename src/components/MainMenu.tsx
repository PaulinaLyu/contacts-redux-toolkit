import { Container, Nav, Navbar } from "react-bootstrap";

export const MainMenu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <h1>Contacts Book</h1>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/groups">Groups</Nav.Link>
          <Nav.Link href="/favorit">Favorites</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
