import styled from 'styled-components';
import { ButtonProp } from './interface';

const getColor = (color?: string) => {
  switch (color) {
    case 'black':
      return '#000';
    case 'white':
      return '#fff';
    case 'blue':
      return '#0070f3';
    case 'transparent':
      return 'transparent';
    default:
      return '';
  }
};

const getButtonShape = (shape?: string) => {
  switch (shape) {
    case 'circle':
      return '9999px';
    case 'rounded':
      return '8px';
    default:
      return '32px';
  }
};

export const StyledButton = styled.button`
  ${({ color, backgroundColor, borderColor,hoverColor, shape, size }: ButtonProp) => `
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  color: ${color ? color : '#fff'};
  background-color: ${getColor(backgroundColor)};
  border: 2px solid ${getColor(borderColor)};
  border-radius: ${getButtonShape(shape)};
  width: ${size?.width ? size.width + 'px' : 'auto'};
  height: ${size?.height ? size.height + 'px' : 'auto'};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  &:hover {
    background-color: ${getColor(hoverColor)};
    color: ${backgroundColor !== 'transparent' ? '#fff' : getColor(borderColor)};
    border-color: ${getColor(borderColor)};
  }

  &:focus {
    box-shadow: 0 0 0 3px ${getColor(borderColor + '70')};
    outline: none;
  }
`}
`;
