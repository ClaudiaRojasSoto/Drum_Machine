export const updateClipDescription = (description) => ({
  type: 'UPDATE_CLIP_DESCRIPTION',
  description,
});

export const playSound = (clipKey) => (dispatch, getState) => {
  const clip = document.getElementById(clipKey);
  clip.play().catch(() => { /* console.log eliminado */ });
  const clipDescription = getState().clips.find((c) => c.keyTrigger === clipKey).description;
  if (clipDescription.length <= 100) {
    dispatch(updateClipDescription(clipDescription));
  }
};
