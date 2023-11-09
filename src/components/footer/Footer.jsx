"use client"
import React from 'react'
import styles from './footer.module.css'
import Background from '../background/Background'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <Background />
      <p className={styles.desc}>{"Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a restunya, kami ucapkan terimakasih."}</p>
      <motion.p 
        initial={{opacity: 0, y: -15}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: .25, duration: .5, type: 'spring'}}
        className={styles.salam}
      >Wassalamualaikum Warahmatullahi Wabarakatuh</motion.p>
      <motion.p 
        initial={{opacity: 0, y: -15}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: .5, duration: .5, type: 'spring'}}
        className={styles.lastWord}
      >Hormat Kami,</motion.p>
      <motion.p 
        initial={{opacity: 0, y: -15}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: .75, duration: .5, type: 'spring'}}
        className={styles.personName}
      >Riky & Afni</motion.p>
      <motion.div 
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{delay: .5, duration: .5, type: 'spring'}}
        className={styles.supported}
      >
        <hr />
        supported by <Link href={'https:///wa.me/6285263193452'} target='_blank' rel='noreferrer' className={styles.myLink}>Ganuta</Link>
      </motion.div>
    </div>
  )
}

export default Footer