import React, { useReducer, useEffect } from 'react';
import challengesReducer from './reducers/challengesReducer';
import { createChallenge, toggleDay } from './actions/challengeActions';

const ChallengesContext = React.createContext();

const ChallengesProvider = ({ children }) => {
  const [challenges, dispatch] = useReducer(
    challengesReducer,
    JSON.parse(localStorage.getItem('challenges')) || {}
  );

  useEffect(() => {
    localStorage.setItem('challenges', JSON.stringify(challenges));
  }, [challenges]);

  const createNewChallenge = (name) => {
    dispatch(createChallenge(name));
  };

  const toggleDayForChallenge = (challengeId, day) => {
    dispatch(toggleDay(challengeId, day));
  };

  return (
    <ChallengesContext.Provider
      value={{ createNewChallenge, toggleDayForChallenge, challenges }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};

export { ChallengesContext, ChallengesProvider };
