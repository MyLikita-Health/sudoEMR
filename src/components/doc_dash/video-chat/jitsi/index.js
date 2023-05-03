import React, { useState } from 'react';
import Jitsi from 'react-jitsi';
import Loading from '../../../comp/components/Loading';

const JitsiVideo = ({ room = '', displayname = '' }) => {
  // const [displayName, setDisplayName] = useState('');
  // const [roomName, setRoomName] = useState('');
  // const [password, setPassword] = useState('');
  const [onCall, setOnCall] = useState(false);

  return onCall ? (
    <Jitsi
    // config={{startAudioOnly: true, enableClosePage: true}}
    // interfaceConfig={{ filmStripOnly: true }}
      roomName={room}
      displayName={displayname}
      // password={password}
      loadingComponent={() => <Loading />}
      onAPILoad={(JitsiMeetAPI) => console.log('Good Morning everyone!')}
    />
  ) : (
    <div className="d-flex flex-column align-items-center p-3">
      <h6>Meeting Details</h6>
      <p className="form-control text-center mt-2">Meeting ID: {room}</p>
      <p className="form-control text-center mt-2">
        Display Name: {displayname}
      </p>
      {/* <input
        type="text"
        className="form-control"
        placeholder="Room name"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Your name"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
      /> */}
      <div>
        <button className="btn">Send Invitation Message</button>
        <button className="btn btn-success" onClick={() => setOnCall(true)}>
          {' '}
          Let&apos;s start!
        </button>
      </div>
    </div>
  );
};

export default JitsiVideo;
