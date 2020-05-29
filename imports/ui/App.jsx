import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home   from '/imports/ui/pages/Home';
import Signin from '/imports/ui/pages/Signin';
import Signup from '/imports/ui/pages/Signup';
import maison from '/imports/ui/pages/maison';
import jokes from '/imports/ui/pages/jokes';
import newjokes from '/imports/ui/pages/newjokes';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}   />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/maison" component={maison} />
        <Route path="/jokes" component={jokes} />
        <Route path="/newjokes" component={newjokes} />
      </Switch>
      <ToastContainer />
    </Router>
  );
}

export default App;
