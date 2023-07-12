import confirmedOrderIllustration from '../../assets/confirmed-order.svg';
import { InfoWithIcon } from '../../components/InfoWithIcon';
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { OrderData } from '../CompleteOrder';
// import { paymentMethods } from '../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions';
import { useEffect } from 'react';
import styles from './styles.module.scss'
import { RegularText, TitleText } from '../../components/Typography';
interface LocationType {
  state: OrderData;
}

export function OrderConfirmedPage() {
  const { state } = useLocation() as LocationType;
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!state) return <></>;

  return (
    <div className={styles['order-confirmed-container']}>
      <div>
        <TitleText size="l">Yay! Order Confirmed</TitleText>
        <RegularText size="l" color="subtitle">
          Now just wait for the coffee to arrive at your doorstep
        </RegularText>
      </div>

      <section>
        <div className={styles['order-details-container']}>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconColor='colors-brand-purple'
            text={
              <RegularText>
                Delivery to
                <strong>
                  {state.street}, {state.number}
                </strong>
                <br />
                {state.district} - {state.city}, {state.uf}
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconColor='colors-brand-yellow'
            text={
              <RegularText>
                Estimated Delivery Time
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconColor='colors-brand-yellow-dark'
            text={
              <RegularText>
                Payment on Delivery
                <br />
                {/* <strong>{paymentMethods[state.paymentMethod].label}</strong> */}
              </RegularText>
            }
          />
        </div>

        <img src={confirmedOrderIllustration} alt="" />
      </section>
    </div>
  );
}
