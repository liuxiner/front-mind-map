import React, {FC, PropsWithChildren} from 'react'
import styles from './style.module.css';
type Props = {}

const Section : FC<PropsWithChildren<Props>> = ({children,...props}) => {
  return (
    <div className={styles.footer}>{children}</div>
  )
}

export default Section;