import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface InfoWithIconProps {
  icon: ReactNode;
  text: string | ReactNode;
  iconColor: string;
}

export function InfoWithIcon({ icon, text, iconColor }: InfoWithIconProps) {
  return (
    <div className={`${styles['info-with-icon-container']}`}>
      <div className={`${styles['icon-container']}  ${iconColor}`}>
        {icon}
      </div>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </div>
  );
}