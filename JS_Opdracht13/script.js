const checkNumber = function (numberToGuess,promptNumber) {
  if (promptNumber == numberToGuess) {
    return true;
  }
  else {
    return false;
  }
}

const guessNumber = function (numberToGuess,min,max) {
  let guessed = false;
  let promptNumber = 0;
  let noOfGuesses = 5;
  promptNumber = prompt('Give a number between '+ min +' and '+ max +'?');
  for (let i = 1; i < noOfGuesses; i++) {
      guessed = checkNumber(numberToGuess,promptNumber);
      if (guessed == true) {
        break;
      }
      else {  
        promptNumber = prompt('Too bad. Only '+ (noOfGuesses - i) +' guess(es) left');   
      };
    }
  return guessed;
}

const getRange = function () {
  let min;
  let max;
  do {
    min = prompt('Please give the lowest number of the range?',1);
    max = prompt('Please give the highest number of the range?',25);
    console.log('mi value',min);
    if (min == null) {min = 1};
    if (max == null) {max = 25};
    if (min >= max) {
      alert('Maximum number must be larger than minimum number. Please re-enter.');
    }
  }
  while (min >= max);
  min = parseInt(min);
  max = parseInt(max);
  return [min,max];
}

const randomIntFromInterval = (minNumber, maxNumber) => Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;


const startNewGame = function() {
  let name = prompt('Hello, What is your name?');
  if (name == null) {alert('Too bad you dont wanna play, maybe next time'); return;};
  if (name == '') {name = 'Stranger'};
  alert('Hello ' + name + '.');
  const minMax = getRange();
  const min = minMax[0];
  const max = minMax[1];
  const numberToGuess = randomIntFromInterval(min,max);
  console.log(numberToGuess);
  let guessed = guessNumber(numberToGuess,min,max);
  if (guessed == true) {
    alert('Well done. You have guessed the correct number');
  }
  else {
    alert('You ran out of guesses, the number was '+ numberToGuess +'. Better luck next time');
  }
  alert('Goodbye ' + name + '. See you at the next game');
}