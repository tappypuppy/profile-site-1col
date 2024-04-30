import type { NextPage } from "next";
import styles from "./index.module.css";
// import Head from "next/head";
import Image from "next/image";
import Head_tag from "@/components/Head";
import Header from "@/components/Header/Header";

const ProfilePC: NextPage = () => {
  return (
    <div className={styles.profilePc}>
      <Header/>
      <div className={styles.about1}>About1</div>
      <Image
        className={styles.icon}
        src="/線 1.svg"
        alt="icon"
        width={106}
        height={0}
      />
      <div className={styles.kakeruMiyaichi}>KAKERU MIYAICHI</div>
      <div className={styles.div}>
        <p className={styles.p}>
          テキストテキストテキストテキストテキストテキストテキスト
        </p>
        <p className={styles.p}>
          テキストテキストテキストテキストテキストテキストテキスト
        </p>
        <p className={styles.p}>
          テキストテキストテキストテキストテキストテキストテキスト
        </p>
      </div>
      <div className={styles.bicycle1}>Bicycle</div>
      {/* <img className={styles.icon1} alt="" src="線 2.svg" /> */}
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
