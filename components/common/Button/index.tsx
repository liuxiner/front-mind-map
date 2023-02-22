import React from 'react';
import Link from 'next/link';
import { StyledButton } from './styles';
import { ButtonProp } from './styles/interface';
const Button: React.FC<ButtonProp> = ({
  children,
  color,
  backgroundColor,
  borderColor,
  hoverColor,
  size,
  shape,
  href,
  onClick,
  ...props
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
  };
  return (
    <>
      {href ? (
        <Link href={href}>
          <StyledButton {...props}>{children}</StyledButton>
        </Link>
      ) : (
        <StyledButton onClick={handleClick} {...props}>
          {children}
        </StyledButton>
      )}
    </>
  );
};

export default Button;
