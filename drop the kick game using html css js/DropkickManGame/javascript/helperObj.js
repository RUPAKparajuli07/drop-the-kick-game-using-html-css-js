
  resumeInput() {
    document.addEventListener('keydown', handleAttackInputKeyDown);
    document.addEventListener('keydown', handleMoveInputKeyDown);
  },
  stopJumpInputListening() {
    document.removeEventListener('keydown', handleJumpInputKeyDown);
  },
  resumeJumpInputListening() {
    document.addEventListener('keydown', handleJumpInputKeyDown);
  },
  generateRandomNumberInArr(min, max) {
    return Math.random() * (max - min) + min
  }
};
