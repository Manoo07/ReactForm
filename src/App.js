import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar'
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import {useState} from 'react'
function App() {
  const [isLoggin,setIsLoggedIn] = useState(false);
  console.log("Here");
  return (
    <div className="w-screen h-screen bg-zinc-900 flex flex-col">
     <NavBar isLoggin={isLoggin} setIsLoggedIn={setIsLoggedIn}/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
     </Routes>
    </div>
  );
}

export default App;
