import React from 'react'
import styles from './bottomBar.module.css'
import Link from 'next/link'

const BottomBar = () => {
  return (
    <div className={`${styles.container}`}>
      <Link href={'#home'}>Beranda</Link>
      <Link href={'#acara'}>Acara</Link>
      <Link href={'#kado'}>Kado</Link>
    </div>
  )
}

export default BottomBar