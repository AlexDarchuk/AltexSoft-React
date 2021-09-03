import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import style from './App.module.css';
import { Layout, Body } from './components';
import { Profile, Profiles } from './pages';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
// import Form from './components/Form/Form';

function App() {

  return (
      <Router>
        <div className={style.body}>
          <Layout>
            {/* <Form/> */}
            <Switch>
              <Route path="/" exact>
                <Body/>
              </Route>
              <Route path="/login">
                <LogIn/>
              </Route>
              <Route path="/register">
                <SignUp/>
              </Route>
              <Route path='/profile'>
                <Profile/>
              </Route>
              <Route path='/profiles'>
                <Profiles/>
              </Route>
            </Switch>
          </Layout>
        </div>
      </Router>
  );
}

export default App;
