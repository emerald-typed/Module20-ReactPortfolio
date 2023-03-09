import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home'
import NavBar from './components/Nav.js';
import { Route , Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App bg-green">
    <header>
      <div className='row mx-auto' height-max={70} >
        <h1 className='bg-green m-3'>
          Kly-Design</h1>
      </div>
    </header>
    
      <NavBar />
        <div>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/About' element={<h1>Cool Line fill with react bootstrap later</h1>} />
            <Route path='/Portfolio' element={<h1>Porty</h1>} />
            <Route path='/Contact' element={<h1>Cont</h1>} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
