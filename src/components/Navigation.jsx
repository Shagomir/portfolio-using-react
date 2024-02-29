import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import projects from "../assets/projects";
import Image from "react-bootstrap/Image";
import logo from "../assets/logo.png";

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary min-vw-100">
      <Container fluid>
        <Image height="64px" src={logo} alt="Matt Knudson" />
        <Navbar.Brand href="#home">Matt Knudson</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Portfolio</Nav.Link>
            <Nav.Link href="/about">About Me</Nav.Link>
            <NavDropdown
              title="Projects"
              id="basic-nav-dropdown"
              className="m-5"
            >
              {projects.map((project, index) => (
                <NavDropdown.Item key={index} href={`/project/${index}`}>
                  {project.title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
