import React from 'react'
import styles from './events.module.css'
import Link from 'next/link'

const Events = () => {
  return (
    <div className={styles.container} id='acara'>
      <h1 className={styles.title}>Acara Pernikahan</h1>
      <p className={styles.desc}>Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala, insyaAllah kami akan menyelenggarakan acara pada:</p>
      <p className={styles.date}>Rabu, 15 November 2023</p>
      <h2 className={styles.subtitle}>Akad</h2>
      <p className={styles.time}>Pukul 09.00 WIB - Selesai</p>
      <h2 className={styles.subtitle}>Resepsi</h2>
      <p className={styles.time}>Pukul 13.00 WIB - Selesai</p>
      <p className={styles.location}>Di Braja Mulya, Kec. Braja Selebah, Kab. Lampung Timur</p>
      <div className={styles.maps}>
        <Link href={'https://maps.app.goo.gl/CA9WJWLdtqUahgkU6'} className={styles.link} target='_blank' rel='noreferrer'>https://maps.app.goo.gl/CA9WJWLdtqUahgkU6</Link>
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1063.0172827491213!2d105.78194044329479!3d-5.22240234370048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMTMnMjEuMCJTIDEwNcKwNDYnNTUuNiJF!5e1!3m2!1sid!2sid!4v1699242932137!5m2!1sid!2sid" width={'100%'} height={400} style={{border:0, marginTop: 16}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Events