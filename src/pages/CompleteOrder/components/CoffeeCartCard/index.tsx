import { Trash } from 'phosphor-react';
import { QuantityInput } from '../../../../components/QuantityInput';
import { RegularText } from '../../../../components/Typography';
import { CartItem } from '../../../../contexts/CartContext';
import { useCart } from '../../../../hooks/useCart';
import { formatMoney } from '../../../../utils/formatMoney';
import styles from './styles.module.scss';

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase');
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease');
  }

  function handleRemove() {
    removeCartItem(coffee.id);
  }

  const coffeeTotal = coffee.price * coffee.quantity;
  const formattedPrice = formatMoney(coffeeTotal);

  return (
    <div className={styles['coffee-cart-card-container']}>
      <div className={styles['coffee-cart-card-container__content']}>
        <img src={`/coffees/${coffee.photo}`} alt="Café" />

        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <div className={styles['actions-container']}>
            <QuantityInput
              size="small"
              quantity={coffee.quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <button className={styles['remove-button']} onClick={handleRemove}>
              <Trash size={16} />
              REMOVE
            </button>
          </div>
        </div>
      </div>

      <p>${formattedPrice}</p>
    </div>
  );
}