import React from 'react'
import styles from './person.module.css'
import Image from 'next/image'
import Background from '../background/Background'

const Person = () => {
  return (
    <div id='home' className={styles.container}>
      <Background />
      <p className={styles.salam}>Assalamualaikum Warahmatullahi Wabarakatuh</p>
      <p className={styles.text}>Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i serta kerabat sekalian untuk menghadiri acara pernikahan kami :</p>
      <div className={styles.person}>
        <div className={styles.imgContainer}>
          <Image src={'/images/hero.png'} alt='' className={styles.img} fill />
        </div>
        <div className={styles.descContainer}>
          <h2 className={styles.name}>Riky Rahma Putra (Riky)</h2>
          <p className={styles.child}>Putra</p>
          <p className={styles.parent}>Bapak Sunardi & (Almh) Ibu Sutami (Braja Harjosari)</p>
        </div>
      </div>
      <div className={styles.and}>&</div>
      <div className={styles.person}>
        <div className={styles.imgContainer}>
          <Image src={'/images/hero.png'} alt='' className={styles.img} fill />
        </div>
        <div className={styles.descContainer}>
          <h2 className={styles.name}>Afni Nisandari (Afni/Lisa)</h2>
          <p className={styles.child}>Putri</p>
          <p className={styles.parent}>Bapak Ponidi (Sipon) & Ibu Katiyem (Braja Mulya)</p>
        </div>
      </div>
    </div>
  )
}

export default Person