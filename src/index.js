import './style.css';
import addScore from './modules/AddInput.js';
import fetchScores from './modules/featchInput.js';

const form = document.querySelector('.form');
const refresh = document.querySelector('.refresh');

form.addEventListener('submit', addScore);
refresh.addEventListener('click', fetchScores);