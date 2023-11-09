"use client"
import React, { useCallback, useEffect, useState } from 'react'
import styles from './audio.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePause, faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const Audio = () => {
  const [play, setPlay] = useState(false);

  const playAudio = useCallback(() => {
    const song = document.querySelector('#audio');

    if(play) {
      song.volume = .6;
      song.play();
    } else {
      song.pause();
    }
  }, [play]);

  useEffect(() => {
    playAudio();
  }, [playAudio])

  return (
    <div className={styles.container}>
      <audio loop id='audio'>
        <source src={'/music/sound.mp3'} type='audio/mp3' />
      </audio>

      <motion.div
        animate={{rotate:360}}
        transition={{repeat: Infinity, duration: 5}}
        className={styles.audioIconWrapper} onClick={() => setPlay(!play)}
      >
        {play 
          ? <FontAwesomeIcon icon={faCirclePause} className='gold' size='2x' />
          : <FontAwesomeIcon icon={faCirclePlay} className='gold' size='2x' />
        }
      </motion.div>
    </div>
  )
}

export default Audio