const CREATE_CHALLENGE = 'CREATE_CHALLENGE';
const TOGGLE_DAY = 'TOGGLE_DAY';

const createChallenge = (name) => ({
  type: CREATE_CHALLENGE,
  payload: { name },
});

const toggleDay = (challengeId, day) => ({
  type: TOGGLE_DAY,
  payload: { challengeId, day },
});

export { createChallenge, toggleDay, CREATE_CHALLENGE, TOGGLE_DAY };
