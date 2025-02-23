import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Dashpoard from "./components/dashboard/Dashpoard";
import {
  menuItems,
  passDetails,
  path,
  paymentMethods,
  topics,
  user,
} from "./constant";
import Lobby from "./components/dashboard/subCompoents/lobby/Lobby";
import MyPass from "./components/dashboard/subCompoents/tickets/MyPass";
import HelpSupport from "./components/helpSupport/HelpSupport";
import MyAccount from "./components/myAccount/MyAccount";
import BuyBusPass from "./components/buyscreen/BuyBusPass";
import MTCBusPass from "./components/viewPass/MTCBusPass";
import authService from "./utils/services/authService";
import { useEffect, useState } from "react";

function App() {
  const [user, setusers] = useState({
    image:
      "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png",
    name: "Loading...",
    phone: "Loading...",
  });
  useEffect(() => {
    const geti = async () => {
      const identities = await authService.getUserIdentities();
      const { identity_data } = identities[0];
      setusers({
        image:
          "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png",
        name: identity_data.fullName,
        phone: "7894721848",
      });
    };
    geti();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path={path.login} element={<Login></Login>}></Route>
      <Route path={path.signup} element={<Signup></Signup>}></Route>
      <Route path={path.dashbord} element={<Dashpoard></Dashpoard>}>
        <Route path={path.lobby} element={<Lobby user={user}></Lobby>}></Route>
        <Route path={path.myPass} element={<MyPass></MyPass>}></Route>
        <Route
          path={path.support}
          element={
            <HelpSupport language="English" topics={topics}></HelpSupport>
          }
        ></Route>
        <Route
          path={path.myAccount}
          element={<MyAccount user={user} menuItems={menuItems}></MyAccount>}
        ></Route>
        <Route
          path={path.buypass}
          element={
            <BuyBusPass
              user={user}
              passDetails={passDetails}
              paymentMethods={paymentMethods}
            />
          }
        ></Route>
        <Route
          path={path.mtcPass}
          element={<MTCBusPass user={user} passDetails={passDetails} />}
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
