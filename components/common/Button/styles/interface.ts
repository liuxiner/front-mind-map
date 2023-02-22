import { ButtonHTMLAttributes } from 'react';

export type ButtonProp = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'black' | 'white' | 'blue' | string;
  backgroundColor?: 'black' | 'blue' | 'transparent' | string;
  borderColor?: 'black' | 'white' | 'blue' | string;
  hoverColor?: string;
  size?: {
    width?: number;
    height?: number;
  };
  shape?: 'default' | 'circle' | 'rounded';
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
