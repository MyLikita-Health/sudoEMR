import React, { useState, useRef, useEffect } from 'react';
import { Card, CardHeader } from 'reactstrap';

function Participant({ participant }) {
  const [videoTracks, setVideoTracks] = useState([]);
  const [, setAudioTracks] = useState([]);

  const videoRef = useRef();
  const audioRef = useRef();

  const trackpubsToTracks = (trackMap) =>
    Array.from(trackMap.values())
      .map((publication) => publication.track)
      .filter((track) => track !== null);

  useEffect(
    () => {
      const trackSubscribed = (track) => {
        if (track.kind === 'video') {
          setVideoTracks((videoTracks) => [...videoTracks, track]);
        } else {
          setAudioTracks((audioTracks) => [...audioTracks, track]);
        }
      };

      const trackUnsubscribed = (track) => {
        if (track.kind === 'video') {
          setVideoTracks((videoTracks) =>
            videoTracks.filter((v) => v !== track)
          );
        } else {
          setAudioTracks((audioTracks) =>
            audioTracks.filter((a) => a !== track)
          );
        }
      };
      setVideoTracks(trackpubsToTracks(participant.videoTracks));
      setAudioTracks(trackpubsToTracks(participant.audioTracks));

      participant.on('trackSubscribed', trackSubscribed);
      participant.on('trackUnsubscribed', trackUnsubscribed);

      return () => {
        setVideoTracks([]);
        setAudioTracks([]);
        participant.removeAllListeners();
      };
    },
    [participant]
  );

  useEffect(
    () => {
      const videoTrack = videoTracks[0];
      if (videoTrack) {
        videoTrack.attach(videoRef.current);
        return () => {
          videoTrack.detach();
        };
      }
    },
    [videoTracks]
  );

  return (
    <Card className='mt-1'>
      <CardHeader tag="h6" className="text-center">
        {participant.identity}
      </CardHeader>
      {/* <h3>{participant.identity}</h3> */}
      {/* <CardBody className='m-0'> */}
      <video
        ref={videoRef}
        autoPlay={true}
        style={{ height: '100%', width: '100%' }}
      />
      <audio ref={audioRef} autoPlay={true} muted={true} />
      {/* </CardBody> */}
    </Card>
  );
}

export default Participant;
