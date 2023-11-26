import { FC, ReactNode, ButtonHTMLAttributes } from 'react';

import './styles/Button.scss';

interface IButtonViewProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

const ButtonView: FC<IButtonViewProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default ButtonView;
