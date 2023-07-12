import { useState } from 'react';
import { QuantityInput } from '../QuantityInput';
import { RegularText, TitleText } from '../Typography';
import styles from './CoffeeCardStyles.module.scss';
import { ShoppingCart } from 'phosphor-react';
import { useCart } from '../../hooks/useCart';

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const { addCoffeeToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function handleDecrease() {
    if (quantity <= 0) return;
    setQuantity((prevQuantity) => prevQuantity - 1);
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    };
    addCoffeeToCart(coffeeToAdd);
    setQuantity(1);
  }

  const formattedPrice = coffee.price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  });

  return (
    <div className={styles['coffee-card-container']}>
      <img src={`/coffees/${coffee.photo}`} alt="" />

      <div className={styles.tags}>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <h2 className={styles.name}>{coffee.name}</h2>
      <p className={styles.description}>{coffee.description}</p>

      <div className={styles['card-footer']}>
        <div>
          <RegularText size="s">$</RegularText>
          <TitleText size="m" color="text">
            {formattedPrice}
          </TitleText>
        </div>

        <div className={styles['add-cart-wrapper']}>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22} color='white' />
          </button>
        </div>
      </div>
    </div>
  );
}