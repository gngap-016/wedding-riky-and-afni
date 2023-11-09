"use client"
import React from 'react'
import styles from './events.module.css'
import Link from 'next/link'
import Background from '../background/Background'
import { motion } from 'framer-motion'

const Events = () => {
  return (
    <div className={styles.container} id='acara'>
      <Background />
      <motion.h1 
        initial={{opacity: 0, y: -15}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: .25, duration: .5, type: 'spring'}}
        className={styles.title}
      >Acara Pernikahan</motion.h1>
      <p className={styles.desc}>Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala, insyaAllah kami akan menyelenggarakan acara pada:</p>
      <motion.p
        initial={{opacity: 0, scale: .5}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{delay: .5, duration: .5, type: 'spring'}} 
        className={styles.date}
      >Rabu, 15 November 2023</motion.p>
      <motion.h2 
        initial={{opacity: 0, y: -15}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: .25, duration: .5, type: 'spring'}}
        className={styles.subtitle}
      >Akad</motion.h2>
      <motion.p 
        initial={{opacity: 0, y: -15}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: .5, duration: .5, type: 'spring'}}
        className={styles.time}
      >Pukul 09.00 WIB - Selesai</motion.p>
      <motion.h2 
        initial={{opacity: 0, y: -15}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: .25, duration: .5, type: 'spring'}}
        className={styles.subtitle}
      >Resepsi</motion.h2>
      <motion.p 
        initial={{opacity: 0, y: -15}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: .5, duration: .5, type: 'spring'}}
        className={styles.time}
      >Pukul 13.00 WIB - Selesai</motion.p>
      <motion.p
        initial={{opacity: 0, scale: .5}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{delay: .5, duration: .5, type: 'spring'}} 
        className={styles.location}
      >Di Braja Mulya, Kec. Braja Selebah, Kab. Lampung Timur</motion.p>
      <motion.div 
        initial={{opacity: 0, scale: .5}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{delay: .5, duration: .5, type: 'spring'}} 
        className={styles.maps}
      >
        <Link href={'https://maps.app.goo.gl/CA9WJWLdtqUahgkU6'} className={styles.link} target='_blank' rel='noreferrer'>https://maps.app.goo.gl/CA9WJWLdtqUahgkU6</Link>
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1063.0172827491213!2d105.78194044329479!3d-5.22240234370048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMTMnMjEuMCJTIDEwNcKwNDYnNTUuNiJF!5e1!3m2!1sid!2sid!4v1699242932137!5m2!1sid!2sid" width={'100%'} height={400} style={{border:0, marginTop: 16}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className={styles.googleMaps}></iframe>
      </motion.div>
    </div>
  )
}

export default Events