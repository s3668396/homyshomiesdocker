import React, { Component,useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Navigation} from './Navigation';
import { Contact } from './Contact';
import { Map } from './Map';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import * as buildingData from "./Data/rmitBuilding.json";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/navigation" component={Map} />
              {/* <Route component={NoMatch} /> */}
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
