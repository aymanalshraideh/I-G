import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/layout/Navbar';
function App() {
  return (
    
      <BrowserRouter>
        <Navbar />
          
      <Routes>
        {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
           </Route> */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          
       
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
