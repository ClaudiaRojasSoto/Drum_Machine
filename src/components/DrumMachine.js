import React from 'react';
import PropTypes from 'prop-types';
import DrumPad from './DrumPad';

function DrumMachine({ clips, handlePlaySound, displayText }) {
  return (
    <div id="drum-machine">
      <div className="display">{displayText}</div>
      <div className="drum-pads">
        {clips.map((clip) => (
          <DrumPad
            key={clip.id}
            clip={clip}
            handlePlaySound={
            () => handlePlaySound(clip.keyTrigger)
}
          />
        ))}
      </div>
    </div>
  );
}

DrumMachine.propTypes = {
  clips: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      keyTrigger: PropTypes.string,
      url: PropTypes.string,
    }),
  ).isRequired,
  handlePlaySound: PropTypes.func.isRequired,
  displayText: PropTypes.string.isRequired,
};

export default DrumMachine;
