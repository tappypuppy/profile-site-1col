import Image from "next/image";
import { Link as Scroll } from "react-scroll";
import styles from "./index.module.css";
import Link from "next/link";

function Header() {
  return (
    <div className={styles.header_box}>
      <Image
        className={styles.logoIcon}
        src="/logo.png"
        alt="logo"
        // sizes="100vw"
        // style={{
        //   width: "20%",
        //   height: "auto",
        // }}
        width={120}
        height={40}
      />
      <div className={styles.about}>
        <Link href="/#about">About</Link>
      </div>
      <div className={styles.bicycle}>
        <Link href="/#bicycle">Bicycle</Link>
      </div>
    </div>
  );
}

export default Header;
