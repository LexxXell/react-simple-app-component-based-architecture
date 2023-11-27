import { FC, SVGProps, useState } from 'react';
import EyeIconView from './EyeIconView';

import styles from './styles/EyeIcon.module.scss';

interface IEyeIconProps extends SVGProps<SVGSVGElement> {
  isActive?: boolean;
}

const EyeIcon: FC<IEyeIconProps> = ({ onClick, isActive: initActive = false, className, ...props }) => {
  const [isActive, setIsActive] = useState(initActive);

  const onClickHandle = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    setIsActive(!isActive);
    onClick?.(e);
  };

  const combinedClassName = `${className || ''} ${isActive ? styles.active : styles.idle}`.trim();

  return <EyeIconView {...props} className={combinedClassName} onClick={onClickHandle} />;
};

export default EyeIcon;
