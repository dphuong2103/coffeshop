import { ReactNode } from 'react';
import { RegularText } from '../../../../components/Typography';
import styles from './styles.module.scss';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
}

export function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
  console.log(icon);
  return (
    <div className={styles['section-title-container']}>
      {icon}
      <div>
        <RegularText color="subtitle">{title}</RegularText>
        <RegularText size="s">{subtitle}</RegularText>
      </div>
    </div>
  );
}