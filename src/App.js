
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import Home from './comp/Home';
import SignUp from './comp/SignUp';
import About from './comp/About';
import Sponsors from './comp/Sponsors';
import Schedule from './comp/Schedule';
import Rules from './comp/Rules';


import './index.css'

function App() {
  return (
    <div className="App">
     
          <Container>
           <BrowserRouter>
             <Switch> 
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/about" component={About} />
            <Route exact path="/sponsors" component={Sponsors} />
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/rules" component={Rules} />
            
            </Switch>
            </BrowserRouter>
          </Container>
      
    </div>
  );
}

export default App;
