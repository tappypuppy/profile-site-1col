import Image from "next/image";
import { Link as Scroll } from "react-scroll";
import styles from "./index.module.css";

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
        {/* <Scroll to="about" smooth={true} duration={100}> */}
          About
        {/* </Scroll> */}
      </div>
      <div className={styles.bicycle}>Bicycle</div>
    </div>
  );
}

export default Header;
