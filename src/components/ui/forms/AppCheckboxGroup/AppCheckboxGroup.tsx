import React from 'react'
import styles from './AppCheckboxGroup.module.scss'
import AppCheckbox from '@/components/ui/forms/AppCheckbox/AppCheckbox'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

interface ICheckboxRenderProps<T> {
  option: T
  isActive: boolean
  isDisabled: boolean
  onChange: (value: string | number) => void
}

interface IProps<T extends Record<string, unknown>> {
  options: T[]
  value?: (string | number)[]
  onChange?: (values: (string | number)[]) => void
  renderCheckbox?: (props: ICheckboxRenderProps<T>) => React.ReactNode
  variant?: IUiVariants
  size?: IUiSizes
  isDisabled?: boolean
  valueKey?: keyof T
  labelKey?: keyof T
  disabledKey?: keyof T
  className?: string
  optionClassName?: string
}

function AppCheckboxGroup<T extends Record<string, unknown>>({
  options,
  value = [],
  onChange,
  renderCheckbox,
  variant = 'primary',
  size = 'medium',
  isDisabled = false,
  valueKey = 'value' as keyof T,
  labelKey = 'label' as keyof T,
  disabledKey = 'isDisabled' as keyof T,
  className = '',
  optionClassName = '',
}: IProps<T>) {
  const handleCheckboxChange = (optionValue: string | number) => {
    if (!onChange) return
    const isChecked = value.includes(optionValue)
    const newValues = isChecked
      ? value.filter(v => v !== optionValue)
      : [...value, optionValue]
    onChange(newValues)
  }

  return (
    <div className={cx(styles.appCheckboxGroup, className)}>
      {options.map((option) => {
        const optionValue = option[valueKey] as string | number
        const optionLabel = option[labelKey] as string
        const optionDisabled = option[disabledKey] as boolean
        const isActive = value.includes(optionValue)

        if (renderCheckbox) {
          return (
            <div
              key={optionValue}
              className={cx(styles.appCheckboxGroupOption, optionClassName, {
                disabled: optionDisabled || isDisabled,
              })}
            >
              {renderCheckbox({
                option,
                isActive,
                isDisabled: optionDisabled || isDisabled,
                onChange: handleCheckboxChange,
              })}
            </div>
          )
        }

        return (
          <AppCheckbox
            key={optionValue}
            className={optionClassName}
            label={optionLabel}
            isChecked={isActive}
            isDisabled={isDisabled || optionDisabled}
            variant={variant}
            size={size}
            onChange={() => handleCheckboxChange(optionValue)}
          />
        )
      })}
    </div>
  )
}

export default AppCheckboxGroup
