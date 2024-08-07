const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-again');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('figure-part');

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
  console.log('Update Wrong');
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
})

displayWord();
