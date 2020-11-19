import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Sidebar, MainContainer } from './';
import { auth, firestore } from '../firebase';
import './cssFiles/slack.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Slack(props) {
  const { history } = props;
  const [channels, setChannels] = useState([]);
  const [currentChannel, setCurrentChannel] = useState({});
  const query = useQuery();
  const channelId = query.get('id');
  const [userPhoto, setUserPhoto] = useState();
  const [currentUserName, setCurrentUserName] = useState();
  useEffect(() => {
    console.log('HOLA', auth.currentUser.uid);
    setUserPhoto(auth.currentUser.photoURL);
    setCurrentUserName(auth.currentUser.displayName);
    firestore
      .collection('channels')
      .where('members', 'array-contains', auth.currentUser.uid)
      .get()
      .then((snapshot) => {
        // const channels = snapshot.docs;
        const channels = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        console.log('CHANNELS ARE:', channels);
        setChannels(channels);

        if (!channelId) {
          history.push({
            pathname: '/',
            search: `?id=${channels[0].id}`,
          });

          setCurrentChannel(channels[0]);
        } else {
          const filteredChannel = channels.filter((ch) => ch.id === channelId);
          setCurrentChannel(filteredChannel[0]);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [channelId]);

  return (
    <div className="container-fluid ">
      <div className="row no-gutters">
        <div className="col-lg-3">
          <Sidebar
            currentUserName={currentUserName}
            channels={channels}
            userPhoto={userPhoto}
          />
        </div>
        <div className="col-lg-9">
          <MainContainer channel={currentChannel} />
        </div>
      </div>
    </div>
  );
}

export default Slack;
