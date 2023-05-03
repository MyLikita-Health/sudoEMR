import React from 'react';
// import { useEffect } from 'react';
// import { Card } from 'reactstrap';
import {RiVideoChatLine} from 'react-icons/ri'

function ChatSetup({
  user = '',
  generateRoomId = (f) => f,
  handleStartCall = (f) => f,
  roomId = '',
}) {
  // useEffect(() => {}, [])
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      {/* <Card className="p-4"> */}
        <p className="text-success m-2">Room ID: {roomId}</p>
        <p className="text-success m-2">User: {user}</p>
        {/* <button className="btn" onClick={() => generateRoomId()}>
          Create a conversation
        </button> */}
        <button className="btn btn-primary mt-md-4" onClick={handleStartCall}>
          <RiVideoChatLine size={22} className='mr-1'/>
          Start Call now
        </button>
      {/* </Card> */}
    </div>
  );
}

export default ChatSetup;
