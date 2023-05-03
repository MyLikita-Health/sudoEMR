import React from 'react';
import loading from '../../../images/loading-preferred.gif';
import { InputGroup, Button, InputGroupAddon, Input } from 'reactstrap';
import { FaMicrophone } from 'react-icons/fa';
// import { LoadingXsm } from '../../loading';

// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
// const recognition = new SpeechRecognition()

const SpeechInput = (props) => {
  const [btnColor, setBtnColor] = React.useState('secondary');

  // conts { tag, value, onInputChange, className } = props
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  // const SpeechGrammarList = window.SpeechGrammarList;
  // const SpeechRecognitionEvent = window.SpeechRecognitionEvent;
  const recognition = new SpeechRecognition();
  const handleStartClick = () => {
    recognition.start();
    recognition.onstart = () => setBtnColor('success');
    recognition.onresult = (e) => {
      const current = e.resultIndex;
      const transcript = e.results[current][0].transcript;
      const upperCase =
        transcript.charAt(0).toUpperCase() + transcript.substring(1);
      props.onInputChange(upperCase);
      setBtnColor('secondary');
    };

    recognition.onerror = () => setBtnColor('danger');
    // recognition.onspeechend = () => setBtnColor('secondary');
  };

  return (
    <InputGroup>
      <Input
        {...props}
        // tag={tag}
        className={`form-control ${props.className}`}
        // value={value}
        // value={transcript}
        // onChange={() => console.log('changing')}
        onChange={(e) => {
          // this.setState({ value: e.target.value })
          props.onInputChange(e.target.value);
        }}
        // onBlur={() => (props.handleBlur ? props.handleBlur() : {})}
        ref={props._ref}
      />
      {/* <InputGroupAddon addonType="append">
        <Button
          color={btnColor}
          onClick={handleStartClick}
          disabled={btnColor !== 'secondary'}
        >
          {btnColor === 'success' ? (
            <img alt="..." src={loading} height={20} />
          ) : (
            <FaMicrophone />
          )}
        </Button>
      </InputGroupAddon> */}
    </InputGroup>
  );
};

const InputComponent = (props) => {
  if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    return <SpeechInput {...props} />;
  } else {
    return (
      <input
        {...props}
        // ref={props._ref}
        className={`form-control ${props.className}`}
        onChange={(e) => props.onInputChange(e.target.value)}
      />
    );
  }
};

export default InputComponent;
