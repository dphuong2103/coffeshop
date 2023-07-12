
import styles from './HeroStyles.module.scss';
import heroImage from '../../../../assets/hero-image.png';
import { RegularText } from '../../../../components/Typography';
import { InfoWithIcon } from '../../../../components/InfoWithIcon';
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react';

export function Hero() {

  return (
    <section className={styles['hero-container']}>
      <div className={`${styles['hero-content']} ${styles.container}`}>
        <div>
          <section>
            <h1 className={styles['hero-title']}>
              Find the perfect coffee for any time of the day.
            </h1>
            <RegularText size="l" color="subtitle">
              With Coffee Delivery, you receive your coffee wherever you are, at any time.
            </RegularText>
          </section>

          <div className={styles['benefits-container']}>
            <InfoWithIcon
              iconColor='colors-background-brand-yellow-dark'
              icon={<ShoppingCart weight="fill" />}
              text="Simple and secure purchase."
            />
            <InfoWithIcon
              iconColor='colors-background-base-text'
              icon={<Package weight="fill" />}
              text="Packaging keeps the coffee intact."
            />
            <InfoWithIcon
              iconColor='colors-background-brand-yellow'
              icon={<Timer weight="fill" />}
              text="Fast and tracked delivery."
            />
            <InfoWithIcon
              iconColor='colors-background-brand-purple'
              icon={<Coffee weight="fill" />}
              text="The coffee arrives fresh to you."
            />
          </div>
        </div>

        <div className={styles.imageContainer}>
          <img src={heroImage} alt="" />
        </div>
      </div>
    </section>
  );
}