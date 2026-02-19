import React from 'react'
import styles from './AppCheckbox.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

type Props = {
  label?: string
  isChecked: boolean
  isDisabled?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  variant?: IUiVariants
  size?: IUiSizes
  className?: string
}

const AppCheckbox: React.FC<Props> = ({
  label,
  isChecked,
  isDisabled,
  onChange,
  variant = 'primary',
  size = 'medium',
  className,
}) => (
  <label
    className={cx(
      styles.appCheckbox,
      styles[size],
      styles[variant],
      { checked: isChecked, disabled: isDisabled },
      className,
    )}
  >
    <input
      type="checkbox"
      checked={isChecked}
      disabled={isDisabled}
      onChange={onChange}
    />
    <span className={styles.appCheckboxView} />
    {label && <div className={styles.appCheckboxLabel}>{label}</div>}
  </label>
)

export default AppCheckbox
