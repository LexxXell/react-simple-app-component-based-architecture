import { FC, MouseEventHandler } from 'react';
import ButtonView, { IButtonViewProps } from './ButtonView';

import styles from './styles/ButtonView.module.scss';
import classnames from 'classnames';

interface IButtonProps extends IButtonViewProps {
  typeView?: 'def' | 'alt';
}

const Button: FC<IButtonProps> = ({ children, typeView = 'def', onClick, ...props }) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event);
  };

  const combinedClassName = classnames(styles.button, {
    [styles.alt]: typeView === 'alt',
  });

  return (
    <ButtonView {...props} className={combinedClassName} onClick={handleClick}>
      {children}
    </ButtonView>
  );
};

export default Button;
