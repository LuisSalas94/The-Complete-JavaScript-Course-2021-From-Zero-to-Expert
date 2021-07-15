'use strict';

//04 Randon number
let randomNumber = Math.trunc(Math.random() * 20) + 1;

/* //show secret number
document.querySelector('.number').textContent = randomNumber; */

//06 Score number
let score = 20;

//highScore
let highscore = 0;

//01 Check BTN
document.querySelector('.check').addEventListener('click', () => {
  //02
  const guess = Number(document.querySelector('.guess').value);
  //check if there is a value
  //03
  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🤬 No number';
  } //05 check if guess number is correct || too high || too low
  //when player wins
  else if (guess === randomNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!!!';

    document.querySelector('.number').textContent = randomNumber;

    //select body element to change background color
    document.querySelector('body').style.backgroundColor = '#60b347';
    //increase width of the winner number box
    document.querySelector('.number').style.width = '30rem';

    //high score implementation
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when number is too high
  } else if (guess > randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🤬 Too high!!!';
      //decrease score
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '☠ You lost the game!!!';
      document.querySelector('.score').textContent = 0;
    }
    //when number is too low
  } else if (guess < randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🤬 Too low!!!';
      //decrease score
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '☠ You lost the game!!!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Again BTN
document.querySelector('.again').addEventListener('click', () => {
  //restore initial values of the score and secretnumber variables
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;

  //Restore the initial conditions of the message, number, score and guess input fields
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  //Restore the original background color (#222) and width (15rem)
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
