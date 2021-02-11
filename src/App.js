
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import Home from './pages/Home';
// import Login from './pages/Login';
import SignUp from './comp/SignUp';
import About from './comp/About';
import Sponsors from './comp/Sponsors';
import Schedule from './comp/Schedule';
import Rules from './comp/Rules';
import Year2020 from './comp/2020';
import Year2019 from './comp/2019';
import Year2018 from './comp/2018';
import Year2017 from './comp/2017';


import './index.css'

function App() {
  return (
    <div className="App">
     
          <Container>
           <BrowserRouter>
             <Switch> 
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/about" component={About} />
            <Route exact path="/sponsors" component={Sponsors} />
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/rules" component={Rules} />

            <Route exact path="/2020" component={Year2020} />
            <Route exact path="/2019" component={Year2019} />
            <Route exact path="/2018" component={Year2018} />
            <Route exact path="/2017" component={Year2017} />
            
            </Switch>
            </BrowserRouter>
          </Container>
      
    </div>
  );
}

export default App;
