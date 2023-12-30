// import React, { useEffect, useRef} from 'react';
// import { FaMicrophone } from "react-icons/fa";
// import { IoVolumeMedium } from "react-icons/io5";
// import { IoVideocam } from "react-icons/io5";
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import { useState } from 'react';
// import './Video.css'

// function Video() {
//   const audioRef = useRef(null);
//   const videoRef = useRef(null);
//   const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

//   useEffect(() => {
//     navigator.mediaDevices.getUserMedia({ video: true, audio: true })
//       .then(stream => {
//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//         }
//       })
//       .catch(err => console.log(err));
//   }, []);

//   if (!browserSupportsSpeechRecognition) {
//     return <span>Browser doesn't support speech recognition.</span>;
//   }
//   const adjustVolume = (event) => {
//     if (audioRef.current) {
//       audioRef.current.volume = event.target.value / 100;
//     }
//   }

//   return (
//     <div id='videoComp'>
//         <div className="video">
//             <video ref={videoRef} autoPlay muted />
//         </div>
//         <div className="vidIcon hid">
//             <IoVideocam/>
//         </div>
//         <div className="mic vis" onClick={SpeechRecognition.startListening}>
//              <FaMicrophone className='microphone'/>
//         </div>

//         <div className="mainVolConatiner">
//             <div className="volContainer">
//               <input type="range" min="0" max="100" onChange={adjustVolume} className='vol-slider'/>
//               <IoVolumeMedium className='speaker'/>
//             </div>
//             <div className="volText">
//               <h3>Volume</h3>
//             </div>
//         </div>
//         <div>
//           <h2>{transcript}</h2>
//         </div>
//     </div>
//   )
// }

// export default Video;
// import React, { useEffect, useRef, useState } from 'react';
// import { FaMicrophone } from "react-icons/fa";
// import { IoVolumeMedium } from "react-icons/io5";
// import { IoVideocam } from "react-icons/io5";
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import { MdOutlineMicNone } from "react-icons/md";
// import MicSvg from '../svg/micSvg';
// import './Video.css'

// function Video() {
//   const audioRef = useRef(null);
//   const videoRef = useRef(null);
//   const [isListening, setIsListening] = useState(false);
//   const [speechText,setSpeechText]=useState("");
//   const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

//   useEffect(() => {
//     navigator.mediaDevices.getUserMedia({ video: true, audio: true })
//       .then(stream => {
//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//         }
//       })
//       .catch(err => console.log(err));
//   }, []);

//   if (!browserSupportsSpeechRecognition) {
//     return <span>Browser doesn't support speech recognition.</span>;
//   }

//   const adjustVolume = (event) => {
//     if (audioRef.current) {
//       audioRef.current.volume = event.target.value / 100;
//     }
//   }

//   const handleListening = () => {
//     if (isListening) {
//       SpeechRecognition.stopListening();
//       setSpeechText(transcript);
//     } else {
//       SpeechRecognition.startListening();
//     }
//     setIsListening(!isListening);
//   }

//   return (
//     <div id='videoComp'>
//         <div className="video">
//             <video ref={videoRef} autoPlay muted className='videoDisplay'/>
//         </div>
//         <div className="vidIcon hid">
//             <IoVideocam/>
//         </div>
//         <div className={`mic ${isListening ? 'listening' : ''}`} onClick={handleListening}>
//              <MicSvg className='microphone'/>
//         </div>

//         <div className="mainVolConatiner">
//             <div className="volContainer">
//               <input type="range" min="0" max="100" onChange={adjustVolume} className='vol-slider'/>
//               <IoVolumeMedium className='speaker'/>
//             </div>
//             <div className="volText">
//               <h3>Volume</h3>
//             </div>
//         </div>
//         <div>
//           <h2>{speechText}</h2>
//         </div>
//     </div>
//   )
// }

// export default Video;
import React, { useEffect, useRef, useState } from 'react';
import { FaMicrophone } from "react-icons/fa";
import { IoVolumeMedium } from "react-icons/io5";
import { IoVideocam } from "react-icons/io5";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import MicSvg from '../svg/micSvg';
import './Video.css'

function Video({clientMessage,setClientMessage}) {
  const audioRef = useRef(null);
  const videoRef = useRef(null);
  const [isListening, setIsListening] = useState(false);
  const [speechText,setSpeechText]=useState([]);
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch(err => console.log(err));
  }, []);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const adjustVolume = (event) => {
    if (audioRef.current) {
      audioRef.current.volume = event.target.value / 100;
    }
  }

  const handleListening = () => {
    if (isListening) {
      SpeechRecognition.stopListening();
      setClientMessage([...clientMessage,transcript]);
    } else {
      SpeechRecognition.startListening();
    }
    setIsListening(!isListening);
  }

  return (
    <div id='videoComp'>
        <div className="video">
            <video ref={videoRef} autoPlay muted className='videoDisplay'/>
        </div>
        <div className="vidIcon hid">
            <IoVideocam/>
        </div>
        <div className={`mic ${isListening ? 'listening' : ''}`} onClick={handleListening}>
             <MicSvg className='microphone'/>
        </div>

        <div className="mainVolConatiner">
            <div className="volContainer">
              <input type="range" min="0" max="100" onChange={adjustVolume} className='vol-slider'/>
              <IoVolumeMedium className='speaker'/>
            </div>
            <div className="volText">
              <h3>Volume</h3>
            </div>
        </div>
    </div>
  )
}

export default Video;




