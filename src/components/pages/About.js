import '../../App.css';
import Card from 'react-bootstrap/Card';

function BorderExample() {
    return (
      <>
        <Card className='mx-auto m-5' border="success" style={{ width: '80%' }}>
        <Card.Header>About Me</Card.Header>
        <Card.Body>
        <Card.Title>Kyle Hipple Javascript Developer</Card.Title>
        <Card.Text>
            I stick to 5 C's of my free time CAD/Code/Calisthenics/Cardio/Cooking (Fav Hobbies)
        </Card.Text>
        </Card.Body>
        </Card>
<br />
    </>
  );
}

export default BorderExample;