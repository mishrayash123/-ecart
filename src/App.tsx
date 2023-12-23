import { Route, Routes, BrowserRouter  } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import './App.css';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar />
<BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}></Route>
    </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
