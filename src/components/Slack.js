import React, { Component } from 'react';
import { Sidebar, MainContainer } from './';
import './slack.css';
class Slack extends Component {
  render() {
    return (
      <div className="container-fluid ">
        <div className="row no-gutters">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <MainContainer />
          </div>
        </div>
      </div>
    );
  }
}
export default Slack;
