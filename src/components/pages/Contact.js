import '../../App.css';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import InputGroup from 'react-bootstrap/InputGroup';

function FormSubmit() {
  return (
    <Card  className='col-9 mx-auto m-5'>
        <h1 className='m-3'>Want to Get in Touch!!!</h1>
    <Form className='m-3'>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label className='fs-5'>Name:</Form.Label>
        <Form.Control  className='w-75 mx-auto' type="Name" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='fs-5'>Email address:</Form.Label>
        <Form.Control className='w-75 mx-auto' type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Text className="text-muted">
      <br>
      </br>
      <InputGroup  className='w-75 mx-auto'>
        <InputGroup.Text className='fs-5'>Message</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>
          I will reach out as soon as possible, thank you!!
          <br>
          </br>
          -Kyle
        </Form.Text>
      <Nav.Link href="/" className='button col-2 rounded m-2 mx-auto fs-5' type="submit">
        <span className='textPlat'>Submit</span>
      </Nav.Link>
    </Form>
    </Card>
  );
}

export default FormSubmit;