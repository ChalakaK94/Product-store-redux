import { Container, Nav, Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom';

export default function Navigation(){

    return(
      <>        
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Product with Redux</Navbar.Brand>

          <Nav>
            <Nav.Link to="/" as={Link}>Product</Nav.Link>
          </Nav>
          <Navbar.Toggle/>
          <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
                <Nav.Link to="/cart" as={Link}>My Bag 0</Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
      </Container>
    </Navbar>

    </>

  
    )
}
