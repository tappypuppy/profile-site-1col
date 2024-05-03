import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";

function Header() {
  return (
    <header>
      <div className={styles.header_box}>
        <nav className={styles.nav}>
          <Image
            className={styles.logoIcon}
            src="/logo.png"
            alt="logo"
            width={120}
            height={40}
          />

          <ul>
            <li>
              <Link href="/#about" className={styles.anchor}>
                About
              </Link>
            </li>
            <li>
              <Link href="/#bicycle" className={styles.anchor}>
                Bicycle
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
