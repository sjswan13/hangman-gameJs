Hangman Game

This is a simple Hangman game built using HTML, CSS, and JavaScript. The game randomly selects a word from an API and challenges the player to guess the word by entering letters. The player has a limited number of incorrect guesses before the game ends.

Deployed with Nelify: https://simplehangmanwordgame.netlify.app

Table of Contents:

-Features
-Getting Started
-How to Play
-File Structure
-Technologies Used
-Acknowledgments

Features:

-Fetches a random word from an API to use as the target word.
-Displays the correctly guessed letters in their respective positions.
-Keeps track of wrong guesses and visually updates the hangman figure.
-Notifies the player if they enter a letter they have already guessed.
-Displays a winning message if the word is correctly guessed.
-Displays a losing message if the player runs out of guesses.
-Option to restart the game and play again.

Getting Started:

Prerequisites:
To run this game, you only need a web browser.

Installation
Clone the repository:

git clone https://github.com/your-username/hangman-game.git

Navigate to the project directory:

cd hangman-game
Open the index.html file in your web browser:

How to Play:

-When the game starts, a random word is selected, and empty spaces corresponding to the word's length are displayed.
-Enter letters using your keyboard.
-If the letter is correct, it will appear in the correct position(s) in the word.
-If the letter is incorrect, it will be added to the list of wrong guesses, and a part of the hangman figure will be drawn.
-The game continues until you either guess the word correctly or the entire hangman figure is drawn.
-If you win, a congratulations message will appear, and you can choose to play again.
-If you lose, a message will inform you, and you can choose to try again.

Controls:

Keyboard Letters: Press any letter key to guess a letter.
Play Again Button: Click the "Play Again" button to restart the game.

File Structure:

hangman-game/
│
├── index.html       # Main HTML file that structures the game interface
├── style.css        # CSS file for styling the game
└── script.js        # JavaScript file containing the game logic

Technologies Used:

-HTML5: Markup language used to create the game structure.
-CSS3: Styling language used to design the game's appearance.
-JavaScript (ES6+): Programming language used for game logic and interactivity.

Acknowledgments:

-The random word is fetched using the Random Word API.
-This project was inspired by the classic Hangman game.
-Udemy courses
