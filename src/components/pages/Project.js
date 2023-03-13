import '../../App.css';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProjectCard() {
    return (
        <Col>
            <Card>
            <Card.Img variant="top" src="https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg" />
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text > 
                <Button variant="success" className="m-2" href="#">GitHub</Button> 
                <Button  variant="success" href="#">Deployment</Button> 
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
    );
}   

export default ProjectCard;