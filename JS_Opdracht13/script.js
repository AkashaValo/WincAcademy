const checkNumber = function (numberToGuess,promptNumber) {
  if (promptNumber == numberToGuess) {
    return true;
  }
  else {
    return false;
  }
}

const guessNumber = function (numberToGuess) {
  let guessed = false;
  let promptNumber = 0;
  let noOfGuesses = 5;
  promptNumber = prompt('Give a number between 0 and 25?');
  for (let i = 1; i < noOfGuesses; i++) {
      promptNumber = prompt('Too bad. Only '+ (noOfGuesses - i) +' guess(es) left');   
      guessed = checkNumber(numberToGuess,promptNumber);
      if (guessed == true) {break};  
    }
  return guessed;
}

const startNewGame = function() {
  const numberToGuess = Math.floor(Math.random() * 26);
  const name = prompt('Hello, What is your name?');
  alert('Hello ' + name + '.');
  alert(numberToGuess);
  let guessed = guessNumber(numberToGuess);
  if (guessed == true) {
    alert('Well done. You have guessed the correct number');
  }
  else {
    alert('You ran out of guesses, the number was '+ numberToGuess +'. Better luck next time');
  }
  alert('Goodbye ' + name + '. See you at the next game');
}