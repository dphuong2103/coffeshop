import { InputHTMLAttributes, forwardRef } from 'react'
import { RegularText } from '../Typography'
import styles from './styles.module.scss'
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightText?: string
}


export const Input = forwardRef<HTMLInputElement, InputProps>(({ error, rightText, className, ...props }, ref) => {
  const inputClassName = `${className} ${styles['input-wrapper']}`

  return (
    <div className={inputClassName}>
      <div className={`${styles['input-style-container']} ${error ? styles['has-error'] : ''}`}>
        <input ref={ref} className={styles['input-styled']} {...props} />
        {rightText && <p className={styles['right-text']}>{rightText}</p>}
      </div>
      {error && <RegularText size="s">{error}</RegularText>}
    </div>
  )
})

Input.displayName = 'Input'


