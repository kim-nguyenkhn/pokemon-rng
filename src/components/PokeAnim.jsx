import React, { useEffect } from 'react';
import './styles.css';
import pokeballClosed from '../img/pokeball-closed-cropped.png';
import openedPokeball from '../img/pokeball-open-cropped.png';

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
            img.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png';
            flashOverlay.classList.add('flash');
            pulseComponent.style.display = 'none';
            img.style.height = '400px';
            img.style.width = 'auto';
        }, 2400);
    };

    return (
        <React.Fragment>
            <div className="overlay container">
                <div style={{ position: 'relative' }}>
                    <img
                        id="pokeball"
                        src={pokeballClosed}
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
