import styles from "./index.module.css";
import Image from "next/image";
function About() {
  return (
    <div className={styles.about_box}>
      <Image
        className={styles.about_icon}
        src="/about.png"
        alt="about"
        width={100}
        height={100}
      />
      <div className={styles.about}>About</div>
      <Image
        className={styles.border}
        src="/線 1.svg"
        alt="icon"
        width={106}
        height={0}
      />
      <div className={styles.username}>KAKERU MIYAICHI</div>
      <div className={styles.text_box}>
        <p className={styles.text}>
          テキストテキストテキストテキストテキストテキストテキスト
        </p>
        <p className={styles.text}>
          テキストテキストテキストテキストテキストテキストテキスト
        </p>
        <p className={styles.text}>
          テキストテキストテキストテキストテキストテキストテキスト
        </p>
      </div>
    </div>
  );
}

export default About;
