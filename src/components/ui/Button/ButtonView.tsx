import { FC, ReactNode, ButtonHTMLAttributes, CSSProperties } from 'react';

import './styles/Button.scss';

interface IButtonStyleProps {
  width?: number | string;
  height?: number | string;
}

export interface IButtonViewProps extends ButtonHTMLAttributes<HTMLButtonElement>, IButtonStyleProps {
  children?: ReactNode;
}

const ButtonView: FC<IButtonViewProps> = ({ children, width, height, ...props }) => {
  const buttonStyle: CSSProperties = {
    width: width,
    height: height,
  };

  return (
    <button style={buttonStyle} {...props}>
      {children}
    </button>
  );
};

export default ButtonView;
