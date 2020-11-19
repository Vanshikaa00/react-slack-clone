import React, { Component } from 'react';
import { signOut } from '../firebase';
import './cssFiles/slack.css';

import { Link } from 'react-router-dom';
class Sidebar extends Component {
  render() {
    const { channels, currentUserName, userPhoto } = this.props;

    return (
      <div>
        {/* display when screen size is small START */}

        <div className="minisidebar">
          <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
              <span></span>
            </label>

            <ul className="menu__box">
              <div className="sidebar-container">
                <div className="profile-container">
                  <div className="image-container">
                    <img src={userPhoto} alt="userimg" />
                  </div>
                  <div className="content-container">
                    <div className="content-h1">Slack Clone</div>
                    <div className="content-h2">{currentUserName}</div>
                  </div>
                  <div className="pt" onClick={signOut}>
                    <span className="material-icons" title="Logout">
                      exit_to_app
                    </span>
                  </div>
                </div>
                <div className="channel-container">
                  <div className="channel-container-h1">
                    <div>CHANNELS</div>
                    <div className="centerit">
                      <Link to="/newChannel" style={{ color: 'white' }}>
                        <span className="material-icons">add_box</span>
                      </Link>
                    </div>
                  </div>
                  <div className="channel-container-h2">
                    <ul>
                      {channels.map((channel) => (
                        <li key={channel.id}>
                          <Link
                            style={{ textDecoration: 'none', color: 'white' }}
                            to={`/?id=${channel.id}`}
                          >
                            # {channel.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
        {/* display when screen size is small END */}
        {/* display when screen is large START */}
        <div className="sidebar">
          <div className="sidebar-container">
            <div className="profile-container">
              <div className="image-container">
                <img src={userPhoto} alt="activeuserimg" />
              </div>
              <div className="content-container">
                <div className="content-h1">Slack Clone</div>
                <div className="content-h2">{currentUserName}</div>
              </div>
              <div className="pt" onClick={signOut}>
                <span className="material-icons" title="Logout">
                  exit_to_app
                </span>
              </div>
            </div>
            <div className="channel-container">
              <div className="channel-container-h1">
                <div>CHANNELS</div>
                <div className="centerit">
                  <Link to="/newChannel" style={{ color: 'white' }}>
                    <span className="material-icons">add_box</span>
                  </Link>
                </div>
              </div>
              <div className="channel-container-h2">
                <ul>
                  {channels.map((channel) => (
                    <li key={channel.id}>
                      <Link
                        style={{
                          textDecoration: 'none',
                          color: 'white',
                        }}
                        to={`/?id=${channel.id}`}
                      >
                        # {channel.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* display when screen is large end */}
      </div>
    );
  }
}
export default Sidebar;
