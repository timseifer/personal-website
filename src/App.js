
import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Download } from './Resumes'
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Layout } from "./Components/Layout";
import { NavigationBar } from './Components/NavigationBar';
import {Jumbotron} from './Components/Jumbotron';
import slideshow from './Components/slideshow';
import Apples from './Components/coolet';
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component {
render() {    
  return (
      <React.Fragment>
          <NavigationBar />
          <Jumbotron />
          <main>
              <slideshow />
          </main>
          <Layout>
              <Router>
                <Switch>
                <Route exact path= "/" component={Home} />
                <Route path= "/about" component={About} />
                <Route path= "/contact" component={Contact} />
                <Route path= "/resume" component={Download} />
                <Route component={NoMatch} />
                </Switch>
            </Router>
         </Layout>
      </React.Fragment>
  );
}
}


export default App;