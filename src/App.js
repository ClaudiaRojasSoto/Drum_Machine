import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useCallback } from 'react';
import DrumMachine from './components/DrumMachine';
import { playSound } from './redux/actions/drumMachineActions';

function App() {
  const dispatch = useDispatch();
  const displayText = useSelector(state => state.clipDescription);
  const clips = useSelector(state => state.clips);

  const handlePlaySound = useCallback((clipKey) => {
    dispatch(playSound(clipKey));
  }, [dispatch]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      const key = String.fromCharCode(e.keyCode);
      const clip = clips.find(c => c.keyTrigger === key);
      if (clip) {
        handlePlaySound(clip.keyTrigger);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [clips, handlePlaySound]);

  return (
    <div className="App">
      <DrumMachine
        clips={clips}
        handlePlaySound={handlePlaySound}
        displayText={displayText}
      />
    </div>
  );
}

export default App;
