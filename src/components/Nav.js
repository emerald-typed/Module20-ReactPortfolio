import Nav from 'react-bootstrap/Nav';
import "../App.css"


function NavBar() {
  return (
    <>
      <Nav className="m-2 justify-content-center" variant="pills">
        <Nav.Item className="button rounded m-2">
          <Nav.Link href="/"eventKey="link-0" title='Home' ><span className='textPlat'>Home</span></Nav.Link>
        </Nav.Item>
        <Nav.Item className="button rounded m-2">
          <Nav.Link href="About"  eventKey="link-1" title='About'><span className='textPlat'>About</span></Nav.Link>
        </Nav.Item>
        <Nav.Item className="button rounded m-2">
          <Nav.Link href="Portfolio" eventKey="link-2" title='Portfolio'><span className='textPlat'>Portfolio</span></Nav.Link>
        </Nav.Item>
        <Nav.Item className="button rounded m-2">
          <Nav.Link href="Contact" eventKey="link-3" title='Contact'><span className='textPlat'>Contact</span></Nav.Link>
        </Nav.Item>

      </Nav>

    </>
  );
}

export default NavBar;