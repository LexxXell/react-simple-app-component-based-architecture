import { FC, ReactNode, ButtonHTMLAttributes, CSSProperties } from 'react';
import classnames from 'classnames';

import styles from './styles/ButtonView.module.scss';

interface IButtonStyleProps {
  width?: number | string;
  height?: number | string;
  typeView?: 'def' | 'alt';
}

export interface IButtonViewProps extends ButtonHTMLAttributes<HTMLButtonElement>, IButtonStyleProps {
  children?: ReactNode;
}

const ButtonView: FC<IButtonViewProps> = ({ children, width, height, className, typeView, ...props }) => {
  const buttonStyle: CSSProperties = {
    width: width,
    height: height,
  };

  const combinedClassName = classnames(styles.button, className, {
    [styles.alt]: typeView === 'alt',
  });

  return (
    <button className={combinedClassName} style={buttonStyle} {...props}>
      {children}
    </button>
  );
};

export default ButtonView;
