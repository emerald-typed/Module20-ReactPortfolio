import '../../App.css';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav'

function Welcome() {
  return (
    <Card className="text-center m-5">
      <Card.Header className='fs-1'>Welcome To My React Page</Card.Header>
      <Card.Body>
        <Card.Title>You Made It Thank You!!!</Card.Title>
        <Card.Text>
            I really appriciate you takin the time to take a closer look at my work...
        </Card.Text>
        <Nav.Link href="/Portfolio" className=" mx-auto button rounded m-2 p-3 col-2 fs-5"><span className='textPlat'>View My Portfolio</span></Nav.Link>
      </Card.Body>
      <Card.Footer className="text-muted">-Kyle Hipple</Card.Footer>
    </Card>
  );
}

export default Welcome;