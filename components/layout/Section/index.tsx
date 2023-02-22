import React, {FC, PropsWithChildren} from 'react'
import styles from './style.module.css';
type Props = {}

const Section : FC<PropsWithChildren<Props>> = ({children,...props}) => {
  return (
    <section className={styles.section}>{children}</section>
  )
}

export default Section;