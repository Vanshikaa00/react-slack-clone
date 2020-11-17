import { SignIn, Slack } from './';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
// function Home() {
//   return <div>Home</div>;
// }

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={SignIn} />
          {/* <Route exact path="/home" component={Home} /> */}
          <Route exact path="/slack" component={Slack} />
        </Switch>
      </div>
    );
  }
}

export default App;
