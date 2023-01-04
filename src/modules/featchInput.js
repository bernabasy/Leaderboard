import { display } from './UI.js';
export const fetchScores = async () => {
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/gameId1011/scores/';
    const response = await fetch(url);
    const json = await response.json();
    const scores = json.result;
    display(scores);
  };