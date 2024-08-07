const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

let selectedWord;
const correctLetters = [];
const wrongLetters = [];

// Fetch a random word from the API
async function getRandomWord() {
  try {
    const response = await fetch('https://random-word-api.herokuapp.com/word?number=1');
    const data = await response.json();
    selectedWord = data[0];
    console.log('Fetched word:', selectedWord); 
    displayWord();
  } catch (error) {
    console.error('Error fetching the word:', error);
    finalMessage.innerText = 'Failed to load word. Please try again.';
    popup.style.display = 'flex';
  }
}

// Show hidden word
function displayWord() {
  if (!selectedWord) {
    console.error('displayWord called without a selected word');
    return;
  }

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

  if (innerWord === selectedWord) {
    finalMessage.innerText = 'Congratulations, you won!';
    popup.style.display = 'flex';
  }
}

// Update wrong letters
function updateWrongLettersEl() {
  // Display wrong letters
  wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`).join('')}
  `;

  // Display parts
  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;

    if (index < errors) {
      part.style.display = 'block';
    } else {
      part.style.display = 'none';
    }
  });

  // Check if lost
  if (wrongLetters.length === figureParts.length) {
    finalMessage.innerText = 'Unfortunately you lost.';
    popup.style.display = 'flex';
  }
}

// Show notification
function showNotification() {
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
  }, 2000);
}

// Keydown letter press
window.addEventListener('keydown', e => {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key.toLowerCase();
    
    if (!selectedWord) {
      console.error('Keydown event triggered without a selected word');
      return;
    }

    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);
        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);
        updateWrongLettersEl();
      } else {
        showNotification();
      }
    }
  }
});

// Restart game and play again
playAgainBtn.addEventListener('click', () => {
  // Empty arrays
  correctLetters.splice(0);
  wrongLetters.splice(0);

  // Fetch a new word
  getRandomWord();

  updateWrongLettersEl();
  popup.style.display = 'none';
});

// Initial call to get a word and display
getRandomWord();
