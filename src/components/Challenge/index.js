import React, { useContext } from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';
import { ChallengesContext } from '../../ChallengesContext';

const chunk = (arr, size) => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
};

const Challenge = () => {
  const { challenges, toggleDayForChallenge } = useContext(ChallengesContext);

  const { challengeId } = useParams();

  if (!challenges || !challenges[challengeId]) {
    return <Redirect to="/" />;
  }

  const challenge = challenges[challengeId];
  const { days } = challenge;

  return (
    <main>
      <section>
        <header>
          <h1>Challenge</h1>
          <p>{challenge.name}</p>
          <p>
            <Link to="/">Back to challenges list</Link>
          </p>
        </header>
        <table>
          <tbody>
            {chunk(Object.keys(days), 5).map((row) => (
              <tr key={row}>
                {row.map((day) => (
                  <td
                    key={day}
                    onClick={() => {
                      toggleDayForChallenge(challengeId, day);
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    {days[day]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Challenge;
