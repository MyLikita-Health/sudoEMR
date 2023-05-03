import React, { useState, useEffect } from 'react';
import Participant from './Participant';
import { MdCallEnd } from 'react-icons/md';

function VideoChatView({ roomId, token, handleEndCall }) {
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);

  useEffect(
    () => {
      const participantConnected = (participant) => {
        setParticipants((prevParticipants) => [
          ...prevParticipants,
          participant,
        ]);
      };
      const participantDisconnected = (participant) => {
        setParticipants((prevParticipants) =>
          prevParticipants.filter((p) => p !== participant)
        );
      };

      // Video.connect(
      //   token,
      //   {
      //     name: roomId,
      //   }
      // ).then((room) => {
      //   setRoom(room);
      //   room.on('participantConnected', participantConnected);
      //   room.on('participantDisconnected', participantDisconnected);
      //   room.participants.forEach(participantConnected);
      // });

      return () => {
        setRoom((currentRoom) => {
          if (
            currentRoom &&
            currentRoom.localParticipant.state === 'connected'
          ) {
            currentRoom.localParticipant.tracks.forEach(function(
              trackPublication
            ) {
              trackPublication.track.stop();
            });
            currentRoom.disconnect();
            return null;
          } else {
            return currentRoom;
          }
        });
      };
    },
    [roomId, token]
  );

  const remoteParticipants = participants.map((participant) => (
    <Participant key={participant.sid} participant={participant} />
  ));

  return (
    <div>
      <div className="row">
        <h6 className="col-md-8">RoomId: {roomId}</h6>
        <button
          className="btn btn-danger col-md-4"
          onClick={handleEndCall}
        >
          <MdCallEnd className={20} /> End Call
        </button>
      </div>

      <div className="">
        {room ? (
          <Participant
            key={room.localParticipant.sid}
            participant={room.localParticipant}
          />
        ) : (
          ''
        )}
      </div>
      {participants.length ? (
        <div className="">
          <h6>Remote Participants</h6>
          <div>{remoteParticipants}</div>
        </div>
      ) : null}
    </div>
  );
}

export default VideoChatView;
