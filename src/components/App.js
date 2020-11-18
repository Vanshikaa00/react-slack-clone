import { SignIn, Slack } from './';
import React, { Component, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { UserContext } from './providers/UserProvider';
const PrivateRoute = ({ component: Component, isLoggedIn, ...others }) => {
  return (
    <Route
      {...others}
      render={(props) => {
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          // we will pass the path the user is trying to access to our login component
          // instead of passing string we pass object
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};

function App() {
  const auth = useContext(UserContext);
  console.log('authhhh', auth);
  const loggedin = auth.user ? true : false;

  if (auth.loading) {
    return <h1>Loading.....</h1>;
  }
  return (
    <div>
      <Switch>
        <PrivateRoute
          exact
          path="/"
          component={Slack}
          isLoggedIn={auth.user ? true : false}
        />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/signup" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
