
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages_components/HomePage';
import AboutPage from './pages_components/AboutPage';

function App() {
  return ( 

    <div id="App">
      <Router>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/aboutpage'>About</Link></li>
          </ul>
        </nav>

      <Routes>
        <Route path='/' element={<HomePage/>}> </Route>
        <Route path='/aboutpage' element={<AboutPage/>}></Route>
      </Routes>

      </Router>

    </div>
  );
  
}

export default App;
