import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Dashpoard from './components/dashboard/Dashpoard';
import { path } from './constant';
import Lobby from './components/dashboard/subCompoents/lobby/Lobby';
import MyPass from './components/dashboard/subCompoents/tickets/MyPass';

function App() {
  return (
   <Routes>
    <Route path='/' element={<Home></Home>}>
   
    </Route>
    <Route path={path.login} element={<Login></Login>}></Route>
    <Route path={path.signup} element={<Signup></Signup>}></Route>
    <Route path={path.dashbord} element={<Dashpoard></Dashpoard>}>
    <Route  path={path.lobby} element={<Lobby></Lobby>} >

    </Route>
    <Route  path={path.myPass} element={<MyPass></MyPass>} >

    </Route>
    </Route>
   </Routes>
  );
}

export default App;
