import React, { useState, useEffect } from 'react';
import './cssFiles/MainContainer.css';
import { auth, firestore } from '../firebase';
import moment from 'moment';

function MainContainer(props) {
  const { channel } = props;
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');

  console.log('Main container channel', channel);

  function fetchMessages() {
    if (!channel.id) return;
    firestore
      .collection('messages')
      .where('channel', '==', channel.id)
      .orderBy('created_at', 'asc')
      .get()
      .then((snapshot) => {
        const messages = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        console.log('messages are: ', messages);
        setMessages(messages);
      });
  }

  useEffect(() => {
    fetchMessages();
  }, [channel]);

  function handleUserMessage(e) {
    setUserMessage(e.target.value);
  }

  const handleTime = (seconds) => {
    var gmtDateTime = moment.utc(
      moment.duration(seconds, 'seconds').asMilliseconds()
    );
    var local = gmtDateTime.local().format('h:mm A');
    return local;
  };

  function onClickPress(e) {
    if (channel.id && userMessage) {
      const data = {
        from: {
          id: auth.currentUser.uid,
          name: auth.currentUser.displayName,
        },
        text: userMessage,
        channel: channel.id,
        created_at: new Date(),
      };
      firestore
        .collection('messages')
        .add(data)
        .then(() => {
          setUserMessage('');
          fetchMessages();
        });
    }
  }

  return (
    <div>
      <div className="main-container">
        <div className="contt1">
          <div># {channel.name}</div>
          <div className="contt1-des"> {channel.description}</div>
          <div>
            <hr />
          </div>
        </div>
        <div className="contt2">
          {messages.map((message, index) => (
            <div className="chat-container" key={index}>
              <div className="imagee-container">
                <img
                  alt="activeuserimg"
                  src="https://images.unsplash.com/photo-1533777168198-c2a016551f63?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
              </div>
              <div className="contents-container">
                <div className="contents-container-1">
                  <div className="contents-container-name">
                    {message.from.name}
                  </div>
                  <div className="contents-container-time">
                    {handleTime(message.created_at.seconds)}
                  </div>
                </div>
                <div className="message-container">{message.text}</div>
              </div>
            </div>
          ))}

          {messages.length === 0 && (
            <div style={{ textAlign: 'center', marginTop: 175 }}>
              No messages here!
            </div>
          )}
        </div>
      </div>
      {/* footer here */}
      <div>
        <footer>
          <form>
            <input
              type="email"
              className="form__field"
              placeholder="Enter message..."
              value={userMessage}
              onChange={handleUserMessage}
            />
            <button
              type="button"
              onClick={onClickPress}
              className="btn btn--primary btn--inside uppercase"
            >
              <span className="material-icons">send</span>
            </button>
          </form>
        </footer>
      </div>
    </div>
  );
}

export default MainContainer;
