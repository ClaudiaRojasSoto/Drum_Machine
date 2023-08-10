import React from 'react';
import Display from './Display';
import DrumPad from './DrumPad';

function DrumMachine({ clips, handlePlaySound, displayText }) {
    return (
      <div id="drum-machine">
        <Display displayText={displayText} />
        <div className="drum-pads">
          {clips.map(clip => (
            <DrumPad
              key={clip.id}
              clip={clip} // Aquí estamos pasando el clip completo
              handlePlaySound={() => handlePlaySound(clip.keyTrigger)} // Asegúrate de pasar el keyTrigger aquí
            />
          ))}
        </div>
      </div>
    );
  }  

// Puedes definir PropTypes aquí si lo deseas

export default DrumMachine;
