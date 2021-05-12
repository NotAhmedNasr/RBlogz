import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Landing from './components/Landing/Landing';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/' component={Landing} />
          <Route path='/login' />
          <Route path='/register' />
          <Route path='/about' />
          <Route path='/report' />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
