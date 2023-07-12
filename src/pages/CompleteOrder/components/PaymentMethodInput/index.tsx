import styles from './styles.module.scss';
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
};

export const PaymentMethodInput = forwardRef<HTMLInputElement, PaymentMethodInputProps>(({ id, icon, label, ...props }, ref) => {
  return (
    <div className={styles['payment-method-container']}>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <div className={styles['content-container']}>
          {icon}
          {label}
        </div>
      </label>
    </div>
  );
});

PaymentMethodInput.displayName = 'PaymentMethodInput'
