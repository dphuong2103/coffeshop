import { Minus, Plus } from 'phosphor-react';
import styles from './styles.module.scss';

interface QuantityInputProps {
  size?: 'medium' | 'small';
  onIncrease: () => void;
  onDecrease: () => void;
  quantity: number;
}

export function QuantityInput({
  size = 'medium',
  onIncrease,
  onDecrease,
  quantity,
}: QuantityInputProps) {
  return (
    <div className={`${styles['quantity-input']} ${styles[size]}`}>
      <button
        className={`${styles['icon-wrapper']} ${quantity <= 1 ? styles.disabled : ''}`}
        onClick={onDecrease}
      >
        <Minus size={14} weight="fill" />
      </button>
      <input type="number" readOnly value={quantity} />
      <button className={styles['icon-wrapper']} onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </button>
    </div>
  );
}