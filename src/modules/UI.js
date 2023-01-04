export const display = (data) => {
    const Wrap = document.querySelector('.score-wrap');
  
    Wrap.innerHTML = '';
  
    data.forEach((scoreList) => {
      const { user, score } = scoreList;
  
      const tr = document.createElement('tr');
      Wrap.appendChild(tr);
  
      const td = document.createElement('td');
      td.innerHTML = `${user}`;
      td.classList.add('.td');
      tr.appendChild(td);
  
      const userScore = document.createElement('td');
      userScore.innerHTML = `${score}`;
      userScore.classList.add('.td');
      tr.appendChild(userScore);
    });
  }
  