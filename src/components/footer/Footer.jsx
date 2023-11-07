import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <p className={styles.desc}>{"Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila, Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a restunya, kami ucapkan terimakasih."}</p>
      <p className={styles.salam}>Wassalamualaikum Warahmatullahi Wabarakatuh</p>
    </div>
  )
}

export default Footer