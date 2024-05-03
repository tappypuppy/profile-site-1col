import Image from "next/image";
import styles from "./index.module.css";
function Bicycle() {
  return (
    <section className={styles.bicycle_box}>
      <div className={styles.bicycle}>
        <h3 id="bicycle">Bicycle</h3>
      </div>
      <div className={styles.bike_items}>
        <div className={styles.bike_item}>
          <Image
            className={styles.bike_icon}
            src="/bicycle1.png"
            alt="bike1"
            width={274.4}
            height={182}
          />
          <h4 className={styles.bike_title}>タイトルタイトル</h4>
          <div className={styles.bike_text}>テキストテキストテキスト</div>
        </div>
        <div className={styles.bike_item}>
          <Image
            className={styles.bike_icon}
            src="/bicycle2.png"
            alt="bike2"
            width={274.4}
            height={182}
          />
          <h4 className={styles.bike_title}>タイトルタイトル</h4>
          <div className={styles.bike_text}>テキストテキストテキスト</div>
        </div>
        <div className={styles.bike_item}>
          <Image
            className={styles.bike_icon}
            src="/bicycle3.png"
            alt="bike3"
            width={274.4}
            height={182}
          />
          <h4 className={styles.bike_title}>タイトルタイトル</h4>
          <div className={styles.bike_text}>テキストテキストテキスト</div>
        </div>
      </div>
    </section>
  );
}

export default Bicycle;
