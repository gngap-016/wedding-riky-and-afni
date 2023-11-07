"use client"
import React, { useCallback, useEffect } from 'react'
import styles from './button.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

import { motion } from 'framer-motion'
import Audio from '../audio/Audio'

const Button = () => {
  const disableScroll = useCallback(() => {
    const rootElement = document.querySelector(":root");
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = function () {
      window.scrollTo(scrollTop, scrollLeft);
    }
    rootElement.style.scrollBehavior = 'auto';
  }, [])
  
  const enableScroll = useCallback(() => {
    const rootElement = document.querySelector(":root");

    rootElement.style.scrollBehavior = 'smooth';
    window.onscroll = function () {
      rootElement.style.scrollBehavior = 'smooth';
    }
  }, [])

  useEffect(() => {
    disableScroll();
  }, [disableScroll])
  
  return (
    <motion.div 
      className={styles.container}

      initial={{opacity: .9, scale: .95}}
      animate={{opacity: 1,scale: 1.05}}
      transition={{
        repeat: Infinity,
        repeatType: 'reverse',
        duration: .8,
        delay: 1,
      }}
    >
      <Link href='#home' className={styles.button} onClick={() => enableScroll()}>
        <FontAwesomeIcon icon={faEnvelopeOpen} width={16} /> Buka Undangan
      </Link>
    </motion.div>
  )
}

export default Button