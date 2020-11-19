import React from 'react';
import './addChannel.css';
const AddChannel = () => {
  return (
    <div className="top-cont">
      <div className="card">
        <div class="container">
          <form>
            <div className="heading">ADD A NEW CHANNEL</div>
            <div class="field ">
              <label for="channelname">Channel Name</label>
              <input type="text" id="channelname" />
            </div>
            <div class="field tnb">
              <label for="channeldes">Channel Description</label>
              <textarea name="channeldes"></textarea>
            </div>
            <div>
              <button className="btn">DONE!</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddChannel;
