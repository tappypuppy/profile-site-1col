import type { NextPage } from "next";
import styles from "./index.module.css";
// import Head from "next/head";
import Image from "next/image";
import Head_tag from "@/components/Head";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import Bicycle from "@/components/Bicycle/Bicycle";
import Footer from "@/components/Footer/footer";
import type { Viewport } from 'next'
 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

const ProfilePC: NextPage = () => {
  return (
    <div className={styles.profilePc}>
      <Header/>
      <Hero/>
      <About/>
      <Bicycle/>
      <Footer/>
    </div>
  );
};

export default ProfilePC;
