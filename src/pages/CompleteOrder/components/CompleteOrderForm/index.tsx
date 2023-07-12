import { MapPinLine, CurrencyDollar } from 'phosphor-react';
import { TitleText } from '../../../../components/Typography';
import { SectionTitle } from '../SectionTitle';
import { AddressForm } from './AddressForm';
import { PaymentMethodOptions } from './PaymentMethodOptions';
import styles from './styles.module.scss';

export function CompleteOrderForm() {

  return (
    <div className={styles['complete-order-form-container']}>
      <TitleText size="xs" color="subtitle">
        Complete your order
      </TitleText>

      <div className={styles['form-section-container']}>
        <SectionTitle
          title="Delivery Address"
          subtitle="Provide the address where you want to receive your order"
          icon={<MapPinLine color='#c47f17' size={22} />}
        />

        <AddressForm />
      </div>

      <div className={styles['form-section-container']}>
        <SectionTitle
          title="Payment"
          subtitle="Payment is made upon delivery. Choose the payment method you prefer"
          icon={<CurrencyDollar color='#4b2995' size={22} />}
        />

        <PaymentMethodOptions />
      </div>
    </div>
  );
}
