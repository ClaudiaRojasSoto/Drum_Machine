import React from 'react';
import { connect } from 'react-redux';
import { playSound } from '../redux/actions/drumMachineActions';
import '../App.css'

const DrumPad = ({ clip, handlePlaySound }) => {
    if (!clip) {
      return null;
    }
  
    return (
      <div className="drum-pad" id={clip.id} onClick={handlePlaySound}>
        {clip.keyTrigger}
        <audio className="clip" id={clip.keyTrigger} src={clip.url}></audio>
      </div>
    );
  };
    

export default connect(null, { playSound })(DrumPad);
