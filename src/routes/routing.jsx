import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from '../components/header';
import Home from '../container/home';
import Login from '../container/login';



const  RouterTest =()=> {
  return (
    <Router>
      <Header />
      <div>        
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
      </div>
      {/* <Footer /> */}
    </Router>
  )
}

export default RouterTest;