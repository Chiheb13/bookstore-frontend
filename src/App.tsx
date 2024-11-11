import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Home/Login';
import Register from './pages/Home/Register';
import Home from './pages/Home/Home';
import { AuthProvider } from './context/Authcontext';
import About from './pages/Books/Books';
import Books from './pages/Books/Books';
function App() {
  return (
    <Router>
      <AuthProvider>
        <div >
          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/categories' element={<Register />} />
            <Route path='/books' element={<Books />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
          </div>
          </AuthProvider>
    </Router>
  );
}

export default App;
