import React, { useEffect } from 'react';
import VideoChatView from './jitsi';
// import ChatSetup from './twilio/ChatSetup';
// import { v4 as uuidV4 } from 'uuid';
import { useRouteMatch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getPatient } from '../actions/patientsActions';
// import { twilioServer } from '../../../redux/actions';
import { FaTimes } from 'react-icons/fa';
import { Pane, Popover, Button } from 'evergreen-ui';

function VideoChat() {
  // const [token, setToken] = useState(null);
  // const [user, setUser] = useState('');
  // const [roomId, setRoomId] = useState('DOCTOR');

  // const generateRoomId = () => {
  //   let rid = uuidV4();
  //   setRoomId(rid);
  // };

  const match = useRouteMatch();
  const dispatch = useDispatch();
  let { patientId } = match.params;
  const patientDetails = useSelector(
    (state) => state.individualDoc.selectedPatient
  );
  const doc = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(getPatient(patientId));
  }, []);

  // const handleEndCall = useCallback((event) => {
  //   setToken(null);
  // }, []);

  return (
    <Popover
      content={({ close }) => (
        <Pane
          width={800}
          height={430}
          // paddingX={40}
          // display="flex"
          // alignItems="center"
          // justifyContent="center"
          // flexDirection="column"
        >
          <div className="d-flex flex-row justify-content-end">
            <button className="btn" onClick={close}>
              <FaTimes className="text-danger" size={22} />
            </button>
          </div>
          <VideoChatView
            displayname={`${doc.firstname} ${doc.lastname}`.toUpperCase()}
            room={`${doc.username}-${patientDetails.firstname}`.toUpperCase()}
          />
        </Pane>
      )}
      shouldCloseOnExternalClick={false}
    >
      {/* <div className='mb-2 d-flex flex-row justify-content-end'> */}
      <Button
        iconBefore="video"
        appearance="primary"
        intent="success"
        marginBottom={5}
      >
        Start Video Call
      </Button>
      {/* </div> */}
    </Popover>
  );
}

export default VideoChat;
