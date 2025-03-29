import { Dropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

function Navbars() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const cart = () => {
    const id = localStorage.getItem("loginId");
    id ? navigate("/cart") : navigate('/login');
  };

  const orders = () => {
    const id = localStorage.getItem("loginId");
    id ? navigate("/Orders") : navigate('/login');
  };

  return (
    <Container fluid>
      <Navbar expand="lg" style={{ borderRadius: "10px", backgroundColor: "rgb(22, 67, 104)", padding: "15px 30px"}}
      >
        <Navbar.Brand href="/" style={{ color: "white", fontWeight: "bold", fontSize: "22px"}}>ABC PVT LMT</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" className="border-0 text-white"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto" navbarScroll>
            <Nav.Link href="/" style={{ color: "white", fontWeight: "500"}} className="mx-2">
              Home
            </Nav.Link>
            <Nav.Link href="#action2" style={{ color: "white", fontWeight: "500"}} className="mx-2">
              Link
            </Nav.Link>
            <NavDropdown title="Categories" className="mx-2"style={{color: "white"}}>
              <NavDropdown.Item href="/mens">Men's Fashion</NavDropdown.Item>
              <NavDropdown.Item href="/women">Women's Fashion</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Landing">Other Items</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          
          <div className="d-flex align-items-center gap-3">
            <NavDropdown title="Profile" menuVariant="dark" style={{color:"white"}}>
              <NavDropdown.Item href="/signup">
                <Button variant="dark" className="w-100">Sign Up</Button>
              </NavDropdown.Item>
              <NavDropdown.Item href="/login">
                <Button variant="dark" className="w-100">Login</Button>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={cart}>
                <Button variant="dark" className="w-100">Cart</Button>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={orders}>
                <Button variant="dark" className="w-100">My Orders</Button>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={logout}>
                <Button variant="danger" className="w-100">Logout</Button>
              </NavDropdown.Item>
            </NavDropdown>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search..."
                className="me-2"
                aria-label="Search"
                style={{ width: "250px", borderRadius: "8px" }}
              />
              <Button variant="success">Search</Button>
            </Form>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Navbars;
