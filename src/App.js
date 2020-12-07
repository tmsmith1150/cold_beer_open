
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./comp/Navbar";
import { Container } from 'reactstrap';
import Home from './comp/Home';
import SignUp from './comp/SignUp';
import Merchandise from './comp/Merchandise';
import Sponsors from './comp/Sponsors';


import './index.css'

function App() {
  return (
    <div className="App">
      <Navbar />
          <Container>
           <BrowserRouter>
             <Switch> 
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/merchandise" component={Merchandise} />
            <Route exact path="/sponsors" component={Sponsors} />
            
            </Switch>
            </BrowserRouter>
          </Container>
      
    </div>
  );
}

export default App;
