import styles from './OurCoffeesStyles.module.scss';
import { CoffeeCard } from '../CoffeeCard';
import { TitleText } from '../Typography';
import { coffees } from '../../mock/coffee';

export function OurCoffees() {
  return (
    <section className={`${styles['our-coffees-container']}`}>
      <TitleText size="l" color="subtitle">
        Our coffees.
      </TitleText>

      <div className={styles['coffee-list']}>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </section>
  );
}