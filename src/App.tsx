import { Route, Routes, BrowserRouter  } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
<BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
