import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Dashpoard from './components/dashboard/Dashpoard';

function App() {
  return (
   <Routes>
    <Route path='/' element={<Home></Home>}>
   
    </Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/signup' element={<Signup></Signup>}></Route>
    <Route path='/dashbord' element={<Dashpoard></Dashpoard>}></Route>
   </Routes>
  );
}

export default App;