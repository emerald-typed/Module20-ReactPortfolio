import '../../App.css';
import ProjectCard from '../pages/Project';
import Row from 'react-bootstrap/Row';


function Grid() {
  return (
    <div className='col-11 mx-auto'>

      {/* //size and spacing of the cards row of two default based on bootstrap react */}
      
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <ProjectCard/>
      ))}
    </Row>
    </div>
  );
}

export default Grid;