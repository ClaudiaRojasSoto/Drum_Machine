import React from 'react';
import PropTypes from 'prop-types';

function Display({ displayText }) {
  return (
    <div id="display">
      {displayText}
    </div>
  );
}

Display.propTypes = {
  displayText: PropTypes.string.isRequired,
};

export default Display;
