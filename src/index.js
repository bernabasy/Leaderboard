import './style.css';
import { addScore } from './modules/Addinput.js';
import { fetchScores } from './modules/featch.js';

const form = document.querySelector('.form');
const refresh = document.querySelector('.refresh');

form.addEventListener('submit', addScore);
refresh.addEventListener('click', fetchScores);