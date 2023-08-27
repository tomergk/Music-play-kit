import React, { useState, useRef, useEffect } from 'react'
import { BiSkipPreviousCircle, BiSkipNextCircle, BiPlayCircle, BiPauseCircle } from 'react-icons/bi'
import sound_img from '../../assets/images/sound.png';
import './Player.css'

const Player = ({ currentSong, currentIndex, nextSong, prevSong, background }) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    }

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        }
        else {
            audioRef.current.pause();
        }
    }, [isPlaying, currentIndex])

    return (
        <div className='player__container' style={{ backgroundImage: `url(${background})` }}>
            <audio ref={audioRef} src={currentSong.music}></audio>

            <div className='sound__img'>
                <img src={sound_img} alt="" />
            </div>

            <div>


                {currentSong ?
                    (
                        <div>
                            <div className='song__name__container'>
                                <h2 className='song__name'>{currentSong.name}</h2>
                            </div>
                            <div className='artist__name__container'>
                                <h5 className='artist__name'>{currentSong.artist}</h5>
                            </div>
                        </div>
                    )
                    :
                    (
                        ""
                    )}


                <div className='control__icons'>
                    <BiSkipPreviousCircle
                        className='side_icons'
                        onClick={prevSong} />
                    {isPlaying ? (
                        <BiPauseCircle
                            className='general_icons'
                            onClick={togglePlay} />

                    ) : (
                        <BiPlayCircle
                            className='general_icons'
                            onClick={togglePlay} />

                    )}
                    <BiSkipNextCircle
                        className='side_icons'
                        onClick={nextSong} />

                </div>

            </div>
        </div>


    )
}

export default Player
