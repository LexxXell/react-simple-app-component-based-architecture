import { FC, ReactNode, ButtonHTMLAttributes, CSSProperties } from 'react';

interface IButtonStyleProps {
  width?: number | string;
  height?: number | string;
}

export interface IButtonViewProps extends ButtonHTMLAttributes<HTMLButtonElement>, IButtonStyleProps {
  children?: ReactNode;
}

const ButtonView: FC<IButtonViewProps> = ({ children, width, height, className, ...props }) => {
  const buttonStyle: CSSProperties = {
    width: width,
    height: height,
  };

  return (
    <button className={className} style={buttonStyle} {...props}>
      {children}
    </button>
  );
};

export default ButtonView;
