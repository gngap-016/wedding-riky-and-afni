"use client"
import React, { useEffect } from 'react'
import styles from './hero.module.css'
import Button from '../button/Button'
import { motion, AnimatePresence } from 'framer-motion'

const Hero = () => {
  const countDownDate = new Date("Nov 15, 2023 09:00:00").getTime();

  useEffect(() => {
    const countDown = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const timeElement = document.getElementById('time');
      timeElement.innerHTML = (days < 10 ? "0" + days : days) + " : " + (hours < 10 ? "0" + hours : hours) + " : " + (minutes < 10 ? "0" + minutes : minutes) + " : " + (seconds < 10 ? "0" + seconds : seconds);

      if(distance < 0) {
        clearInterval(countDown)
        timeElement.innerHTML = "Acara Telah Selesai!"
      } 
    }, 1000)
  });

  return (
    <AnimatePresence>
      <div className={styles.container}>
        <motion.div 
          initial={{opacity: 0, y: 30}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: .25, duration: .5, type: 'spring'}}
          className={styles.name}
        >
          <p className={styles.man}>Riky</p>
          <p className={styles.and}>&</p>
          <p className={styles.woman}>Afni</p>
        </motion.div>
        <div className={styles.descContainer}>
          <p className={styles.desc}>Akan melangsungkan resepsi pernikahan pada:</p>
          <p className={styles.date}>Rabu, 15 November 2023</p>
        </div>
        <div className={styles.countDown}>
          <p className={styles.desc}>Waktu menuju acara:</p>
          <motion.p
            initial={{opacity: 0, scale: .5}}
            animate={{opacity: 1, scale: 1}}
            transition={{
              delay: .5,
              duration: .25,
              ease: [0, .71, .2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: .001
              },
            }}
            className={styles.time} id='time'>00 : 00 : 00 : 00</motion.p>
        </div>
        <div className={styles.buttonContainer}>
          <Button />
        </div>
      </div>
    </AnimatePresence>
  )
}

export default Hero