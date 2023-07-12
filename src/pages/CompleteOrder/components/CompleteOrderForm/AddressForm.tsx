import { useFormContext } from 'react-hook-form';
import { Input } from '../../../../components/Input';
import styles from './styles.module.scss';
interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function AddressForm() {
  const { register, formState } = useFormContext();
  const { errors } = formState as unknown as ErrorsType;

  return (
    <div className={styles['address-form-container']}>

      <div className={styles.row}>
        <Input
          type="number"
          placeholder="Number"
          {...register('number')}
          error={errors.number?.message}
  
        />
        <Input
          placeholder="Street"
          className={styles.street}
          {...register('street')}
          error={errors.street?.message}
        />
        <Input
          placeholder="Ward"
          className={styles.ward}
          {...register('ward')}
          error={errors.ward?.message}
        />
      </div>

      <div className={styles.row}>
        <Input
          placeholder="District"
          className={styles.district}
          {...register('district')}
          error={errors.district?.message}
        />
        <Input
          placeholder="City"
          className={styles.city}
          {...register('city')}
          error={errors.city?.message}
        />

      </div>
    </div>
  );
}
