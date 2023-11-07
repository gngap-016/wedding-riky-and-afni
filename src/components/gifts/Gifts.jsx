"use client"
import React from 'react'
import styles from './gifts.module.css'
import Image from 'next/image'

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
      <h1 className={styles.title}>Kirim Kado</h1>
      <p className={styles.desc}>Tanpa mengurangi rasa hormat, bagi Bapak/Ibu/Saudara/i yang ingin memberikan tanda kasih untuk kami, dapat melalui:</p>
      <div className={styles.giftContainer}>
        <div className={styles.giftItem}>
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
        </div>
      </div>
    </div>
  )
}

export default Gifts