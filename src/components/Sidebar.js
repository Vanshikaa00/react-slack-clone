import React from 'react';
import './slack.css';
function Sidebar() {
  return (
    <div>
      {/* display when screen size is small START */}

      <div className="minisidebar">
        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" for="menu__toggle">
            <span></span>
          </label>

          <ul className="menu__box">
            <div className="sidebar-container">
              <div className="profile-container">
                <div className="image-container">
                  <img
                    src="https://images.unsplash.com/photo-1533777168198-c2a016551f63?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="profile picture"
                  />
                </div>
                <div className="content-container">
                  <div className="content-h1">Slack Design</div>
                  <div className="content-h2">Arnold Schwazzner</div>
                </div>
                <div>
                  <span class="material-icons">notifications</span>
                </div>
              </div>
              <div className="channel-container">
                <div className="channel-container-h1">CHANNELS</div>
                <div className="channel-container-h2">
                  <ul>
                    <li> # Channel 1</li>
                    <li> # Channel 1</li>
                    <li> # Channel 1</li>
                  </ul>
                </div>
              </div>
              <div className="channel-container">
                <div className="channel-container-h1">MESSAGES</div>
                <div className="channel-container-h2">
                  <ul>
                    <li>Message 1</li>
                    <li>Message 1</li>
                    <li>Message 1</li>
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
              <img
                src="https://images.unsplash.com/photo-1533777168198-c2a016551f63?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="profile picture"
              />
            </div>
            <div className="content-container">
              <div className="content-h1">Slack Design</div>
              <div className="content-h2">Arnold Schwazzner</div>
            </div>
            <div>
              <span className="material-icons">notifications</span>
            </div>
          </div>
          <div className="channel-container">
            <div className="channel-container-h1">CHANNELS</div>
            <div className="channel-container-h2">
              <ul>
                <li> # Channel 1</li>
                <li> # Channel 1</li>
                <li> # Channel 1</li>
              </ul>
            </div>
          </div>
          <div className="channel-container">
            <div className="channel-container-h1">MESSAGES</div>
            <div className="channel-container-h2">
              <ul>
                <li>Message 1</li>
                <li>Message 1</li>
                <li>Message 1</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* display when screen is large end */}
    </div>
  );
}

export default Sidebar;
