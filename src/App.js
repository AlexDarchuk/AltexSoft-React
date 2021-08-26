import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import style from './App.module.css';
import { Layout, Body } from './components';
import { LogIn, SignUp } from './pages';
import { ProvideAuth } from './hooks/authContext';

function App() {
  return (
    <ProvideAuth>
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
    </ProvideAuth>
  );
}

export default App;
