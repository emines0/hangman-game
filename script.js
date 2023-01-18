const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-again');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts  =  document.querySelectorAll('.figure-part');

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)]

const correctLetters = ['w','i','z','a','r', 'd'];
const wrongLetters = [];

// Show hidden word
function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord
      .split('') // split by letter, turn string into an array | map - through entire array of letters and return an element span > check if the letter is in the array of correctLetters. If the letter is in the correctLetters array show the letter else show an empty string
      .map(letter => ` 
        <span class="letter">
          ${correctLetters.includes(letter) ? letter : ''} 
        </span>
      `) 
      .join('')
    }
  `;

  const innerWord = wordEl.innerText.replace(/\n/g, ''); //regex for replace new line character with empty string globally
    if(innerWord === selectedWord) {
      finalMessage.innerText =  'Congratulations! You won! 😃';
      popup.style.display = 'flex';
    }
}

displayWord(); 