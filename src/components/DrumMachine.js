import React from 'react';
import PropTypes from 'prop-types';
import DrumPad from './DrumPad';
import Display from './Display'; // Import the Display component

function DrumMachine({ clips, handlePlaySound, displayText }) {
  return (
    <div id="drum-machine">
      <Display displayText={displayText} />
      {/* Use the Display component here */}
      <div className="drum-pads">
        {clips.map((clip) => (
          <DrumPad
            key={clip.id}
            clip={clip}
            handlePlaySound={() => handlePlaySound(clip.keyTrigger)}
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
