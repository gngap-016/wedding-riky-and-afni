"use client"
import React from 'react'
import styles from './galery.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Background from '../background/Background'

const images = [
  {
    id: 1,
    url: "/images/galery/1.jpg",
    alt: "Galeri 1"
  },
  {
    id: 2,
    url: "/images/galery/2.jpg",
    alt: "Galeri 2"
  },
  {
    id: 3,
    url: "/images/galery/3.jpg",
    alt: "Galeri 3"
  },
  {
    id: 4,
    url: "/images/galery/4.jpg",
    alt: "Galeri 4"
  },
  {
    id: 5,
    url: "/images/galery/5.jpg",
    alt: "Galeri 5"
  },
  {
    id: 6,
    url: "/images/galery/6.jpg",
    alt: "Galeri 6"
  },
]

const Galery = () => {
  return (
    <div 
    className={styles.container}
    >
      <Background />
      <motion.h1 
        initial={{opacity: 0, y: -15}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: .5, duration: .5, type: 'spring'}}
        className={styles.title}
      >Galeri</motion.h1>
      <div className={styles.galeryContainer}>
        {
          images.map((item) => (
            <motion.div
            key={item.id}
            initial={{opacity: 0, x: (item.id % 2 === 0 ? '100%' : '-100%')}}
            whileInView={{opacity: 1, x: 0}}
            transition={{delay: .5, duration: .5, type: 'spring'}}
            className={styles.imgContainer}
            >
              <Image src={item.url} alt={item.alt} className={styles.img} fill />
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default Galery