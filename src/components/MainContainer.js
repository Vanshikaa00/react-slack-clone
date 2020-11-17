import React, { Component } from 'react';
import './MainContainer.css';
class MainContainer extends Component {
  render() {
    return (
      <div>
        <div className="main-container">
          <div className="contt1">
            <div># SLACK CLONE</div>
            <div>
              <hr />
            </div>
          </div>
          <div className="contt2">
            <div className="chat-container">
              <div className="imagee-container">
                <img
                  alt="profile image"
                  src="https://images.unsplash.com/photo-1533777168198-c2a016551f63?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
              </div>
              <div className="contents-container">
                <div className="contents-container-1">
                  <div className="contents-container-name">Jessica Jones</div>
                  <div className="contents-container-time">04:53 PM</div>
                </div>
                <div className="message-container">
                  Second value is omitted, the first value is assigned to both
                  properties.second value is omitted, the first value is
                  assigned to both properties.second value is omitted, the first
                  value is assigned to both properties.second value is omitted,
                  the first value is assigned to both properties.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer here */}
        <footer>
          <form>
            <input
              type="email"
              class="form__field"
              placeholder="Enter message..."
            />
            <button
              type="button"
              class="btn btn--primary btn--inside uppercase"
            >
              <span class="material-icons">send</span>
            </button>
          </form>
        </footer>
      </div>
    );
  }
}
export default MainContainer;
