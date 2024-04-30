import type { NextPage } from "next";
import styles from "./index.module.css";
// import Head from "next/head";
import Image from "next/image";
import Head_tag from "@/components/Head";

const ProfilePC: NextPage = () => {
  return (
    <div className={styles.profilePc}>
      {/* <img className={styles.logoIcon} alt="" src="logo.png" /> */}
      <Image
        className={styles.logoIcon}
        src="/logo.png"
        alt="logo"
        width={120}
        height={40}
      />
      <div className={styles.about}>About</div>
      <div className={styles.bicycle}>Bicycle</div>
      <div className={styles.about1}>About</div>
      {/* <img className={styles.icon} alt="" src="線 1.svg" /> */}
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
      {/* <img className={styles.maskGroupIcon} alt="" src="Mask group2.png" />
      <img className={styles.maskGroupIcon1} alt="" src="Mask group1.png" />
      <img className={styles.bicycle1Icon} alt="" src="bicycle1.png" />
      <img className={styles.bicycle2Icon} alt="" src="bicycle2.png" />
      <img className={styles.bicycle3Icon} alt="" src="bicycle3.png" /> */}
      <Image
        className={styles.maskGroupIcon}
        src="/main_visual.png"
        alt="main_visual"
        width={1280}
        height={600}
      />
      <Image
        className={styles.maskGroupIcon1}
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
