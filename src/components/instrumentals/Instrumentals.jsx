import React, { useEffect } from 'react';
import './Instrumentals.css';
import { voice, buttonAnimation } from './script';

const Instrumentals = () => {
    useEffect(() => {
        const drumButtons = document.querySelectorAll(".drum");

        function handleButtonClick() {
            if (/^[a-zA-Z]$/.test(this.innerHTML)) {
                const letter = this.innerHTML.toLowerCase();
                voice(letter);
                buttonAnimation(letter);
            }
        }

        drumButtons.forEach(button => {
            button.addEventListener("click", handleButtonClick);
        });

        return () => {
            drumButtons.forEach(button => {
                button.removeEventListener("click", handleButtonClick);
            });
        };
    }, []);

    return (
        <div className="container instrumentals_container">
            <div className="set">
                <button id='W' className="drum w">W</button>
                <button id='A' className="drum a">A</button>
                <button id='S' className="drum s">S</button>
                <button id='D' className="drum d">D</button>
                <button id='J' className="drum j">J</button>
                <button id='K' className="drum k">K</button>
                <button id='L' className="drum l">L</button>
            </div>
        </div>
    );
}

export default Instrumentals;
