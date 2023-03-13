import '../../App.css';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProjectCard(project) {
    return (
        project.projects.map(projectItem => (
        <Col>
            <Card>
            <Card.Img variant="top" src={projectItem.src} />
            <Card.Body>
                <Card.Title>{projectItem.title}</Card.Title>
                <Card.Text > 
                <Button variant="success" className="m-2" href={projectItem.github}>GitHub</Button> 
                <Button  variant="success" href={projectItem.deployment}>Deployment</Button> 
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
        ))
    );
}   

export default ProjectCard;