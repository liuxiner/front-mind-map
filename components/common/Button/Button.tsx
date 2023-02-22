import React from 'react';
import Link from 'next/link';
import { FC, memo, PropsWithChildren } from 'react';
import styles from './styles/Button.module.css'
//------------type origin

const ButtonTypes = ['primary', 'bordered', 'borderless', 'link'] as const;
export type ButtonType = typeof ButtonTypes[number];

const ButtonShapes = ['default', 'circle', 'round'] as const;
export type ButtonShape = typeof ButtonShapes[number];

const ButtonHTMLTypes = ['submit', 'button', 'reset'] as const;
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

export type ColorTypes = 'black' | 'white' | 'blue' | string;

export type SizeType = [number, number];

//-----
export interface ButtonBasicProps {
  color?: ColorTypes; // textColor & borderColor
  backgroundColor?: ColorTypes; // backgroundColor TODO: transparent?? or add ghost attribute??
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export interface ButtonProps extends ButtonBasicProps {
  target?: string;
  clickPosition?: string;
}
export const Button: FC<PropsWithChildren<ButtonProps>> = () => {
  return (
    <button type='button' className={styles.black}>
      Black Button
    </button>
  )
}
Button.displayName = 'Button';
