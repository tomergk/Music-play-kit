import React, { useState, useRef, useEffect } from 'react';
import { BiSkipPreviousCircle, BiSkipNextCircle, BiPlayCircle, BiPauseCircle } from 'react-icons/bi';
import './AppPlayer.css';
import { audios } from './audioData'; // audios array includes the songs contents
import { HiVolumeUp } from 'react-icons/hi';

const AppPlayer = () => {
    const [songs, setSongs] = useState(audios);                 // songs array contains all the songs provided from AudioData.jsx 
    const [currentIndex, setCurrentIndex] = useState(0);        // index value is the songs number from songs array
    const [currentSong, setCurrentSong] = useState(songs[0]);   // currentSong contains the contents of songs[index]
    const [isPlaying, setIsPlaying] = useState(false);          // isPlaying changes value according to currentSong play or pause
    const [volume, setVolume] = useState(1);                    // volume scale effecting currentSong
    const audioRef = useRef(null);                              // audioRef starts with null
    const [currentTime, setCurrentTime] = useState(0);          // currentTime follows each song that playing by seconds

    const nextSong = () => {
        if (isPlaying) {
            togglePlay();
        }

        if (currentIndex === songs.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSong = () => {
        if (isPlaying) {
            togglePlay();
        }

        if (currentIndex === 0) {
            setCurrentIndex(songs.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const togglePlay = () => {
        if (audioRef.current.paused) {
            audioRef.current.play()
                .then(() => {
                    setIsPlaying(true);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handleVolumeChange = (event) => {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
    };

    const updateTime = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    useEffect(() => {
        setCurrentSong(songs[currentIndex]);
    }, [currentIndex, songs]);

    useEffect(() => {
        audioRef.current.volume = volume;
    }, [volume]);

    useEffect(() => {
        audioRef.current.src = currentSong.music;
        audioRef.current.load(); // Loads the new audio source
        audioRef.current.play()  // Plays the audio after the source has loaded
            .then(() => {
                setIsPlaying(true); // Updates play state when playback starts
            })
            .catch(error => {
                console.log(error);
            });
        audioRef.current.addEventListener('timeupdate', updateTime); // Adds an event listener for time updates

        return () => { // Cleanup the event listeners when changing songs or unmounting
            audioRef.current.removeEventListener('timeupdate', updateTime);
        };
    }, [currentSong]);

    return (
        <div className='container'>
            <div>
                {currentSong ? (
                    <div className='names'>
                        <h2 className='song__name'>{currentSong.name}</h2>
                        <h5 className='artist__name'>{currentSong.artist}</h5>
                    </div>
                ) : (
                    ''
                )}
            </div>

            <div className='app__player__container'
                style={{
                    backgroundImage: `url(${currentSong.background})`
                }}>
                <div className='player__container'>
                    <audio
                        ref={audioRef}
                        src={currentSong.music}
                        onEnded={nextSong}
                    ></audio>
                    <div className='control__icons'>

                        <div className='volume-control'>
                            <HiVolumeUp className='volume' />
                            <input
                                type='range'
                                min='0'
                                max='1'
                                step='0.01'
                                value={volume}
                                onChange={handleVolumeChange}
                            />
                        </div>

                        <BiSkipPreviousCircle className='side_icons' onClick={prevSong} />
                        {isPlaying ?
                            (
                                <BiPauseCircle className='general_icons' onClick={togglePlay} />
                            )
                            :
                            (
                                <BiPlayCircle className='general_icons' onClick={togglePlay} />
                            )
                        }
                        <BiSkipNextCircle className='side_icons' onClick={nextSong} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppPlayer;
