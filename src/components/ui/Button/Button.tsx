import { FC, MouseEventHandler } from 'react';
import ButtonView, { IButtonViewProps } from './ButtonView';

interface IButtonProps extends IButtonViewProps {
  typeView?: 'def' | 'alt';
}

const Button: FC<IButtonProps> = ({ children, typeView = 'def', onClick, ...props }) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event);
  };

  return (
    <ButtonView {...props} onClick={handleClick}>
      {children}
    </ButtonView>
  );
};

export default Button;
