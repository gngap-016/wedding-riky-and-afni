"use client"
import React from 'react'
import styles from './person.module.css'
import Image from 'next/image'
import Background from '../background/Background'
import { motion } from 'framer-motion'

const Person = () => {
  return (
    <div id='home' className={styles.container}>
      <Background />
      <motion.p
        initial={{opacity: 0, y: -15}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: .25, duration: .5, type: 'spring'}}
        className={styles.salam}
      >Assalamualaikum Warahmatullahi Wabarakatuh</motion.p>
      <p className={styles.text}>Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i serta kerabat sekalian untuk menghadiri acara pernikahan kami :</p>
      <div className={styles.person}>
        <motion.div
           initial={{opacity: 0, scale: 0}}
           whileInView={{opacity: 1, scale: 1}}
           transition={{
             delay: .25,
             duration: .25,
             ease: [0, .71, .2, 1.01],
             scale: {
               type: "spring",
               damping: 10,
               stiffness: 100,
               restDelta: .001
             },
           }}
          className={styles.imgContainer}
        >
          <Image src={'/images/hero.png'} alt='' className={styles.img} fill />
        </motion.div>
        <div className={styles.descContainer}>
          <motion.h2 
            initial={{opacity: 0, y: -15}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: .25, duration: .25, type: 'spring'}}
            className={styles.name}
          >Riky Rahma Putra (Riky)</motion.h2>
          <motion.p
            initial={{opacity: 0, y: -15}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: .5, duration: .25, type: 'spring'}}
            className={styles.child}
          >Putra</motion.p>
          <motion.p 
            initial={{opacity: 0, y: -15}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: .75, duration: .25, type: 'spring'}}
            className={styles.parent}
          >Bapak Sunardi & (Almh) Ibu Sutami (Braja Harjosari)</motion.p>
        </div>
      </div>
      <motion.div
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{delay: .5, duration: .25, 
          scale: {
            type: "spring",
            damping: 10,
            stiffness: 100,
            restDelta: .001
          },
        }}
        className={styles.and}
      >&</motion.div>
      <div className={styles.person}>
        <motion.div
           initial={{opacity: 0, scale: 0}}
           whileInView={{opacity: 1, scale: 1}}
           transition={{
             delay: .25,
             duration: .25,
             ease: [0, .71, .2, 1.01],
             scale: {
               type: "spring",
               damping: 10,
               stiffness: 100,
               restDelta: .001
             },
           }}
          className={styles.imgContainer}
        >
          <Image src={'/images/hero.png'} alt='' className={styles.img} fill />
        </motion.div>
        <div className={styles.descContainer}>
          <motion.h2 
            initial={{opacity: 0, y: -15}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: .25, duration: .25, type: 'spring'}}
            className={styles.name}
          >Afni Nisandari (Afni/Lisa)</motion.h2>
          <motion.p
            initial={{opacity: 0, y: -15}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: .5, duration: .25, type: 'spring'}}
            className={styles.child}
          >Putri</motion.p>
          <motion.p 
            initial={{opacity: 0, y: -15}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: .75, duration: .25, type: 'spring'}}
            className={styles.parent}
          >Bapak Ponidi (Sipon) & Ibu Katiyem (Braja Mulya)</motion.p>
        </div>
      </div>
    </div>
  )
}

export default Person