import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Course from './pages/Course/Course';
import Blog from './pages/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/about' element={<About/>} />
       <Route path='/university' element={<Course/>} />
       <Route path='/blog' element={<Blog/>} />
       <Route path='/contact' element={<Contact/>} />
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
