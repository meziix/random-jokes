import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home   from '/imports/ui/pages/Home';
import Signin from '/imports/ui/pages/Signin';
import Signup from '/imports/ui/pages/Signup';
import Room   from '/imports/ui/pages/Room';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}   />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/room"   component={Room}   />
      </Switch>
      <ToastContainer />
    </Router>
  );
}

export default App;
