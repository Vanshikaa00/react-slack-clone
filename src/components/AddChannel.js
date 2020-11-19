import React, { useState, useEffect } from 'react';
import './addChannel.css';
import { auth, firestore } from '../firebase';
import { UserContext } from './providers/UserProvider';

const AddChannel = () => {
  const [channelName, setChannelName] = useState('');
  const [channelDes, setChannelDes] = useState('');
  const auth = useContext(UserContext);
  console.log(auth.currentUser.uid);
  const handleSubmit = (e) => {
    console.log('coming to handle');
    const data = {
      created_by: auth.currentUser.uid,
      description: channelDes,
      members: [auth.currentUser.uid],
      name: channelName,
    };
    firestore
      .collection('channels')
      .add(data)
      .then(() => {
        setChannelDes('');
        setChannelName('');
      });
    console.log('channel data is: ', data);
    alert('New Channel created successfully!');
    <Redirect
      to={{
        pathname: '/',
        state: {
          from: props.location,
        },
      }}
    />;
  };

  const handleChannelName = (e) => {
    setChannelName(e.target.value);
  };
  const handleChannelDes = (e) => {
    setChannelDes(e.target.value);
  };
  return (
    <div className="top-cont">
      <div className="card">
        <div class="container">
          <form>
            <div className="heading">ADD A NEW CHANNEL</div>
            <div class="field ">
              <label for="channelname">Channel Name</label>
              <input
                type="text"
                id="channelname"
                value={channelName}
                onChange={handleChannelName}
              />
            </div>
            <div class="field tnb">
              <label for="channeldes">Channel Description</label>
              <textarea
                name="channeldes"
                value={channelDes}
                onChange={handleChannelDes}
              ></textarea>
            </div>
            <div>
              <button type="button" onClick={handleSubmit} className="btn">
                DONE!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddChannel;
