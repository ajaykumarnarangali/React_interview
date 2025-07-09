import { useEffect, useState } from "react";

function MatchGame() {

    const initialEmojis = ['❤️', '🍀', '🌎', '🍎', '⚽️', '🚗', '⛵️', '💎'];
    const [cards, setCards] = useState([]);
    const [firstCard, setFirstCard] = useState(null);
    const [secondCard, setSecondCard] = useState(null);
    const [moves, setMoves] = useState(0);
    const [matches, setMatches] = useState(0);
    const [isDisable, setIsDisable] = useState(false);


    function initCards() {
        let card = initialEmojis.map((each, i) => {
            const pair = [{ id: i, value: each, revealed: false, matched: false },
            { id: i + 8, value: each, revealed: false, matched: false }]
            return pair
        })
        card = card.flat(2);

        for (let i = card.length - 1; i >= 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [card[i], card[j]] = [card[j], card[i]];
        }

        setCards(() => {
            return card;
        })
        setMatches(0);
    }

    function resetSelectedCards() {
        setFirstCard(null);
        setSecondCard(null);
        setIsDisable(false);
    }

    function handleMatch() {
        setIsDisable(true);
        setMoves(prev => prev + 1);
        if (firstCard.value == secondCard.value) {
            setCards((prev) => {
                return prev.map((each) => {
                    return (each.id == firstCard.id || each.id == secondCard.id) ? { ...each, matched: true } : each
                })
            });
            setMatches(prev => prev + 1);
            resetSelectedCards();
        } else {
            setTimeout(() => {
                setCards((prev) => {
                    return prev.map((each) => {
                        return (each.id == firstCard.id || each.id == secondCard.id) ? { ...each, revealed: false } : each
                    })
                })
                resetSelectedCards();
            }, 1000);
        }
    }

    useEffect(() => {
        initCards();
    }, []);

    useEffect(() => {
        if (!firstCard || !secondCard) {
            return;
        }
        handleMatch();
    }, [secondCard]);

    const selectCard = (card) => {
        if (isDisable) {
            return;
        }
        setCards((prev) => {
            return prev.map((each) => {
                return each.id == card.id ? { ...each, revealed: true } : each
            })
        })
        if (!firstCard) {
            setFirstCard(card)
        } else if (firstCard.id != card.id) {
            setSecondCard(card)
        }
    }

    return (
        <div className="w-full h-screen bg-green-200 flex items-center justify-center p-4">
            <div className="w-full max-w-lg h-[550px] flex flex-col items-center gap-4 bg-white p-8">
                <h1 className='font-bold text-lg text-center'>Match Pair Game</h1>
                <div className='w-full h-full grid grid-cols-4 grid-rows-4 gap-2'>
                    {
                        cards.map((card, i) => (
                            <div className={` ${(card.revealed || card.matched) ? 'bg-white' : 'bg-slate-400'}
                             rounded-md cursor-pointer flex items-center justify-center`} key={i}
                                onClick={() => { selectCard(card) }}
                                aria-disabled={isDisable}
                            >
                                {(card.revealed || card.matched) && card.value}
                            </div>
                        ))
                    }
                </div>
                <div className='flex flex-col gap-1'>
                    <span>Moves: {moves}</span>
                    <button className='p-1 bg-slate-300' onClick={initCards}>Reset</button>
                    <span className="text-green-700">{matches == 8 && 'You won'}</span>
                </div>
            </div>
        </div>
    )
}

export default MatchGame