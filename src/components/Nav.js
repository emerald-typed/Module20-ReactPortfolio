// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
// import logo from '../logo.svg';
import Nav from 'react-bootstrap/Nav';


function NavBar() {
  return (
    <>
    <div className='row mx-auto' height-max={70} >
    <h1 className='m-3'> 
    {/* <img src={logo} width={50} height={50} className="App-logo" alt="logo" /> */}
    Kly-Design</h1>
    </div>
    <Nav variant="pills" defaultActiveKey="/Home">
      <PathMod href="/About">About</PathMod>
      <Nav.Item>
        <Nav.Link href="/Home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/About">About Me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Contact">Contact Me</Nav.Link>
      </Nav.Item>
    </Nav>

{/*     
    <Tabs className="m-2 justify-content-center" variant="pills" defaultActiveKey="/home">
      <Tab eventKey="link-0" title='Home'>Home</Tab>
      <Tab eventKey="link-1" title='About Me'>About Me</Tab>
      <Tab eventKey="link-2" title='Portfolio'>Portfolio</Tab>
      <Tab eventKey="link-3" title='Contact Me'>Contact Me</Tab>
    </Tabs> */}

    </>
  );
}

function customLink ()

//https://www.youtube.com/watch?v=SLfhMt5OUPI link for help
export default NavBar;