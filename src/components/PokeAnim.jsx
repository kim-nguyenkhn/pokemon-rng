import React, { useEffect } from 'react';
import './styles.css';

const unopenedPokeball = 'https://i.imgur.com/5oiq2uX.png';
const openedPokeball = 'https://i.imgur.com/ilZCT7n.png';

export function PokeAnim() {
    const handleClick = e => {
        const img = e.target;
        const flashOverlay = document.getElementById('flash');
        const pulseComponent = document.getElementById('pulse');

        img.classList.remove('poketwitch');
        img.classList.add('pokeshake');
        pulseComponent.style.animation = 'pulse 0.8s infinite, shake 0.8s infinite';
        setTimeout(() => {
            img.classList = '';
            img.src = openedPokeball;
            flashOverlay.classList.add('flash');
            pulseComponent.style.display = 'none';
        }, 2400);
    };

    return (
        <React.Fragment>
            <div className="overlay container">
                <div style={{ position: 'relative' }}>
                    <img
                        id="pokeball"
                        src={unopenedPokeball}
                        className="poketwitch"
                        onClick={handleClick}
                    />
                    <div class="pulse-div pulse" id="pulse" />
                </div>
            </div>
            <div className="overlay" id="flash" />
        </React.Fragment>
    );
}
