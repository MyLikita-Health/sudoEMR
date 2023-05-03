import React, { useState, useEffect, useCallback } from 'react';
import VideoChatView from './VideoChatView';
import ChatSetup from './ChatSetup';
import { v4 as uuidV4 } from 'uuid';
import { useRouteMatch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getPatient } from '../../actions/patientsActions';
import { twilioServer } from '../../../../redux/actions';

function VideoChat() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState('');
  const [roomId, setRoomId] = useState('DOCTOR');

  const generateRoomId = () => {
    let rid = uuidV4();
    setRoomId(rid);
  };

  const match = useRouteMatch();
  const dispatch = useDispatch();
  let { patientId } = match.params;
  // const patientDetails = useSelector(
  //   (state) => state.individualDoc.selectedPatient
  // );
  const doc = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(getPatient(patientId));
    setUser(`${doc.firstname} ${doc.lastname}`);
  }, []);

  const handleStartCall = useCallback(
    async () => {
      // event.preventDefault();
      const data = await fetch(`${twilioServer}/video/token`, {
        method: 'POST',
        body: JSON.stringify({
          identity: user,
          room: roomId,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json());

      setToken(data.token);
    },
    [user, roomId]
  );

  const handleEndCall = useCallback((event) => {
    setToken(null);
  }, []);

  let render;

  if (token) {
    render = (
      <VideoChatView
        roomId={roomId}
        token={token}
        handleEndCall={handleEndCall}
      />
    );
  } else {
    render = (
      <ChatSetup
        user={user}
        roomId={roomId}
        generateRoomId={generateRoomId}
        handleStartCall={handleStartCall}
      />
    );
  }

  return render;
}

export default VideoChat;
