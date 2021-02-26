import React, { useState, useEffect } from "react";
import "./App.css";
import Contacts from "./components/Contacts";
import CakeContainer from "./components/CakeContainer";
import store from "./Redux/store";
import { Provider } from "react-redux";
import { UserProvider } from "./components/userContext";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import UserContainer from "./components/UserContainer";
import HooksUserContainer from "./components/HooksUserContainer";

function App() {
  // var data = { fname: "john", lname: "doe" };
  // const [state, setstate] = useState(data);
  return (
    <Provider store={store}>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {/* <UserProvider value={state}> */}
          {/* <Contacts></Contacts> */}
          {/* <CakeContainer /> */}
          {/* <HooksCakeContainer /> */}
          {/* <HooksIceCreamContainer /> */}
          <UserContainer />
          {/* <HooksUserContainer /> */}
          {/* </UserProvider> */}
          {/* <Contacts></Contacts> */}
        </div>
      </div>
    </Provider>
  );
}

export default App;
