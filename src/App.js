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
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ManageProduct from "./components/Admin/ManageProduct/ManageProduct";

export const UserContext = createContext();

function App() {

    const [loggedInUser, setLoggedInUser] = useState({});

  return (
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
              <Header></Header>

              <div className="main">
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

                      <PrivateRoute path = '/Admin'>
                          <Admin></Admin>
                      </PrivateRoute>

                      <PrivateRoute path = '/Admin/manage-product'>
                          <ManageProduct></ManageProduct>
                      </PrivateRoute>

                      <PrivateRoute path = '/Checkout/:email'>
                          <Checkout></Checkout>
                      </PrivateRoute>

                      <PrivateRoute path = '/Orders/:email'>
                          <Orders></Orders>
                      </PrivateRoute>

                      {/*<PrivateRoute path = '/travel/:type'>*/}
                      {/*    <Travel></Travel>*/}
                      {/*</PrivateRoute>*/}

                      <Route path='*'>
                          <Home></Home>
                      </Route>

                  </Switch>
              </div>

          </Router>
      </UserContext.Provider>
  );
}

export default App;
