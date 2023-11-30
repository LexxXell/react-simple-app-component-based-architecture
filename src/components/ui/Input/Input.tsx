import { FC } from 'react';
import InputView, { IInputViewProps } from './InputView';

interface IInput extends IInputViewProps {}

const Input: FC<IInput> = ({ ...props }) => {
  return <InputView {...props} />;
};

export default Input;
