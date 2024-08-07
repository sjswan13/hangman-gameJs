const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['application', 'programming', 'interface', 'wizard', 'special', 'reynauds', 'rhabdomylysis'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

//Show hidden Word
function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord
      .split('')
      .map(letter => `
        <span class="letter">
        ${correctLetters.includes(letter) ? letter : ''}
        </span>`)
        .join('')
    }`;

  const innerWord = wordEl.innerText.replace(/\n/g, '');

  if(innerWord === selectedWord) {
    finalMessage.innerText = 'Congratulations, you won!';
    popup.style.display = 'flex';
  }
}

//Update Wrong Letters
function updateWrongLettersEl() {
  //Display Wrong letters
  wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</Span>`)}
  `;

  //Display Parts
   figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;

    if (index < errors) {
      part.style.display = 'block';
    } else {
      part.style.display = 'none';
    }
  });

  //Check if Lost
  if(wrongLetters.length === figureParts.length) {
    finalMessage.innerText = 'Unfortunately you lost.';
    popup.style.display = 'flex';
  }
}

//show notification
function showNotification() {
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show')
}, 2000);
}

//Keydown letter press
window.addEventListener('keydown', e => {
  if(e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;

    if(selectedWord.includes(letter)) {
      if(!correctLetters.includes(letter)) {
        correctLetters.push(letter);

        displayWord();
      } else {
        showNotification();
      }
    } else {
      if(!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);

        updateWrongLettersEl();
      } else {
        showNotification();
      }
    }
  }
});

//Restart Game and Play Again
playAgainBtn.addEventListener('click', () => {
  //empty arrays
  correctLetters.splice(0);
  wrongLetters.splice(0);

  selectedWord = words[Math.floor(Math.random() * words.length)];
  displayWord();

  updateWrongLettersEl();

  popup.style.display = 'none';
})

displayWord();
updateWrongLettersEl();