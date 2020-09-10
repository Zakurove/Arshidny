import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

//Alert OPTIONS
const alertOptions = {
  timeout: 3000,
  position: 'top center'
}

//Redux Stuff
import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from '../actions/auth.js';


//Components
import Alerts from "./layout/Alerts.js";
import Login from "./accounts/Login.js";
import Register from "./accounts/Register.js";
import PrivateRoute from "./common/PrivateRoute.js";

import Header from "./layout/Header.js";
import Footer from "./layout/Footer.js";
import MainPage from "./common/MainPage.js";
import GeneralInfo from "./common/GeneralInfo.js";
import FAQ from "./common/FAQ.js";
import Contact from "./common/Contact.js";
import Acceptance from "./acceptance/Acceptance.js";

import Interviews from "./preUni/Interviews.js"
import MedicalExam from "./preUni/MedicalExam.js"
import Intro from "./preUni/Intro.js"
import Uniform from "./preUni/Uniform.js"
import Kheir from "./preUni/Kheir.js"

import FirstYear from "./firstYear/FirstYear.js"
class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={ AlertTemplate }
        {...alertOptions}>
          <Router>
            <Fragment>
            <Alerts />
              <Header />
              <div>
                <Switch>
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/" component={MainPage} />
                  <Route exact path="/general-info" component={GeneralInfo} />
                  <Route exact path="/acceptance" component={Acceptance} /> 
                  <Route exact path="/FAQ" component={FAQ} />        
                  <Route exact path="/contact" component={Contact} />  

                  <Route exact path="/interviews" component={Interviews} />
                  <Route exact path="/medical-exam" component={MedicalExam} />
                  <Route exact path="/intro" component={Intro} />   
                  <Route exact path="/uniform" component={Uniform} />
                  <Route exact path="/kheir" component={Kheir} />   

                  <Route exact path="/first-year" component={FirstYear} /> 

                </Switch>
              </div>
              <Footer />
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));