// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { InputGroup, Button, InputGroupAddon, Input } from 'reactstrap';
// import { FaMicrophone } from 'react-icons/fa';

// const propTypes = {
//   // Props injected by SpeechRecognition
//   transcript: PropTypes.string,
//   startListening: PropTypes.func,
//   stopListening: PropTypes.func,
//   resetTranscript: PropTypes.func,
//   browserSupportsSpeechRecognition: PropTypes.bool,
// };

// class VoiceToTextInput extends Component {
//   static propTypes = propTypes;
//   // state = {
//   //   value: '',
//   // };

//   componentWillReceiveProps(props){
//     // this.setState({ value: props.transcript })
//     console.log(props)
//     // this.props.onInputChange(props.transcript)
//   }

//   render() {
//     const {
//       // transcript,
//       // resetTranscript,
//       // startListening,
//       // stopListening,
//       // listening,
//       browserSupportsSpeechRecognition,
//       // onChange,
//       tag,value
//     } = this.props;

//     if (!browserSupportsSpeechRecognition) {
//       console.log('browser not supported');
//       return null;
//     }

//     return (
//       <div>
//         {/* <button onClick={resetTranscript}>Reset</button> */}
//         <InputGroup>
//           <Input
//             // {...this.props}
//             tag={tag}
//             className="form-control"
//             value={value}
//             // value={transcript}
//             // onChange={() => console.log('changing')}
//             onChange={(e) => {
//               // this.setState({ value: e.target.value })
//               this.props.onInputChange(e.target.value)
//             }}
//           />
//           <InputGroupAddon addonType="append">
//             <Button color="secondary" 
//               // onClick={(e) => startListening(e)}
//             >
//               <FaMicrophone />
//             </Button>
//           </InputGroupAddon>
//         </InputGroup>
//       </div>
//     );
//   }
// }

// // export default SpeechRecognition({ autoStart: false, continuous: false })(
// //   VoiceToTextInput
// // );