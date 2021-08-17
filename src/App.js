import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import style from './App.module.css';
import { Layout, Body } from './components';
import { LogIn, SignUp } from './pages';

function App() {
  return (
    <Router>
      <div className={style.body}>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <Body/>
            </Route>
            <Route path="/allfeeds">
              <Body/>
            </Route>
            <Route path="/login">
              <LogIn/>
            </Route>
            <Route path="/register">
              <SignUp/>
            </Route>
          </Switch>
        </Layout>
    </div>
    </Router>
  );
}

export default App;
