import { FC, PropsWithChildren } from "react";
import Navbar from 'components/navigation/Navbar';
import Footer from 'components/navigation/Footer';
import styles from './style.module.css';

const DefaultLayout:  FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.main}>
      {children}
      <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;