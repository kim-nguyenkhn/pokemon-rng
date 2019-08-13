import React, { useEffect } from 'react';
import './styles.css';

const unopenedPokeball = 'https://i.imgur.com/5oiq2uX.png';
const openedPokeball = 'https://i.imgur.com/ilZCT7n.png';

export function PokeAnim() {
    const handleClick = e => {
        const img = e.target;
        const flashOverlay = document.getElementById('flash');

        img.classList.remove('poketwitch');
        img.classList.add('pokeshake');
        setTimeout(() => {
            img.classList = '';
            img.src = openedPokeball;
            flashOverlay.classList.add('flash');
        }, 2400);
    };

    return (
        <React.Fragment>
            <div className="overlay container">
                <div style={{position: 'relative'}}>
                    <img
                        id="pokeball"
                        src={unopenedPokeball}
                        className="poketwitch"
                        onClick={handleClick}
                    />
                    <div class="pulse-div pulse poketwitch" />
                </div>
            </div>
            <div className="overlay" id="flash" />
        </React.Fragment>
    );
}
