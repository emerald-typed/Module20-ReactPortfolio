import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'

function PillsExample() {
  return (
    <>
    <Container>
    <h1 className='m-3'>Kly-Design</h1>
    </Container>
    <Nav className="m-2 justify-content-center" variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link eventKey="link-1">About Me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Portfolio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">Contact Me</Nav.Link>
      </Nav.Item>
    </Nav>

    </>
  );
}

export default PillsExample;