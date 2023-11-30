import { FC, InputHTMLAttributes } from 'react';
import EyeIcon from '../EyeIcon';

import styles from './styles/Input.module.scss';

export interface IInputViewProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputView: FC<IInputViewProps> = ({ width, height, label, id, type }) => {
  return (
    <div style={{ width: width, height: height }}>
      {label ? <label htmlFor={id}>{label}</label> : ''}
      <div>
        <input type={type} id={id} />
        <EyeIcon />
      </div>
    </div>
  );
};

export default InputView;
