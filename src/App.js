import './App.css';

import React, {createContext, useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from "./components/Header/Header";
import Admin from "./components/Admin/Admin";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Orders from "./components/Orders/Orders";

export const UserContext = createContext();

function App() {

    const [loggedInUser, setLoggedInUser] = useState({});

  return (
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
              <Header></Header>
              <Switch>

                  <Route exact path = '/'>
                      <Home></Home>
                  </Route>

                  <Route path = '/home'>
                      <Home></Home>
                  </Route>

                  <Route path = '/login'>
                      <Login></Login>
                  </Route>

                  <Route path = '/Admin'>
                      <Admin></Admin>
                  </Route>

                  <Route path = '/Checkout'>
                      <Checkout></Checkout>
                  </Route>

                  <Route path = '/Orders'>
                      <Orders></Orders>
                  </Route>

                  {/*<PrivateRoute path = '/travel/:type'>*/}
                  {/*    <Travel></Travel>*/}
                  {/*</PrivateRoute>*/}

                  <Route path='*'>
                      <Home></Home>
                  </Route>

              </Switch>

          </Router>
      </UserContext.Provider>
  );
}

export default App;
