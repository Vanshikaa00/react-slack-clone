import React from 'react';
import './cssFiles/NewChannel.css';
const NewChannel = () => {
  return (
    <div className="top-cont">
      <div className="card">
        <div className="container">
          <form>
            <div className="heading">ADD A NEW CHANNEL</div>
            <div className="field ">
              <label htmlFor="channelname">Channel Name</label>
              <input className="inputt" type="text" id="channelname" />
            </div>
            <div className="field tnb">
              <label htmlFor="channeldes">Channel Description</label>
              <textarea className="inputtxt" name="channeldes"></textarea>
            </div>
            <div>
              <button className="bttn">DONE!</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewChannel;
