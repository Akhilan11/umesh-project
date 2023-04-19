import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './Auth';
import Home from './Home';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Auth/>}/>
            <Route path='/home' element={<Home/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
