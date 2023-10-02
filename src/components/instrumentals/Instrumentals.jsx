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
                <button id='Q' className="drum q">Q</button>
                <button id='W' className="drum w">W</button>
                <button id='E' className="drum e">E</button>
                <button id='R' className="drum r">R</button>
                <button id='T' className="drum t">T</button>
                <button id='Y' className="drum y">Y</button>

                <button id='A' className="drum a">A</button>
                <button id='S' className="drum s">S</button>
                <button id='D' className="drum d">D</button>
                <button id='F' className="drum f">F</button>
                <button id='G' className="drum g">G</button>
                <button id='H' className="drum h">H</button>

                <button id='Z' className="drum z">Z</button>
                <button id='X' className="drum x">X</button>
                <button id='C' className="drum c">C</button>
                <button id='V' className="drum v">V</button>
                <button id='B' className="drum b">B</button>
                <button id='N' className="drum n">N</button>

            </div>
        </div>
    );
}

export default Instrumentals;
