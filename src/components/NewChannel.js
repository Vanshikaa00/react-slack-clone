import React, { useState, useEffect } from 'react';
import './cssFiles/NewChannel.css';
import { auth, firestore } from '../firebase';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import { useHistory } from 'react-router-dom';
const NewChannel = (props) => {
  let history = useHistory();
  const [channelName, setChannelName] = useState('');
  const [channelDes, setChannelDes] = useState('');
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
    alert('New Channel created successfully!');
    history.push('/');
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
        <div className="container">
          <form>
            <div className="heading">ADD A NEW CHANNEL</div>
            <div className="field ">
              <label htmlFor="channelName">Channel Name</label>
              <input
                className="inputt"
                type="text"
                id="channelName"
                value={channelName}
                onChange={handleChannelName}
              />
            </div>
            <div className="field tnb">
              <label htmlFor="channelDes">Channel Description</label>
              <textarea
                className="inputtxt"
                name="channelDes"
                value={channelDes}
                onChange={handleChannelDes}
              ></textarea>
            </div>
            <div>
              <button className="bttn" onClick={handleSubmit}>
                DONE!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewChannel;
