import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import style from './App.module.css';
import { ToastContainer } from 'react-toastify';
import { Layout, Body } from './components';
import { Profile, Profiles, Articles} from './pages';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';

function App() {

  return (
      <Router>
        <div className={style.body}>
          <Layout>
            <Switch>
              <Route path="/" exact>
                <Body/>
              </Route>
              <Route path="/login" exact>
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
              <Route path='/articles'>
                <Articles/>
              </Route>
            </Switch>
          </Layout>
          <ToastContainer/>
        </div>
      </Router>
  );
}

export default App;
