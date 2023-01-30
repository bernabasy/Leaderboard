import fetchScores from './featchInput.js';

const addScore = async (e) => {
  e.preventDefault();

  const user = document.querySelector('#gamerName').value;
  const score = document.querySelector('#Score').value;

  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/gameId1011/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
  });

  e.target.reset();

  fetchScores();
};
export default addScore;