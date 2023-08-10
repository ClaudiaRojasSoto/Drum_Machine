const initialState = {
  clipDescription: "",
  clips: [
    { id: 1, keyTrigger: 'Q', description: 'Heater 1', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
    { id: 2, keyTrigger: 'W', description: 'Heater 2', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
    { id: 3, keyTrigger: 'E', description: 'Heater 3', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
    { id: 4, keyTrigger: 'A', description: 'Heater 4', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
    { id: 5, keyTrigger: 'S', description: 'Clap', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
    { id: 6, keyTrigger: 'D', description: 'Open-HH', url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
    { id: 7, keyTrigger: 'Z', description: 'Kick-n-Hat', url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
    { id: 8, keyTrigger: 'X', description: 'Kick', url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
    { id: 9, keyTrigger: 'C', description: 'Closed-HH', url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' },
  ]
};
  
  const drumMachineReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_CLIP_DESCRIPTION':
        return {
          ...state,
          clipDescription: action.description
        };
      default:
        return state;
    }
  };
  
  export default drumMachineReducer;
  