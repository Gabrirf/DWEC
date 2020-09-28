const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['hello', 'bye', 'rodolfo', 'alberto'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

// Event to get key pressed
window.addEventListener('keydown', event => {
    const keyCode = event.key.charCodeAt(0);
    // a -> z
    if (keyCode >= 97 && keyCode <=122) {
        const letter = event.key;
        inspectLetter(letter);
    }
})

function app () {
    wordEl.innerHTML = `
        ${selectedWord
          .split("")
          .map(
            (letter) => `
                <span class="letter">
                    ${correctLetters.includes(letter) ? letter : ""}
                 </span>
            `
          )
          .join("")}
    `;

    wrongLettersEl.innerHTML = `
        ${wrongLetters
          .map(
            (letter) => `
                <span class="wrong-letter">
                    ${letter}
                </span>
            `
          )
          }
    `;

    displayFigureParts();

    isVictory();
    isDefeat();
}

function isVictory () {
    const currentStateWord = wordEl.innerText.replace(/\n/g, '');

    if (currentStateWord === selectedWord) { 
        alert('Victory!'); 
        resetGame();
    }
}

function isDefeat () {
    if (wrongLetters.length >= 6) { 
        alert('Defeat!'); 
        resetGame();
    }
}

function resetGame () {
    while (correctLetters.length > 0) correctLetters.pop(); 
    while (wrongLetters.length > 0) wrongLetters.pop(); 
    selectedWord = words[Math.floor(Math.random() * words.length)];
    app();
}

function inspectLetter (letter) {
    if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
            correctLetters.push(letter);
            app();
        } else {
            alert('Word already used!');
        }
    } else {
        if (!wrongLetters.includes(letter)) {
            wrongLetters.push(letter);
            app();
        } else {
            alert('Word already used!');
        }
    }
}

function displayFigureParts () {
    figureParts.forEach((part, index) => {
        const errors = wrongLetters.length;
        if (index < errors) {
            part.style.display = 'block'
        } else {
            part.style.display = 'none'
        }
    })
}

app();