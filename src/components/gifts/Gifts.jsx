"use client"
import React from 'react'
import styles from './gifts.module.css'
import Image from 'next/image'
import Background from '../background/Background'
import { motion } from 'framer-motion'

const copyNumber = (number) => {
  navigator.clipboard.writeText(number)
  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Disalin : " + number;
}

const mouseOut = () => {
  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Salin Nomor Rekening";
}

const Gifts = () => {
  return (
    <div className={styles.container} id='kado'>
      <Background />
      <motion.h1 
        initial={{opacity: 0, y: -15}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: .25, duration: .5, type: 'spring'}}
        className={styles.title}
      >Kirim Kado</motion.h1>
      <p className={styles.desc}>Tanpa mengurangi rasa hormat, bagi Bapak/Ibu/Saudara/i yang ingin memberikan tanda kasih untuk kami, dapat melalui:</p>
      <div className={styles.giftContainer}>
        <motion.div 
          initial={{opacity: 0, y: -15}}
          whileInView={{opacity: 1, y: 0}}
          transition={{delay: .25, duration: .5, type: 'spring'}}
          className={styles.giftItem}
        >
          <div className={styles.imgContainer}>
            <Image src={'/images/bca.png'} alt='' className={styles.img} fill />
          </div>
          <div className={styles.descContainer}>
            <div className={styles.tooltip}>
              <button className={styles.number} onClick={() => copyNumber("6590173809")} onMouseOut={mouseOut}>
                <span className={styles.tooltipText} id='myTooltip'>Salin Nomor Rekening</span>
                <span className={styles.noRek}>No. Rek</span>
                6590173809
              </button>
            </div>
            <p className={styles.name}>a.n Afni Nisandari</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Gifts