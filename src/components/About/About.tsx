import styles from "./index.module.css";
import Image from "next/image";
function About() {
  return (
    <section className={styles.about_box}>
      <div className={styles.about}>
        <h3 id="about">About</h3>
      </div>
      <div className={styles.about_detail}>
        <Image
          className={styles.about_icon}
          src="/about.png"
          alt="about"
          width={100}
          height={100}
        />
        <div className={styles.about_text}>
          <h4 className={styles.username}>KAKERU MIYAICHI</h4>
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
      </div>
    </section>
  );
}

export default About;
