import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | number;
}

export function Button({ text, ...props }: ButtonProps) {
  return <button className={styles['button-container']} {...props}>{text}</button>;
}