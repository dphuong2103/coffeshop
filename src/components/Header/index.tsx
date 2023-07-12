import styles from './styles.module.scss';
import { MapPin, ShoppingCart } from 'phosphor-react';
import coffeeLogoImage from '../../assets/coffee-delivery-logo.svg';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { useEffect, useState } from 'react';
export function Header() {
  const { cartQuantity } = useCart();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles['header-container']} ${scrollPosition > 0 && styles.sticky}`} >
      <div className={styles.container}>
        <NavLink to="/" className={styles['logo-link']}>
          <img src={coffeeLogoImage} alt="" className={styles['logo-image']} />
        </NavLink>

        <div className={styles['header-buttons-container']}>
          <button className={`${styles['header-button']} ${styles.purple}`}>
            <MapPin size={20} weight="fill" />
            Ha Noi, VN
          </button>
          <NavLink to="/completeOrder" className={styles['cart-link']}>
            <button className={`${styles['header-button']} ${styles.yellow}`}>
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </button>
          </NavLink>
        </div>
      </div>
    </header>
  );
}