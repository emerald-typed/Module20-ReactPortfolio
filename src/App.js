import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Porty from './components/pages/Portfolio'
import NavBar from './components/Nav.js';
import { Route , Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className='mb-1'>
        <div className='row mx-auto bg-green' height-max={70} >
          <h1 className='textPlat'>Kly-Design</h1>
          <NavBar/>
        </div>
      </header>
      <br>
      </br>
        <div className='m-3'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/About' element={<About/>}/>
            <Route path='/Portfolio' element={<Porty/>} />
            <Route path='/Contact' element={<Contact/>} />
          </Routes>
        </div>
  </div>
  );
}

export default App;
