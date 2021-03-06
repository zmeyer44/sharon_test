import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Default from "./components/Default";
import EmailList from "./components/EmailList";
import ScrollToTop from "./ScrollToTop";
import Update from "./components/Update";


class App extends Component {

 
  
  render() {
    

    return (
      <React.Fragment>
        
        <Navbar />
        
        <Switch>
        <Route exact path=" " component={Home} />
          <Route exact path="/" component={Home} />
          <Route path="/emails" component={EmailList} />
          <Route path="/update" component={Update} />
          <Route component={Default} />
          
        </Switch>
        <Modal />
          
        <ScrollToTop />
        
      </React.Fragment>
    );
  }
}
export default App;
