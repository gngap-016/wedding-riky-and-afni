import React from "react";
import styles from './page.module.css';
import Hero from "@/components/hero/Hero";
import Person from "@/components/person/Person";
import Events from "@/components/events/Events";
import Galery from "@/components/galery/Galery";
import Gifts from "@/components/gifts/Gifts";
import Footer from "@/components/footer/Footer";
import BottomBar from "@/components/bottomBar/BottomBar";
import Audio from "@/components/audio/Audio";

export default function Home() {
  return (
    <div className={styles.container}>
      <Audio />
      <BottomBar />
      <Hero />
      <Person />
      <Events />
      <Galery />
      <Gifts />
      <Footer />
    </div>
  )
}
