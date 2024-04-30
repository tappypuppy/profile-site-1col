import type { NextPage } from "next";
import styles from "./index.module.css";
// import Head from "next/head";
import Image from "next/image";
import Head_tag from "@/components/Head";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";

const ProfilePC: NextPage = () => {
  return (
    <div className={styles.profilePc}>
      <Header/>
      <About/>
      <div className={styles.bicycle1}>Bicycle</div>
      <Image
        className={styles.icon1}
        src="/線 2.svg"
        alt="icon"
        width={122}
        height={0}
      />
      <div className={styles.div1}>タイトルタイトル</div>
      <div className={styles.div2}>テキストテキストテキスト</div>
      <div className={styles.div3}>タイトルタイトル</div>
      <div className={styles.div4}>テキストテキストテキスト</div>
      <div className={styles.div5}>タイトルタイトル</div>
      <div className={styles.div6}>テキストテキストテキスト</div>
      <div className={styles.profile}>© 2020 Profile</div>
      <Image
        className={styles.main_visual}
        src="/main_visual.png"
        alt="main_visual"
        width={1280}
        height={600}
      />
      <Image
        className={styles.about_icon}
        src="/about.png"
        alt="about"
        width={100}
        height={100}
      />
      <Image
        className={styles.bicycle1Icon}
        src="/bicycle1.png"
        alt="bike1"
        width={274.4}
        height={182}
      />
      <Image
        className={styles.bicycle2Icon}
        src="/bicycle2.png"
        alt="bike2"
        width={274.4}
        height={182}
      />
      <Image
        className={styles.bicycle3Icon}
        src="/bicycle3.png"
        alt="bike3"
        width={274.4}
        height={182}
      />
    </div>
  );
};

export default ProfilePC;
