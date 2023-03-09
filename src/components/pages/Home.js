import '../../App.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Welcome() {
  return (
    <Card className="text-center">
      <Card.Header>Welcome To My React Page</Card.Header>
      <Card.Body>
        <Card.Title>You Made It Thank You!!!</Card.Title>
        <Card.Text>
            I really appriciate you takin the time to take a closer look at my work...
        </Card.Text>
        <Button href="/Portfolio"variant="primary">View My Portfolio</Button>
      </Card.Body>
      <Card.Footer className="text-muted">-Kyle Hipple</Card.Footer>
    </Card>
  );
}

export default Welcome;