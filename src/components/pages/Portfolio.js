import '../../App.css';
import ProjectCard from '../pages/Project';
import Row from 'react-bootstrap/Row';

const projects = [{
  "src":"https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg",
  "title":"cat1",
  "github":"https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg" ,
  "deployment" : "https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg"
},
{
  "src":"https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg",
  "title":"cat2",
  "gitHub":"https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg" ,
  "deployment" : "https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg"
},
{
  "src":"https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg",
  "title":"cat3",
  "gitHub":"https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg" ,
  "deployment" : "https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg"
},
{
  "src":"https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg",
  "title":"cat4",
  "gitHub":"https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg" ,
  "deployment" : "https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg"
}
]

function Grid() {
  return (
    <div className='col-11 mx-auto'>

      {/* //size and spacing of the cards row of two default based on bootstrap react */}
      
    <Row xs={1} md={2} className="g-4">
        <ProjectCard projects={projects}/>
    </Row>
    </div>
  );
}

export default Grid;