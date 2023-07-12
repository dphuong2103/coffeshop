import { TitleText } from '../../../../components/Typography';
import { useCart } from '../../../../hooks/useCart';
import { CoffeeCartCard } from '../CoffeeCartCard';
import { ConfirmationSection } from './ConfirmationSection';
import styles from './styles.module.scss';

export function SelectedCoffees() {
  const { cartItems } = useCart();

  return (
    <div className={styles['selected-coffees-container']}>
      <TitleText size="xs" color="subtitle">
        Selected coffees
      </TitleText>

      <div className={styles['details-container']}>
        {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))}

        <ConfirmationSection />
      </div>
    </div>
  );
}