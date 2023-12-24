import { Route, Routes, BrowserRouter  } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import './App.css';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <div>
      <Navbar />
<BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/register' element={<Register />}></Route>
    </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
