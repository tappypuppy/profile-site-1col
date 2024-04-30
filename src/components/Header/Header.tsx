import Image from "next/image";
import styles from "./index.module.css";

function Header() {
  return (
    <div className={styles.header_box}>
      <Image
        className={styles.logoIcon}
        src="/logo.png"
        alt="logo"
        width={120}
        height={40}
      />
      <div className={styles.about}>About</div>
      <div className={styles.bicycle}>Bicycle</div>
    </div>
  );
}

export default Header;
