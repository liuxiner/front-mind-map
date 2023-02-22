import React from "react";
import Container from "components/layout/Container";
import styles from './style.module.css';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <Container>Footer</Container>
    </footer>
  );
};

export default Footer;
