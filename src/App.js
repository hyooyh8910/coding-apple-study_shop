import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Navbar, Container, Nav } from 'react-bootstrap';
import img1 from './img/smile.jpeg';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Naive</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Object</Nav.Link>
            <Nav.Link href="#pricing">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <Container>
        <Row>
          <Col sm>
          <img scr="/be_kind.jpeg" width='80%'/>
          <h4>상품명</h4>
          <p>상품설명</p>
          </Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
