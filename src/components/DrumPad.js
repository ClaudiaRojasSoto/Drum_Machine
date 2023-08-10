import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const DrumPad = ({ clip, handlePlaySound }) => {
  if (!clip) {
    return null;
  }

  const handleClick = (event) => {
    event.preventDefault();
    handlePlaySound();
  };

  return (
    <div
      className="drum-pad"
      id={clip.id}
      onClick={handleClick}
      onKeyPress={handleClick}
      role="button"
      tabIndex={0}
    >
      {clip.keyTrigger}
      <audio className="clip" id={clip.keyTrigger} src={clip.url}>
        <track kind="captions" />
      </audio>
    </div>
  );
};

DrumPad.propTypes = {
  clip: PropTypes.shape({
    id: PropTypes.string,
    keyTrigger: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  handlePlaySound: PropTypes.func.isRequired,
};

export default DrumPad;
