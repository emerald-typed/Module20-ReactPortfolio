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
            My Favorite Color is Green // I buy everything in Dark Green 
            
            <br />  
            My Favorite Hobbies are CAD/Javascript/Calisthenics/Running/Cooking/3D Printing
        </Card.Text>
        </Card.Body>
        </Card>
<br />
    </>
  );
}

export default BorderExample;