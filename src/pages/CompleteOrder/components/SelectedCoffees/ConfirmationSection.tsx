import { Button } from '../../../../components/Button'
import { RegularText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import styles from './styles.module.scss'
const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart()
  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)
  const formattedCartTotal = formatMoney(cartTotal)

  return (
    <div className={styles['confirmation-section-container']}>
      <div>
        <RegularText size="s">Total items</RegularText>
        <RegularText size="s">${formattedItemsTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s">Delivery</RegularText>
        <RegularText size="s">${formattedDeliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          $ {formattedCartTotal}
        </RegularText>
      </div>

      <Button
        text="Confirm Order"
        disabled={cartQuantity <= 0}
        type="submit"
      />
    </div>
  )
}
