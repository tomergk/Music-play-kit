import React, { useState } from 'react'
import './AppPlayer.css'
import { audios } from './audioData'
import Player from './Player'
import speaker from "../../assets/images/Musical-Instruments/speaker.png";


const AppPlayer = () => {

    const [songs, setSongs] = useState(audios);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const getSongData = (song, index) => {
        setCurrentIndex(index);
        setCurrentSong(song);
    }

    const nextSong = () => {
        if (currentIndex === audios.length - 1) {
            setCurrentIndex(0);
            setCurrentSong(audios[0]);
        }
        else {
            setCurrentIndex(currentIndex + 1);
            setCurrentSong(audios[currentIndex + 1]);
        }
    }

    const prevSong = () => {
        if (currentIndex === 0) {
            setCurrentIndex(0);
            setCurrentSong(audios[0]);
        }
        else {
            setCurrentIndex(currentIndex - 1);
            setCurrentSong(audios[currentIndex - 1]);
        }
    }

    return (
        <div id='music' className='container'>

            <div
                className='app__player__container'
                style={{
                    backgroundImage: `url(${currentSong.background})`,
                    backgroundSize: '100% 40%',
                }}
            >

                <Player
                    currentSong={currentSong}
                    currentIndex={currentIndex}
                    nextSong={nextSong}
                    prevSong={prevSong}

                />
            </div>

            <div className='speakers'>
                <img class="instrument speaker-img1" src={speaker} alt="Speaker" />
                <img class="instrument speaker-img2" src={speaker} alt="Speaker" />
            </div>

        </div>
    );
}

export default AppPlayer
