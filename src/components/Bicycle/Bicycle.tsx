import Image from "next/image";
import styles from "./index.module.css";
function Bicycle() {
  return (
    <div>
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
}

export default Bicycle;
