"use client"
import React from 'react'
import styles from './galery.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Background from '../background/Background'

const Galery = () => {
  return (
    <div 
    className={styles.container}
    >
      {/* <div className={styles.background}></div> */}
      <Background />
      <motion.h1 
        initial={{opacity: 0, y: -15}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: .5, duration: .5, type: 'spring'}}
        className={styles.title}
      >Galeri</motion.h1>
      <div className={styles.galeryContainer}>
        <motion.div
         initial={{opacity: 0, x: '-100%'}}
         whileInView={{opacity: 1, x: 0}}
         transition={{delay: .5, duration: .5, type: 'spring'}}
         className={styles.imgContainer}
        >
          <Image src={'/images/galery/1.jpg'} alt='' className={styles.img} fill />
        </motion.div>
        <motion.div
         initial={{opacity: 0, x: '100%'}}
         whileInView={{opacity: 1, x: 0}}
         transition={{delay: .5, duration: .5, type: 'spring'}}
         className={styles.imgContainer}
        >
          <Image src={'/images/galery/2.jpg'} alt='' className={styles.img} fill />
        </motion.div>
        <motion.div
         initial={{opacity: 0, x: '-100%'}}
         whileInView={{opacity: 1, x: 0}}
         transition={{delay: .5, duration: .5, type: 'spring'}}
         className={styles.imgContainer}
        >
          <Image src={'/images/galery/3.jpg'} alt='' className={styles.img} fill />
        </motion.div>
        <motion.div
         initial={{opacity: 0, x: '100%'}}
         whileInView={{opacity: 1, x: 0}}
         transition={{delay: .5, duration: .5, type: 'spring'}}
         className={styles.imgContainer}
        >
          <Image src={'/images/galery/4.jpg'} alt='' className={styles.img} fill />
        </motion.div>
        <motion.div
         initial={{opacity: 0, x: '-100%'}}
         whileInView={{opacity: 1, x: 0}}
         transition={{delay: .5, duration: .5, type: 'spring'}}
         className={styles.imgContainer}
        >
          <Image src={'/images/galery/5.jpg'} alt='' className={styles.img} fill />
        </motion.div>
      </div>
    </div>
  )
}

export default Galery