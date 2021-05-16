import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import BlogDetails from './components/Blogs/Blog/BlogDetails/BlogDetails';
import Blogs from './components/Blogs/Blogs';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Account from './components/User/Account/Account';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/account/:id' component={Account} />
          <Route path='/blogs' component={Blogs} />
          <Route path='/blog/:id' component={BlogDetails} />
          <Route path='/about' />
          <Route path='/report' />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
