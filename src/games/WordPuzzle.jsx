import React, { useState } from 'react';

const WordPuzzle = () => {
    const words = ['react', 'javascript', 'component', 'puzzle', 'game'];
    const [selectedWord, setSelectedWord] = useState('');
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');

    const pickRandomWord = () => {
        const randomIndex = Math.floor(Math.random() * words.length);
        setSelectedWord(words[randomIndex]);
    };

    const handleGuess = () => {
        if (guess === selectedWord) {
            setMessage('Congratulations! You guessed the word!');
        } else {
            setMessage('Try Again!');
        }
        setGuess('');
    };

    return (
        <div>
            <h1>Word Puzzle Game</h1>
            <button onClick={pickRandomWord}>Pick a Word</button>
            <p>{selectedWord ? `Guess the word: ${selectedWord.replace(/./g, '*')}` : ''}</p>
            <input 
                type="text" 
                value={guess} 
                onChange={(e) => setGuess(e.target.value)} 
                placeholder="Enter your guess"
            />
            <button onClick={handleGuess}>Submit Guess</button>
            <p>{message}</p>
        </div>
    );
};

export default WordPuzzle;
