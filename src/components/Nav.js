import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// // import logo from '../logo.svg';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


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


      <Nav className="m-2 justify-content-center" variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="link-0" title='HomeButton' ><Link to="/">Home</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" title='About' ><Link to="/About">About</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" title='Port' ><Link to="/Portfolio">Portfolio</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3 " title='Contact' ><Link to="/Contact">Contact</Link></Nav.Link>
        </Nav.Item>
        {/* <Tab eventKey="link-1" title='About Me'> <Link to="/About">About</Link></Tab> */}

        {/* <Link to ="Portofolio">
         <Tab eventKey="link-2" title='Portfolio'>Portfolio</Tab>
        </Link>
        <Link to="Contact">
         <Tab eventKey="link-3" title='Contact Me'>Contact Me</Tab>
        </Link> */}
      </Nav>

    </>
  );
}

// function useCustomLink ({to , children, ...props}){
//   const resolvedPath = useResolvedPath(to);
//   const isActive = useMatch({path : resolvedPath.pathname, end:true });
//   return (
//     <Nav.Item className={isActive ? "active" : "" }>
//       <Link to={to} {...props}>
//       {children}
//       </Link>
//     </Nav.Item>
//   )
// }

//https://www.youtube.com/watch?v=SLfhMt5OUPI link for help
export default NavBar;