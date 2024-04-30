import Image from "next/image";
import styles from "./index.module.css";

function Hero() {
  return (
    <div>
      <Image
        className={styles.main_visual}
        src="/main_visual.png"
        alt="main_visual"
        width={1280}
        height={600}
      />
    </div>
  );
}

export default Hero;
