import { AxiosResponse } from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import BlogAdd from './components/Blogs/Blog/BlogAdd/BlogAdd';
import BlogDetails from './components/Blogs/Blog/BlogDetails/BlogDetails';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register';
import Spinner from './components/UI/Spinner/Spinner';
import Account from './components/User/Account/Account';
import UserContext from './Context/UserContext';
import Layout from './hoc/Layout/Layout';
import User from './Models/User';
import { getOne } from './Services/UserService';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loaded, setLoaded] = useState(false);

  const providedValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    const user_id = localStorage.getItem('user_id');

    if (user_id) {
      setLoaded(false);
      getOne(user_id)
        .then((res: AxiosResponse<User>) => {
          setUser(res.data)
          setLoaded(true);
        })
        .catch(err => {
          console.log(err);
          localStorage.clear();
          setLoaded(true);
          //setUser(null);
        });
    } else {
      setLoaded(true);
    }
  }, []);

  const rendered = loaded ? (
    <div className="App">
      <UserContext.Provider value={providedValue}>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' >
              {user ? <Redirect to='/' /> : <Login />}
            </Route>
            <Route path='/register' >
              {user ? <Redirect to='/' /> : <Register />}
            </Route>
            <Route path='/about' />
            <Route path='/report' />
            {!user ? <Redirect to='/login' /> : null}
            <Route path='/blog/new' component={BlogAdd} />
            <Route path='/account/:id' component={Account} />
            <Route path='/blog/:id' component={BlogDetails} />
            <Route path='/logout' component={Logout} />
          </Switch>
        </Layout>
      </UserContext.Provider>
    </div>
  ) : (
    <div style={{ margin: '200px auto' }}>
      <Spinner size={200} />
    </div>
  );

  return rendered;
}

export default App;
