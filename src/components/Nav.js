// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
// // import logo from '../logo.svg';
import Nav from 'react-bootstrap/Nav';
import "../App.css"


function NavBar() {
  return (
    <>
      {/* <Nav variant="pills" defaultActiveKey="/Home">
      <useCustomLink to = "/" >Home</useCustomLink>
      <customLink to="/About>">About Me</customLink>
      <Nav.Item>
        <Nav.Link to="/Home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/About">About Me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/Portfolio">Portfolio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/Contact">Contact Me</Nav.Link>
      </Nav.Item>
    </Nav> */}
            {/* <Tab eventKey="link-1" title='About Me'> <Link to="/About">About</Link></Tab> */}

        {/* <Link to ="Portofolio">
         <Tab eventKey="link-2" title='Portfolio'>Portfolio</Tab>
        </Link>
        <Link to="Contact">
         <Tab eventKey="link-3" title='Contact Me'>Contact Me</Tab>
        </Link> */}


      <Nav className="m-2 justify-content-center" variant="pills" defaultActiveKey="/home">
        <Nav.Item className="button rounded m-2">
          <Nav.Link href="/"eventKey="link-0" title='HomeButton' >Home</Nav.Link>
        </Nav.Item>
        <Nav.Item className="button rounded m-2">
          <Nav.Link href="About "eventKey="link-1" title='About'>About</Nav.Link>
        </Nav.Item>
        <Nav.Item className="button rounded m-2">
          <Nav.Link href="Portfolio" eventKey="link-2" title='Port'>Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item className="button rounded m-2">
          <Nav.Link href="Contact" eventKey="link-3" title='Contact' >Contact</Nav.Link>
        </Nav.Item>

      </Nav>

    </>
  );
}

export default NavBar;