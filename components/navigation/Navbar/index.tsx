import React from "react";

import Favicon from "/public/favicon.svg";
import styles from "./style.module.css";
import Link from "next/link";

import { navbarLinks } from "./constants";

type Props = {
};

const Navbar = (props: Props) => {
  const color = 'blue';
  return (
    <nav className={styles.nav}>
      <Link href="/" className={`${styles.iconLink} ${styles.link}`}>
        <span className={styles.favicon}>
          <Favicon />
        </span>
        <span>Lightx</span>
      </Link>
      <ul className={styles.linkContainer}>
        {navbarLinks.map((link) => {
          return (
            <li className={styles.linkItem} key={link.title}>
              <Link className={styles['my-link-' + color]} href={link.url}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
