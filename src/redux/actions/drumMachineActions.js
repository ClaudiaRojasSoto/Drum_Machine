export const updateClipDescription = (description) => ({
    type: 'UPDATE_CLIP_DESCRIPTION',
    description
  });
  
  export const playSound = (clipKey) => (dispatch, getState) => {
    const clip = document.getElementById(clipKey);
    clip.play().catch(error => console.log('Play was interrupted:', error));
    // Asumiendo que tienes una lista de clips en tu estado para buscar la descripción
    const clipDescription = getState().clips.find(c => c.keyTrigger === clipKey).description; // Cambiado a clipKey
    dispatch(updateClipDescription(clipDescription));
  };
  
  
  