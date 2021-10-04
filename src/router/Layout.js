import { Container, Nav, Navbar } from "react-bootstrap";


const Layout = ({ children }) => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Nav className="mr-auto">
            <a
              color="inherit"
              href="https://github.com/RomanIvanytskyi"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
          </Nav>
        </Container>
      </Navbar>
      <Container>{children}</Container>
    </div>
  );
};
export default Layout;
