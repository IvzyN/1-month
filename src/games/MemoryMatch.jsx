import React, { useState, useEffect } from 'react';

const MemoryMatch = () => {
    const [cards, setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [matched, setMatched] = useState([]);
    const cardImages = ['🍎', '🍌', '🍇', '🍉', '🍊', '🍓', '🍍', '🥭']; // Example card images

    useEffect(() => {
        // Initialize cards array with duplicate images
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((image) => ({ image, id: Math.random() }));
        setCards(shuffledCards);
    }, []);

    const flipCard = (id) => {
        if (flipped.length < 2 && !flipped.includes(id) && !matched.includes(id)) {
            setFlipped([...flipped, id]);
            setTimeout(checkMatch, 1000);
        }
    };

    const checkMatch = () => {
        const [firstId, secondId] = flipped;
        const firstCard = cards.find(card => card.id === firstId);
        const secondCard = cards.find(card => card.id === secondId);

        if (firstCard.image === secondCard.image) {
            setMatched([...matched, firstId, secondId]);
        }
        setFlipped([]);
    };

    return (
        <div className="memory-match">
            {cards.map(card => (
                <div key={card.id} className={`card ${flipped.includes(card.id) || matched.includes(card.id) ? 'flipped' : ''}`} onClick={() => flipCard(card.id)}>
                    {flipped.includes(card.id) || matched.includes(card.id) ? card.image : '?' }
                </div>
            ))}
            {matched.length === cards.length && <h1>You Win!</h1>}
        </div>
    );
};

export default MemoryMatch;