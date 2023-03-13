import '../../App.css';
import ProjectCard from '../pages/Project';
import Row from 'react-bootstrap/Row';

const projects = [{
  "src":"https://github.com/KlyDesign/Module19-PWAtextEditor/raw/main/assets/ServiceWorker.jpg",
  "title":"Jated PWA Text Editor",
  "github":"https://github.com/KlyDesign/Module19-PWAtextEditor" ,
  "deployment" : "https://jated.herokuapp.com/"
},
{
  "src":"https://raw.githubusercontent.com/KlyDesign/Module14_BlogMVC/main/assets/images/HomePage.jpg",
  "title":"Blog Using MVC",
  "github":"https://github.com/KlyDesign/Module14_BlogMVC" ,
  "deployment" : "https://klys-blog.herokuapp.com/login"
},
{
  "src":"https://raw.githubusercontent.com/KlyDesign/Module20-ReactPortfolio/main/assets/scoragamiscreen.jpg",
  "title":"NCAA Scorigami App",
  "github":"https://github.com/KlyDesign/Big12-Scorigami" ,
  "deployment" : "https://klydesign.github.io/Big12-Scorigami/"
},
{
  "src":"https://raw.githubusercontent.com/KlyDesign/Module6-WeatherApp/main/assets/img/screenshot.jpg",
  "title":"Weather App Demo",
  "github":"https://github.com/KlyDesign/Module6-WeatherApp" ,
  "deployment" : "https://klydesign.github.io/Module6-WeatherApp/"
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